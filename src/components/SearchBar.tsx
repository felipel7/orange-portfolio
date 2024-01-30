import { Clear } from '@mui/icons-material';
import { IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';

interface SearchBarProps {
  onSearch: (val: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const debounceValue = useDebounce(searchTerm);

  useEffect(() => {
    onSearch(debounceValue);
  }, [debounceValue, onSearch]);

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <>
      <Typography
        color="neutral.130"
        component="h4"
        sx={{ opacity: 0.6 }}
        variant="h6"
      >
        Meus Projetos
      </Typography>

      <TextField
        label="Buscar tags"
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
        sx={{ maxWidth: 512, marginTop: 2, marginBottom: { xs: 3, sm: 5 } }}
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
