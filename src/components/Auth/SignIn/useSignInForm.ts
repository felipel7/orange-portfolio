import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { SignInFormData, signInSchema } from '../../../schemas/authSchema';
import { axiosInstance } from '../../../services/apiClient';

export default function useSignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { setItem } = useLocalStorage();
  const navigate = useNavigate();
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: SignInFormData) => {
    setItem('token', null);

    try {
      const response = await axiosInstance.post('auth/signin', data);
      if (response.status !== 201) return toast.error('Credenciais inválidas!');

      setItem('token', response.data.token);
      toast.success('Login efetuado com sucesso!');
      return navigate('/');
    } catch (error) {
      toast.error('Ocorreu um erro no servidor.');
    } finally {
      reset();
    }
  };

  return {
    errors,
    handleClickShowPassword,
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting,
    register,
    showPassword,
  };
}
