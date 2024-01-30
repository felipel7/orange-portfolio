import { Clear } from '@mui/icons-material';
import { IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

interface SearchBarProps {
  onSearch: (val: string) => void;
  label?: string;
  maxWidth?: number;
}

export default function SearchBar({
  onSearch,
  label,
  maxWidth = 512,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  const handleClear = () => {
    onSearch('');
    setSearchTerm('');
  };

  return (
    <>
      {label && (
        <Typography
          color="neutral.130"
          component="h4"
          sx={{ opacity: 0.6 }}
          variant="h6"
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
