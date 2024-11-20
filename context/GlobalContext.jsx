"use client";

import { SessionProvider } from "next-auth/react";


function GlobalContext({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

export default GlobalContext;
