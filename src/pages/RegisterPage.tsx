import AuthPageLayout from '../components/AuthPageLayout';
import RegistrationForm from '../components/Forms/RegisterForm';

export default function RegisterPage() {
  return (
    <AuthPageLayout imageURL="/images/img_cadastro.png">
      <RegistrationForm />
    </AuthPageLayout>
  );
}
