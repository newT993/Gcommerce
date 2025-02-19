import { prisma } from "@/lab/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");

  try {
    let products;

    if (category === "main") {
      products = await prisma.product.findMany({
        where: { category: "main" },
        include: { reviews: true },
      });
    } else if (category === "top-selling") {
      products = await prisma.product.findMany({
        where: { category: "top-selling" },
        include: { reviews: true },
      });
    } else {
      products = await prisma.product.findMany({
        include: { reviews: true },
      });
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Error fetching products" },
      { status: 500 }
    );
  }
}
