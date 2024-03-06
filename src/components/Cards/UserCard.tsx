import { Avatar, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useCurrentUser from '../../hooks/useCurrentUser';
import { getUserFullName } from '../../utils/userUtils';
import UserCardSkeleton from '../Skeletons/UserCardSkeleton';

export default function UserCard() {
  const navigate = useNavigate();

  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return <UserCardSkeleton />;

  if (!user) return;

  const fullName = getUserFullName(user);

  const handleClick = () => {
    navigate('/novo-projeto');
  };

  return (
    <Stack
      alignItems="center"
      gap={{ xs: 2, sm: 4 }}
      mx="auto"
      sx={{ flexDirection: { sm: 'row' } }}
      width="fit-content"
    >
      <Avatar
        sx={{
          height: 122,
          width: 122,
        }}
        variant="circular"
        src={user.picture}
        alt={fullName}
      />

      <Stack
        justifyContent="space-between"
        sx={{
          gap: { xs: 1, sm: 0 },
          height: { xs: 100, sm: 122 },
          marginLeft: { xs: 2, sm: 0 },
        }}
      >
        <Typography
          color="neutral.120"
          component="h3"
          lineHeight={1}
          fontSize={24}
          textTransform="capitalize"
        >
          {`${fullName}`}
        </Typography>

        <Typography color="neutral.130" sx={{ opacity: 0.5 }}>
          Brasil
        </Typography>

        <Button
          color="primary"
          onClick={handleClick}
          size="large"
          variant="contained"
        >
          Adicionar Projeto
        </Button>
      </Stack>
    </Stack>
  );
}
