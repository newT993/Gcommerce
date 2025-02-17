"use client";

import { useRouter } from "next/navigation";

export default function DashboardButton() {
  const router = useRouter();

  return (
    <button
      className="bg-blue-500 text-gray-300 p-2 px-4 rounded-lg hover:text-white"
      onClick={() => router.push("/admin")}
    >
      Dashboard
    </button>
  );
}
