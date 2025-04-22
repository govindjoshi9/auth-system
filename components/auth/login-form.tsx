import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLable="Welcome back"
      backButtonLabel="Don't have a account"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form!
     </CardWrapper>
  );
};
