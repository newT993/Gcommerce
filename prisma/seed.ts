import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  try {
    // Clear existing data
    console.log("Clearing existing data...");
    await prisma.orderItem.deleteMany({});
    await prisma.order.deleteMany({});
    await prisma.review.deleteMany({});
    await prisma.product.deleteMany({});

    console.log("Creating products...");
    // Create products with faker
    const products = Array.from({ length: 20 }).map(() => ({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price()),
      inventory: faker.number.int({ min: 0, max: 100 }),
    }));

    for (const product of products) {
      await prisma.product.create({
        data: product,
      });
    }

    console.log(`✅ Successfully generated ${products.length} products`);
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
