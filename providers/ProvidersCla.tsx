"use client";

import { CartProvider } from "@/contexts/cartContexts";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export default function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <NextAuthSessionProvider session={session}>
      <CartProvider>{children}</CartProvider>
    </NextAuthSessionProvider>
  );
}
