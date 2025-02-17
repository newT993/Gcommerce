// components/Navbar.tsx
"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link href="/">
        <span className="text-white text-xl font-bold cursor-pointer">
          E-Commerce
        </span>
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/products">
          <span className="text-gray-300 hover:text-white cursor-pointer">
            Products
          </span>
        </Link>
        {status === "loading" ? (
          <p className="text-gray-300">Loading...</p>
        ) : session ? (
          <>
            <span className="text-gray-300">
              {session.user?.name || session.user?.email}
            </span>
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}
