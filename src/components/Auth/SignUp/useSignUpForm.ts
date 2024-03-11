import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { SignUpFormData, signUpSchema } from '../../../schemas/authSchema';
import { axiosInstance } from '../../../services/apiClient';

export default function useSignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setItem } = useLocalStorage();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: SignUpFormData) => {
    setItem('token', null);

    try {
      const response = await axiosInstance.post('auth/signup', data);
      if (response.status !== 201)
        return toast.error('Ocorreu um erro ao tentar realizar o cadastro.');

      setItem('token', response.data.token);
      toast.success('Cadastro feito com sucesso!');
      return navigate('/');
    } catch (e) {
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
