import { notFound } from "next/navigation";
import { prisma } from "@/lab/prisma";
import ProductDetails from "../../../components/productDetail";
import { ProductWithReviews } from "@/types/product";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  return {
    title: product?.name || "Product Not Found",
    description: product?.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = (await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
    include: {
      reviews: {
        include: {
          user: {
            select: {
              name: true,
              image: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  })) as ProductWithReviews | null;

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
