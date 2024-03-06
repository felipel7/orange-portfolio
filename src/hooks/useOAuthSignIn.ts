import { CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosInstance } from '../services/apiClient';
import useLocalStorage from './useLocalStorage';

export default function useOAuthSignIn() {
  const { setItem } = useLocalStorage();
  const navigate = useNavigate();

  const onSuccess = async (credentialResponse: CredentialResponse) => {
    const token = credentialResponse.credential!;

    try {
      const response = await axiosInstance.post('auth/google/signin', {
        token,
      });
      if (response.status === 201) {
        setItem('token', response.data.token);
        toast.success('Login efetuado com sucesso!');
        return navigate('/');
      } else {
        toast.error('Credenciais inválidas!');
      }
    } catch (error) {
      toast.error('Ocorreu um erro no servidor.');
    }
  };

  const onError = () => {
    return toast.error('Ocorreu um erro no servidor.');
  };

  return {
    onSuccess,
    onError,
  };
}
