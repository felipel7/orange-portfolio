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
  profileImageAddress: string;
};
