import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/apiClient';

export default function useCurrentUser() {
  const apiClient = new ApiClient<IUser>('auth/me');

  return useQuery({
    queryKey: ['user'],
    queryFn: () => apiClient.get(),
    staleTime: 1000 * 60 * 60,
  });
}
