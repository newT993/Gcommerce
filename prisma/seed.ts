import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  // First, create a main product if it doesn't exist
  const mainProduct = await prisma.product.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      name: "Premium Gaming Laptop",
      description: "High-performance gaming laptop with RTX 4080",
      price: 1999.99,
      inventory: 10,
      imageUrl:
        "https://img.freepik.com/free-photo/alarm-clock-open-laptop-notebook-stacked-wooden-desk-against-wall_23-2147979122.jpg?ga=GA1.1.1409141011.1728146707&semt=ais_hybrid",
      category: "main",
    },
  });

  // Create some sample reviews for the main product
  const reviews = [
    {
      rating: 5,
      comment:
        "Excellent gaming performance! The RTX 4080 handles everything I throw at it.",
      productId: mainProduct.id,
      userId: "", // We'll set this after finding/creating a user
      createdAt: new Date(),
    },
    {
      rating: 4,
      comment: "Great laptop, but runs a bit hot under heavy load.",
      productId: mainProduct.id,
      userId: "", // We'll set this after finding/creating a user
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    },
    {
      rating: 5,
      comment: "Best gaming laptop I've ever owned. Worth every penny!",
      productId: mainProduct.id,
      userId: "", // We'll set this after finding/creating a user
      createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
    },
  ];

  // Find or create a user for the reviews
  const user = await prisma.user.upsert({
    where: {
      email: "reviewer@example.com",
    },
    update: {},
    create: {
      name: "John Reviewer",
      email: "reviewer@example.com",
      emailVerified: new Date(),
    },
  });

  // Add the reviews with the user ID
  for (const review of reviews) {
    await prisma.review.create({
      data: {
        ...review,
        userId: user.id,
      },
    });
  }

  console.log(`✅ Added ${reviews.length} reviews to main product`);
}

main()
  .catch((e) => {
    console.error("Error seeding reviews:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
