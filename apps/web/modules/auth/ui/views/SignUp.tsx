import { SignUp as ClerkSignUp } from "@clerk/nextjs";

export const SignUp = () => {
  return <ClerkSignUp routing="hash" />;
};
