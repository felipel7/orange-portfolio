import SignInSection from '../../../components/Auth/SignIn';
import AuthPageLayout from '../AuthLayout';

export default function SignInPage() {
  return (
    <AuthPageLayout url="/images/img_login.png">
      <SignInSection />
    </AuthPageLayout>
  );
}
