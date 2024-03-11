import { Avatar, Box, Stack, Typography } from '@mui/material';
import { getUserFullName } from '../../../utils/userUtils';

export default function UserDetails({ user }: { user: IUser }) {
  const fullName = getUserFullName(user);

  const date = new Date();
  const year = date.getFullYear().toString().slice(2);
  const month = date.getMonth() + 1;
  const formattedMonth = month < 10 ? '0' + month : month;

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Avatar
        variant="circular"
        src={user.picture}
        alt={user.firstName}
        sx={{ width: 40, height: 40 }}
      />
      <Stack
        direction={{ xs: 'row', md: 'column' }}
        spacing={{ xs: 1, md: 0 }}
        flexWrap="wrap"
      >
        <Typography
          fontWeight={{ xs: 400, md: 500 }}
          color={{ xs: 'neutral.110', md: 'neutral.120' }}
        >
          {fullName}
        </Typography>

        <Typography color="neutral.110">{`${formattedMonth}/${year}`}</Typography>
      </Stack>
    </Box>
  );
}
