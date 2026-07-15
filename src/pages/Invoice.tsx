import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, Package } from "lucide-react";
import html2pdf from "html2pdf.js";

interface OrderItem {
  id: number;
  quantity: number;
  price: number;
  product: {
    name: string;
    image: string;
  };
}

interface Order {
  id: number;
  subtotal: number;
  shipping: number;
  total: number;
  paymentMethod: string;
  status: string;
  createdAt: string;
  shippingAddress: string;
  billingAddress: string | null;
  items: OrderItem[];
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
  };
}

const Invoice = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { token, isAuthenticated } = useAuth();
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/invoice/${id}` } });
      return;
    }

    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orders/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setOrder(data);
        } else {
          console.error("Order not found or unauthorized");
          navigate('/');
        }
      } catch (error) {
        console.error("Failed to fetch order", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder();
  }, [id, isAuthenticated, token, navigate]);

  const downloadPDF = () => {
    const element = document.getElementById("invoice-content");
    if (!element) return;

    const opt = {
      margin: 10,
      filename: `invoice-${order?.id}.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading Invoice...</div>;
  }

  if (!order) {
    return null;
  }

  const shippingAddr = JSON.parse(order.shippingAddress);
  const billingAddr = order.billingAddress ? JSON.parse(order.billingAddress) : shippingAddr;

  return (
    <div className="min-h-screen bg-muted/20 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Button variant="outline" onClick={() => navigate('/')}>
            Back to Store
          </Button>
          <Button onClick={downloadPDF} className="gap-2">
            <Download className="w-4 h-4" /> Download PDF
          </Button>
        </div>

        {/* The Invoice Content - This part is converted to PDF */}
        <div id="invoice-content" className="bg-background p-8 sm:p-12 shadow-sm rounded-none">
          <div className="flex justify-between items-start border-b border-muted pb-8 mb-8">
            <div>
              <h1 className="text-3xl font-light text-foreground mb-2">INVOICE</h1>
              <p className="text-muted-foreground">Order #{order.id.toString().padStart(6, '0')}</p>
              <div className="flex items-center gap-2 mt-4 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium text-sm">Payment Successful</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold tracking-tighter uppercase mb-4">Shaved X Pixel</div>
              <p className="text-sm text-muted-foreground">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p className="text-sm text-muted-foreground">Payment Method: {order.paymentMethod}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-medium text-foreground mb-3 uppercase text-sm tracking-wider">Billed To</h3>
              <p className="text-sm text-muted-foreground">{order.user.firstName} {order.user.lastName}</p>
              <p className="text-sm text-muted-foreground">{billingAddr.address}</p>
              <p className="text-sm text-muted-foreground">{billingAddr.city}, {billingAddr.postalCode}</p>
              <p className="text-sm text-muted-foreground">{billingAddr.country}</p>
              <p className="text-sm text-muted-foreground mt-2">{order.user.email}</p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-3 uppercase text-sm tracking-wider">Shipped To</h3>
              <p className="text-sm text-muted-foreground">{shippingAddr.address}</p>
              <p className="text-sm text-muted-foreground">{shippingAddr.city}, {shippingAddr.postalCode}</p>
              <p className="text-sm text-muted-foreground">{shippingAddr.country}</p>
            </div>
          </div>

          <table className="w-full text-left mb-12">
            <thead>
              <tr className="border-b border-muted text-sm uppercase tracking-wider text-muted-foreground">
                <th className="pb-4 font-medium">Item</th>
                <th className="pb-4 font-medium text-center">Qty</th>
                <th className="pb-4 font-medium text-right">Price</th>
                <th className="pb-4 font-medium text-right">Total</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {order.items.map((item) => (
                <tr key={item.id} className="border-b border-muted/50">
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      {item.product.image ? (
                         <img src={item.product.image} className="w-12 h-12 object-cover" alt={item.product.name} />
                      ) : (
                        <div className="w-12 h-12 bg-muted flex items-center justify-center"><Package className="w-6 h-6 text-muted-foreground"/></div>
                      )}
                      <span className="font-medium text-foreground">{item.product.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-center text-muted-foreground">{item.quantity}</td>
                  <td className="py-4 text-right text-muted-foreground">₹{item.price.toLocaleString("en-IN")}</td>
                  <td className="py-4 text-right font-medium text-foreground">₹{(item.price * item.quantity).toLocaleString("en-IN")}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end">
            <div className="w-full sm:w-1/2 space-y-3 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>₹{order.subtotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>{order.shipping === 0 ? "Free" : `₹${order.shipping.toLocaleString("en-IN")}`}</span>
              </div>
              <div className="flex justify-between text-lg font-medium text-foreground pt-4 border-t border-muted">
                <span>Total</span>
                <span>₹{order.total.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-muted text-center text-sm text-muted-foreground">
            <p>Thank you for shopping with Shaved X Pixel!</p>
            <p className="mt-1">If you have any questions about this invoice, please contact support.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
