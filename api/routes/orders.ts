import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();
const prisma = new PrismaClient();

// Create a new order
router.post('/', authenticate, async (req: any, res: any) => {
  try {
    const userId = req.user.userId;
    const { items, subtotal, shipping, total, paymentMethod, shippingAddress, billingAddress } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Order must contain items' });
    }

    const order = await prisma.order.create({
      data: {
        userId,
        subtotal,
        shipping,
        total,
        paymentMethod,
        shippingAddress: JSON.stringify(shippingAddress),
        billingAddress: billingAddress ? JSON.stringify(billingAddress) : null,
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          }))
        }
      },
      include: {
        items: true
      }
    });

    res.status(201).json(order);
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ message: 'Server error creating order' });
  }
});

// Get an order by ID (for invoice)
router.get('/:id', authenticate, async (req: any, res: any) => {
  try {
    const orderId = parseInt(req.params.id);
    const userId = req.user.userId;

    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
      include: {
        items: {
          include: {
            product: true
          }
        },
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            phone: true
          }
        }
      }
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Ensure the order belongs to the logged-in user
    if (order.userId !== userId) {
      return res.status(403).json({ message: 'Unauthorized access to order' });
    }

    res.json(order);
  } catch (error) {
    console.error('Fetch order error:', error);
    res.status(500).json({ message: 'Server error fetching order' });
  }
});

// Get all orders for the logged-in user
router.get('/', authenticate, async (req: any, res: any) => {
  try {
    const userId = req.user.userId;
    const orders = await prisma.order.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    });
    res.json(orders);
  } catch (error) {
    console.error('Fetch orders error:', error);
    res.status(500).json({ message: 'Server error fetching orders' });
  }
});

export default router;
