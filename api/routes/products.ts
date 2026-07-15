import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    // Parse JSON fields back to arrays/objects before sending
    const formattedProducts = products.map((p) => ({
      ...p,
      gallery: JSON.parse(p.gallery),
      description: JSON.parse(p.description),
      specs: JSON.parse(p.specs),
      highlights: JSON.parse(p.highlights)
    }));
    res.json(formattedProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get product by id
router.get('/:id', async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({
      ...product,
      gallery: JSON.parse(product.gallery),
      description: JSON.parse(product.description),
      specs: JSON.parse(product.specs),
      highlights: JSON.parse(product.highlights)
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get products by category
router.get('/category/:category', async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: { category: req.params.category }
    });
    const formattedProducts = products.map((p) => ({
      ...p,
      gallery: JSON.parse(p.gallery),
      description: JSON.parse(p.description),
      specs: JSON.parse(p.specs),
      highlights: JSON.parse(p.highlights)
    }));
    res.json(formattedProducts);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
