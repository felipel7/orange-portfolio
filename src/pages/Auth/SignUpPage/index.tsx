import SignUpSection from '../../../components/Auth/SignUp';
import AuthPageLayout from '../AuthLayout';

export default function SignUpPage() {
  return (
    <AuthPageLayout url="/images/img_cadastro.png">
      <SignUpSection />
    </AuthPageLayout>
  );
}
