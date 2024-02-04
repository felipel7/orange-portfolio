import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectViewModal from '../components/Modal/ProjectViewModal';
// import api from '../services/apiClient';

export default function ProjectDetailsPage() {
  const [open, setOpen] = useState(true);
  const [project, setProject] = useState({} as Project);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    // api.get(`projects/${params.id}`).then(res => setProject(res.data))
  }, []);

  const handleClose = () => {
    setOpen(false);
    navigate('/descobrir');
  };

  return (
    <Container maxWidth="lg" component="section">
      <ProjectViewModal open={open} onClose={handleClose} project={project} />
    </Container>
  );
}
