import { SignInForm } from "../../components/sign-in-form/SignInForm";
import { SignUpForm } from "../../components/sign-up-form/SignUpForm";

import "./Auth.style.scss";

export const Auth = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
