import { PropsWithChildren } from "react";
import { AuthGuard } from "@/modules/auth/ui/components/AuthGuard";

const Layout = ({ children }: PropsWithChildren) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default Layout;
