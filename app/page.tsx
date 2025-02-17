import { Prisma } from "@prisma/client";
import ProductCard from "@/components/productCard";
import Navbar from "@/components/navbar"; // Import the singleton instance
import { prisma } from "@/lab/prisma";
import DashboardButton from "@/components/dashboardBtn";

type Product = Prisma.ProductGetPayload<{}>;

async function getProducts(): Promise<Product[]> {
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        inventory: true,
      },
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="container mx-auto py-8">
      <Navbar />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <DashboardButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
