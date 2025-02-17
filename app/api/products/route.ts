import { prisma } from "@/lab/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: { reviews: true },
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching products" },
      { status: 500 }
    );
  }
}
