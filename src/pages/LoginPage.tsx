import AuthPageLayout from '../components/AuthPageLayout';
import LoginForm from '../components/Forms/LoginForm';

export default function LoginPage() {
  return (
    <AuthPageLayout imageURL="images/img_login.png">
      <LoginForm />
    </AuthPageLayout>
  );
}
