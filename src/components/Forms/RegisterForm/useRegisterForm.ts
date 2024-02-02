import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import api from '../../../services/apiClient';
import { RegisterFormData, userSchema } from '../../../validation/userSchema';

export default function useRegisterForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(userSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState<SnackbarType>({
    open: false,
    type: 'success',
    label: '',
  });
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await api.post('user/register', data);
      if (response.status === 201) {
        setSnackbar({
          open: true,
          label: 'Cadastro feito com sucesso',
          type: 'success',
        });
        setTimeout(() => {
          navigate('/login');
        }, 2500);
      } else {
        reset();
        setSnackbar({
          open: true,
          label: 'Ocorreu um erro ao tentar realizar o cadastro',
          type: 'error',
        });
      }
    } catch (e) {
      reset();
      setSnackbar({
        open: true,
        label:
          'Erro no servidor. Por favor, atualize a página e tente novamente',
        type: 'error',
      });
      console.error(e);
    }
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    errors,
    handleClickShowPassword,
    handleSnackbarClose,
    register,
    showPassword,
    snackbar,
  };
}
