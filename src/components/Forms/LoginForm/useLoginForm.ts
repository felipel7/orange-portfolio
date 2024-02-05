import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../../hooks/useLocalStorage';
import api from '../../../services/apiClient';
import useStore from '../../../store/userStore';
import { LoginFormData, loginSchema } from '../../../validation/userSchema';

interface LoginResponse {
  success: boolean;
  token: string;
  user: User;
}

export default function useLoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState<SnackbarType>({
    open: false,
    type: 'success',
    label: '',
  });
  const navigate = useNavigate();
  const { setItem } = useLocalStorage();
  const { setUser } = useStore();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const onSubmit = async (data: LoginFormData) => {
    setItem('token', null);
    setItem('user', null);
    try {
      const response = await api.post<LoginResponse>('user/login', data);

      if (response.data.success) {
        setItem('token', response.data.token);
        setItem('user', response.data.user);
        setUser(response.data.user);
        return navigate('/');
      } else {
        reset();
        setSnackbar({
          open: true,
          label: 'Credenciais inválidas. Tente novamente.',
          type: 'error',
        });
      }
    } catch (error) {
      reset();
      setSnackbar({
        open: true,
        label: 'Erro no servidor. Tente novamente mais tarde.',
        type: 'error',
      });
      console.error(error);
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
