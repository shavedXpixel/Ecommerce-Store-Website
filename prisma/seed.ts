import { PrismaClient } from '@prisma/client';
import { products } from '../src/data/products';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with mock products...');
  
  // Clear existing products
  await prisma.product.deleteMany();
  
  for (const product of products) {
    await prisma.product.create({
      data: {
        slug: product.slug,
        name: product.name,
        brand: product.brand,
        category: product.category,
        categoryLabel: product.categoryLabel,
        price: product.price,
        rating: product.rating,
        reviewCount: product.reviewCount,
        isNew: product.isNew || false,
        image: product.image,
        gallery: JSON.stringify(product.gallery),
        shortDescription: product.shortDescription,
        description: JSON.stringify(product.description),
        specs: JSON.stringify(product.specs),
        highlights: JSON.stringify(product.highlights)
      }
    });
  }
  
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
