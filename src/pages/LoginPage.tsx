import AuthPageLayout from "../components/AuthPageLayout";
import { LoginFormContainer } from "../components/Forms/LoginForm/LoginFormContainer";

export default function LoginPage() {
  return (
    <AuthPageLayout imageURL="images/img_login.png">
      <LoginFormContainer />
    </AuthPageLayout>
  );
}
