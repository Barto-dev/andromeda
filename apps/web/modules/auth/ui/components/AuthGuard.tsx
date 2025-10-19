"use client";

import { PropsWithChildren } from "react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { AuthLayout } from "@/modules/auth/ui/layouts/AuthLayout";
import { SignIn } from "@/modules/auth/ui/views/SignIn";

export const AuthGuard = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AuthLoading>
        <AuthLayout>
          <div>Loading...</div>
        </AuthLayout>
      </AuthLoading>
      <Unauthenticated>
        <AuthLayout>
          <SignIn />
        </AuthLayout>
      </Unauthenticated>
      <Authenticated>{children}</Authenticated>
    </>
  );
};
