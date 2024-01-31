import { useParams } from 'react-router-dom';
import SuccessDialog from '../components/Modal/SuccessDialog';

export default function ProjectSuccessPage() {
  const params = useParams();

  return <SuccessDialog label={params.title!} />;
}
