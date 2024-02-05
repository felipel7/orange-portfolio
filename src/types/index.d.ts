type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  imageProject: string;
  tags: string;
  createdAt: string;
  user: User;
};

type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  profileImageAddress?: string;
};

type PreviewProject = Project & {
  tags: string[] | string;
  user: PreviewProjectUser;
};

type PreviewProjectUser = Omit<User, 'id'> & {
  profileImageUser: string;
};

type SnackbarType = {
  open: boolean;
  type: 'success' | 'error';
  label: string;
  // eslint-disable-next-line
  onClose?: (event: Event | SyntheticEvent<any, Event>) => void;
};
