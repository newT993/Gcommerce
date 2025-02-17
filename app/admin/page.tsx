import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lab/prisma";
import AdminOrders from "@/components/adminOrders";
import AdminProducts from "@/components/adminProducts";
import Cart from "@/components/mycart";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/");
  }

  // Fetch orders and products
  const orders = await prisma.order.findMany({
    include: {
      items: {
        include: {
          product: true,
        },
      },
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const products = await prisma.product.findMany({
    include: {
      reviews: true,
    },
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid gap-6">
        <section className="bg-slate-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Orders</h2>
          <AdminOrders orders={orders} />
        </section>

        <section className="bg-slate-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <AdminProducts products={products} />
        </section>
      </div>
      <Cart />
    </div>
  );
}
