// components/Navbar.tsx
"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <header className="flex justify-between items-center pb-6 bg-white border-b-2 border-gray-200">
      <h1 className="text-xl font-bold">E-Shop</h1>
      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex mr-12 space-x-6 font-bold text-gray-100">
          <Link href="#" className="text-gray-500 hover:text-black">
            Home
          </Link>
        </nav>
        <button className="border-2 animate-bounce rounded-full w-12 h-12">
          🦖
        </button>
        <div className="px-4 py-2 bg-black space-x-4 text-white rounded-md">
          {status === "loading" ? (
            <p className="text-gray-300">Loading...</p>
          ) : session ? (
            <>
              <span className="text-gray-300 font-semibold text-xs">
                {session.user?.name || session.user?.email}
              </span>
              <button
                onClick={() => signOut()}
                className="bg-red-500 font-semibold hover:bg-red-600 text-white px-3 py-1 rounded"
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
      </div>
    </header>
  );
}
