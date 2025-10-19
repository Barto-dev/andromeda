import { PropsWithChildren } from "react";

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return <div className="center min-w-screen min-h-screen">{children}</div>;
};
