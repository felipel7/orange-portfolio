import { Clear } from '@mui/icons-material';
import { IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';

interface SearchBarProps {
  label?: string;
  maxWidth?: number;
}

export default function SearchBar({ label, maxWidth = 512 }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const debounceValue = useDebounce(searchTerm);
  const setSearchParams = useSearchParams()[1];

  useEffect(() => {
    setSearchParams({ q: searchTerm.trim() });

    if (!searchTerm) {
      setSearchParams(params => {
        params.delete('q');
        return params;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <>
      {label && (
        <Typography
          color="neutral.130"
          component="h4"
          sx={{ opacity: 0.6 }}
          fontSize={20}
        >
          {label}
        </Typography>
      )}

      <TextField
        label="Buscar tags"
        fullWidth
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
        sx={{
          maxWidth,
          marginTop: 2,
          marginBottom: { xs: 3, sm: 5 },
        }}
        InputProps={{
          endAdornment: searchTerm && (
            <IconButton onClick={handleClear}>
              <Clear />
            </IconButton>
          ),
        }}
      />
    </>
  );
}
