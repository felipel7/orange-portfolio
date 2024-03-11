import { Container } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ViewProjectModal from '../../components/Modal/ViewProject';
import ViewProjectDetails from '../../components/Modal/ViewProject/ViewProjectDetails';
import ProjectDetailsSkeleton from '../../components/Skeletons/ProjectDetailsSkeleton';
import ApiClient from '../../services/apiClient';

export default function ProjectDetailsPage() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const params = useParams();
  const apiClient = new ApiClient<IProject>('projects');

  const { data: project, isLoading } = useQuery({
    queryKey: ['project', params.id],
    queryFn: () => apiClient.get(params.id),
  });

  const handleClose = () => {
    setOpen(false);
    navigate('/descobrir');
  };

  if (isLoading) return <ProjectDetailsSkeleton />;

  if (!project) return;

  return (
    <Container maxWidth="lg" component="section">
      <ViewProjectModal isOpen={open} onClose={handleClose}>
        <ViewProjectDetails project={project} />
      </ViewProjectModal>
    </Container>
  );
}
