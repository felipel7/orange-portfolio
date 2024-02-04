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

type PreviewProject = Project & {
  tags: string[];
};

type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  profileImageAddress: string;
};

type SnackbarType = {
  open: boolean;
  type: 'success' | 'error';
  label: string;
  // eslint-disable-next-line
  onClose?: (event: Event | SyntheticEvent<any, Event>) => void;
};
