interface IProject {
  id: number;
  title: string;
  description: string;
  link: string;
  images: ProjectImage[];
  tags: ITag[];
  createdAt?: string;
  updatedAt?: string;
  user: User;
}

interface IProjectFormPreview extends Partial<IProject> {
  tags: string[];
}

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  picture?: string;
}

interface ITag {
  tag: {
    id: number;
    label: string;
  };
}
