import { Container } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectViewModal from '../components/Modal/ProjectViewModal';
import api from '../services/apiClient';

export default function ProjectDetailsPage() {
  const [open, setOpen] = useState(true);
  const [project, setProject] = useState<Project | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  const fetchProjects = () => api.get('project/all').then(res => res.data);

  const { data: projects, error } = useQuery<Project[], Error>({
    queryKey: ['allProjects'],
    queryFn: fetchProjects,
  });

  const handleClose = () => {
    setOpen(false);
    navigate('/descobrir');
  };

  useEffect(() => {
    setOpen(true);
    const projectId = parseInt(params.id!);

    if (projectId && projects && projects.length > 0) {
      const project = projects.find(p => p.id === projectId);
      if (project) setProject(project);
    }
  }, [projects, params]);

  if (error) return <p>{error.message}</p>;

  return (
    <Container maxWidth="lg" component="section">
      {project && (
        <ProjectViewModal
          open={open}
          onClose={handleClose}
          projectForPreview={project}
        />
      )}
    </Container>
  );
}
