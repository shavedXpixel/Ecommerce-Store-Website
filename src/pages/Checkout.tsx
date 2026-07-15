import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Minus, Plus, CreditCard, Check, Banknote, Smartphone } from "lucide-react";
import CheckoutHeader from "../components/header/CheckoutHeader";
import Footer from "../components/footer/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";

const Checkout = () => {
  const [showDiscountInput, setShowDiscountInput] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [customerDetails, setCustomerDetails] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: ""
  });
  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: ""
  });
  const [hasSeparateBilling, setHasSeparateBilling] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: ""
  });
  const [shippingOption, setShippingOption] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    upiId: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  
  const { cartItems, updateQuantity, clearCart } = useCart();
  const { token, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('₹', '').replace(/,/g, ''));
    return sum + (price * item.quantity);
  }, 0);

  const getShippingCost = () => {
    switch (shippingOption) {
      case "express":
        return 499;
      case "overnight":
        return 999;
      default:
        return 0; // Standard shipping is free
    }
  };
  
  const shipping = getShippingCost();
  const total = subtotal + shipping;

  const handleDiscountSubmit = () => {
    // Handle discount code submission
    console.log("Discount code submitted:", discountCode);
    setShowDiscountInput(false);
  };

  const handleCustomerDetailsChange = (field: string, value: string) => {
    setCustomerDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleShippingAddressChange = (field: string, value: string) => {
    setShippingAddress(prev => ({ ...prev, [field]: value }));
  };

  const handleBillingDetailsChange = (field: string, value: string) => {
    setBillingDetails(prev => ({ ...prev, [field]: value }));
  };

  const handlePaymentDetailsChange = (field: string, value: string) => {
    setPaymentDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleCompleteOrder = async () => {
    if (!isAuthenticated) {
      toast.error("Please login to complete your order");
      navigate('/auth/login', { state: { from: '/checkout' } });
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setIsProcessing(true);
    
    try {
      const orderPayload = {
        items: cartItems.map(item => ({
          productId: parseInt(item.id),
          quantity: item.quantity,
          price: parseFloat(item.price.replace('₹', '').replace(/,/g, ''))
        })),
        subtotal,
        shipping,
        total,
        paymentMethod,
        shippingAddress,
        billingAddress: hasSeparateBilling ? billingDetails : shippingAddress
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(orderPayload)
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const order = await response.json();
      
      setPaymentComplete(true);
      clearCart();
      toast.success("Order placed successfully!");
      
      setTimeout(() => {
        navigate(`/invoice/${order.id}`);
      }, 1500);

    } catch (error) {
      console.error(error);
      toast.error("There was an error processing your order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <CheckoutHeader />
      
      <main className="pt-6 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Order Summary - First on mobile, last on desktop */}
            <div className="lg:col-span-1 lg:order-2">
              <div className="bg-muted/20 p-8 rounded-none sticky top-6">
                <h2 className="text-lg font-light text-foreground mb-6">Order Summary</h2>
                
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 bg-muted rounded-none overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-light text-foreground">{item.name}</h3>
                        
                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0 rounded-none border-muted-foreground/20"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium text-foreground min-w-[2ch] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0 rounded-none border-muted-foreground/20"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-foreground font-medium">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Discount Code Section */}
                <div className="mt-8 pt-6 border-t border-muted-foreground/20">
                  {!showDiscountInput ? (
                    <button 
                      onClick={() => setShowDiscountInput(true)}
                      className="text-sm text-foreground underline hover:no-underline transition-all"
                    >
                      Discount code
                    </button>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          value={discountCode}
                          onChange={(e) => setDiscountCode(e.target.value)}
                          placeholder="Enter discount code"
                          className="flex-1 rounded-none"
                        />
                        <button 
                          onClick={handleDiscountSubmit}
                          className="text-sm text-foreground underline hover:no-underline transition-all px-2"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-muted-foreground/20 mt-4 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Column - Forms */}
            <div className="lg:col-span-2 lg:order-1 space-y-8">

              {/* Customer Details Form */}
              <div className="bg-muted/20 p-8 rounded-none">
                <h2 className="text-lg font-light text-foreground mb-6">Customer Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="email" className="text-sm font-light text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerDetails.email}
                      onChange={(e) => handleCustomerDetailsChange("email", e.target.value)}
                      className="mt-2 rounded-none"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-light text-foreground">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={customerDetails.firstName}
                        onChange={(e) => handleCustomerDetailsChange("firstName", e.target.value)}
                        className="mt-2 rounded-none"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-light text-foreground">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={customerDetails.lastName}
                        onChange={(e) => handleCustomerDetailsChange("lastName", e.target.value)}
                        className="mt-2 rounded-none"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-light text-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={customerDetails.phone}
                      onChange={(e) => handleCustomerDetailsChange("phone", e.target.value)}
                      className="mt-2 rounded-none"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Shipping Address */}
                  <div className="border-t border-muted-foreground/20 pt-6 mt-8">
                    <h3 className="text-base font-light text-foreground mb-4">Shipping Address</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="shippingAddress" className="text-sm font-light text-foreground">
                          Address *
                        </Label>
                        <Input
                          id="shippingAddress"
                          type="text"
                          value={shippingAddress.address}
                          onChange={(e) => handleShippingAddressChange("address", e.target.value)}
                          className="mt-2 rounded-none"
                          placeholder="Street address"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="shippingCity" className="text-sm font-light text-foreground">
                            City *
                          </Label>
                          <Input
                            id="shippingCity"
                            type="text"
                            value={shippingAddress.city}
                            onChange={(e) => handleShippingAddressChange("city", e.target.value)}
                            className="mt-2 rounded-none"
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <Label htmlFor="shippingPostalCode" className="text-sm font-light text-foreground">
                            Postal Code *
                          </Label>
                          <Input
                            id="shippingPostalCode"
                            type="text"
                            value={shippingAddress.postalCode}
                            onChange={(e) => handleShippingAddressChange("postalCode", e.target.value)}
                            className="mt-2 rounded-none"
                            placeholder="Postal code"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="shippingCountry" className="text-sm font-light text-foreground">
                          Country *
                        </Label>
                        <Input
                          id="shippingCountry"
                          type="text"
                          value={shippingAddress.country}
                          onChange={(e) => handleShippingAddressChange("country", e.target.value)}
                          className="mt-2 rounded-none"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Billing Address Checkbox */}
                  <div className="border-t border-muted-foreground/20 pt-6 mt-8">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="separateBilling"
                        checked={hasSeparateBilling}
                        onCheckedChange={(checked) => setHasSeparateBilling(checked === true)}
                      />
                      <Label 
                        htmlFor="separateBilling" 
                        className="text-sm font-light text-foreground cursor-pointer"
                      >
                        Other billing address
                      </Label>
                    </div>
                  </div>

                  {/* Billing Details - shown when checkbox is checked */}
                  {hasSeparateBilling && (
                    <div className="space-y-6 pt-4">
                      <h3 className="text-base font-light text-foreground">Billing Details</h3>
                      
                      <div>
                        <Label htmlFor="billingEmail" className="text-sm font-light text-foreground">
                          Email Address *
                        </Label>
                        <Input
                          id="billingEmail"
                          type="email"
                          value={billingDetails.email}
                          onChange={(e) => handleBillingDetailsChange("email", e.target.value)}
                          className="mt-2 rounded-none"
                          placeholder="Enter billing email"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="billingFirstName" className="text-sm font-light text-foreground">
                            First Name *
                          </Label>
                          <Input
                            id="billingFirstName"
                            type="text"
                            value={billingDetails.firstName}
                            onChange={(e) => handleBillingDetailsChange("firstName", e.target.value)}
                            className="mt-2 rounded-none"
                            placeholder="First name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="billingLastName" className="text-sm font-light text-foreground">
                            Last Name *
                          </Label>
                          <Input
                            id="billingLastName"
                            type="text"
                            value={billingDetails.lastName}
                            onChange={(e) => handleBillingDetailsChange("lastName", e.target.value)}
                            className="mt-2 rounded-none"
                            placeholder="Last name"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="billingPhone" className="text-sm font-light text-foreground">
                          Phone Number
                        </Label>
                        <Input
                          id="billingPhone"
                          type="tel"
                          value={billingDetails.phone}
                          onChange={(e) => handleBillingDetailsChange("phone", e.target.value)}
                          className="mt-2 rounded-none"
                          placeholder="Enter billing phone number"
                        />
                      </div>

                      <div>
                        <Label htmlFor="billingAddress" className="text-sm font-light text-foreground">
                          Address *
                        </Label>
                        <Input
                          id="billingAddress"
                          type="text"
                          value={billingDetails.address}
                          onChange={(e) => handleBillingDetailsChange("address", e.target.value)}
                          className="mt-2 rounded-none"
                          placeholder="Street address"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="billingCity" className="text-sm font-light text-foreground">
                            City *
                          </Label>
                          <Input
                            id="billingCity"
                            type="text"
                            value={billingDetails.city}
                            onChange={(e) => handleBillingDetailsChange("city", e.target.value)}
                            className="mt-2 rounded-none"
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <Label htmlFor="billingPostalCode" className="text-sm font-light text-foreground">
                            Postal Code *
                          </Label>
                          <Input
                            id="billingPostalCode"
                            type="text"
                            value={billingDetails.postalCode}
                            onChange={(e) => handleBillingDetailsChange("postalCode", e.target.value)}
                            className="mt-2 rounded-none"
                            placeholder="Postal code"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="billingCountry" className="text-sm font-light text-foreground">
                          Country *
                        </Label>
                        <Input
                          id="billingCountry"
                          type="text"
                          value={billingDetails.country}
                          onChange={(e) => handleBillingDetailsChange("country", e.target.value)}
                          className="mt-2 rounded-none"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

            {/* Shipping Options */}
            <div className="bg-muted/20 p-8 rounded-none">
              <h2 className="text-lg font-light text-foreground mb-6">Shipping Options</h2>
              
              <RadioGroup 
                value={shippingOption} 
                onValueChange={setShippingOption}
                className="space-y-4"
              >
                <div className="flex items-center justify-between p-4 border border-muted-foreground/20 rounded-none">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="font-light text-foreground">
                      Standard Shipping
                    </Label>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Free • 3-5 business days
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-muted-foreground/20 rounded-none">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="font-light text-foreground">
                      Express Shipping
                    </Label>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ₹499 • 1-2 business days
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-muted-foreground/20 rounded-none">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="overnight" id="overnight" />
                    <Label htmlFor="overnight" className="font-light text-foreground">
                      Overnight Delivery
                    </Label>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ₹999 • Next business day
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Payment Section */}
            <div className="bg-muted/20 p-8 rounded-none">
              <h2 className="text-lg font-light text-foreground mb-6">Payment Details</h2>
              
              {!paymentComplete ? (
                <div className="space-y-6">
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={setPaymentMethod}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                  >
                    <div className="flex items-center space-x-3 border border-muted-foreground/20 p-4 rounded-none cursor-pointer hover:border-foreground/50 transition-colors">
                      <RadioGroupItem value="credit_card" id="credit_card" />
                      <Label htmlFor="credit_card" className="font-light text-foreground flex items-center gap-2 cursor-pointer">
                        <CreditCard className="w-4 h-4" /> Credit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 border border-muted-foreground/20 p-4 rounded-none cursor-pointer hover:border-foreground/50 transition-colors">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="font-light text-foreground flex items-center gap-2 cursor-pointer">
                        PayPal
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 border border-muted-foreground/20 p-4 rounded-none cursor-pointer hover:border-foreground/50 transition-colors">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="font-light text-foreground flex items-center gap-2 cursor-pointer">
                        <Smartphone className="w-4 h-4" /> UPI
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 border border-muted-foreground/20 p-4 rounded-none cursor-pointer hover:border-foreground/50 transition-colors">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="font-light text-foreground flex items-center gap-2 cursor-pointer">
                        <Banknote className="w-4 h-4" /> Cash on Delivery
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "credit_card" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                      <div>
                        <Label htmlFor="cardholderName" className="text-sm font-light text-foreground">
                          Cardholder Name *
                        </Label>
                        <Input
                          id="cardholderName"
                          type="text"
                          value={paymentDetails.cardholderName}
                          onChange={(e) => handlePaymentDetailsChange("cardholderName", e.target.value)}
                          className="mt-2 rounded-none"
                          placeholder="Name on card"
                        />
                      </div>

                      <div>
                        <Label htmlFor="cardNumber" className="text-sm font-light text-foreground">
                          Card Number *
                        </Label>
                        <div className="relative mt-2">
                          <Input
                            id="cardNumber"
                            type="text"
                            value={paymentDetails.cardNumber}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
                              if (value.length <= 19) {
                                handlePaymentDetailsChange("cardNumber", value);
                              }
                            }}
                            className="rounded-none pl-10"
                            placeholder="4242 4242 4242 4242"
                            maxLength={19}
                          />
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate" className="text-sm font-light text-foreground">
                            Expiry Date *
                          </Label>
                          <Input
                            id="expiryDate"
                            type="text"
                            value={paymentDetails.expiryDate}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2');
                              if (value.length <= 5) {
                                handlePaymentDetailsChange("expiryDate", value);
                              }
                            }}
                            className="mt-2 rounded-none"
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv" className="text-sm font-light text-foreground">
                            CVV *
                          </Label>
                          <Input
                            id="cvv"
                            type="text"
                            value={paymentDetails.cvv}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              if (value.length <= 3) {
                                handlePaymentDetailsChange("cvv", value);
                              }
                            }}
                            className="mt-2 rounded-none"
                            placeholder="123"
                            maxLength={3}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "upi" && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                      <div>
                        <Label htmlFor="upiId" className="text-sm font-light text-foreground">
                          UPI ID *
                        </Label>
                        <Input
                          id="upiId"
                          type="text"
                          value={paymentDetails.upiId}
                          onChange={(e) => handlePaymentDetailsChange("upiId", e.target.value)}
                          className="mt-2 rounded-none"
                          placeholder="yourname@upi"
                        />
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === "paypal" && (
                    <div className="p-4 bg-muted/10 border border-muted-foreground/20 text-center animate-in fade-in slide-in-from-top-4 duration-300">
                      <p className="text-sm text-muted-foreground">You will be redirected to PayPal to complete your purchase securely.</p>
                    </div>
                  )}
                  
                  {paymentMethod === "cod" && (
                    <div className="p-4 bg-muted/10 border border-muted-foreground/20 text-center animate-in fade-in slide-in-from-top-4 duration-300">
                      <p className="text-sm text-muted-foreground">You will pay with cash when your order is delivered.</p>
                    </div>
                  )}

                  {/* Order Total Summary */}
                  <div className="bg-muted/10 p-6 rounded-none border border-muted-foreground/20 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">₹{subtotal.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground">
                        {shipping === 0 ? "Free" : `₹${shipping}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg font-medium border-t border-muted-foreground/20 pt-3">
                      <span className="text-foreground">Total</span>
                      <span className="text-foreground">₹{total.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleCompleteOrder}
                    disabled={
                      isProcessing || 
                      (paymentMethod === "credit_card" && (!paymentDetails.cardNumber || !paymentDetails.expiryDate || !paymentDetails.cvv || !paymentDetails.cardholderName)) ||
                      (paymentMethod === "upi" && !paymentDetails.upiId) ||
                      !shippingAddress.address || !shippingAddress.city || !customerDetails.email
                    }
                    className="w-full rounded-none h-12 text-base"
                  >
                    {isProcessing ? "Processing..." : `Complete Order • ₹${total.toLocaleString("en-IN")}`}
                  </Button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-light text-foreground mb-2">Order Complete!</h3>
                  <p className="text-muted-foreground">Thank you for your purchase. Your order confirmation has been sent to your email.</p>
                 </div>
               )}
             </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;