import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <div className="center min-w-screen min-h-screen">{children}</div>;
};

export default AuthLayout;
