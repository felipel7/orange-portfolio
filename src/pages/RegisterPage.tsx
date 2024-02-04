import AuthPageLayout from '../components/AuthPageLayout';
import RegisterFormContainer from '../components/Forms/RegisterForm/RegisterFormContainer';

export default function RegisterPage() {
  return (
    <AuthPageLayout imageURL="/images/img_cadastro.png">
      <RegisterFormContainer />
    </AuthPageLayout>
  );
}
