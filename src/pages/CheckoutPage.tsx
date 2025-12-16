import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, CreditCard, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/hooks/useAuth";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, getTotal, placeOrder } = useCart();
  const { user } = useAuth();
  const [address, setAddress] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const deliveryFee = 49;
  const subtotal = getTotal();
  const total = subtotal + deliveryFee;

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  const handlePlaceOrder = async () => {
    if (!address.trim()) {
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const order = placeOrder(address);
    if (order) {
      setOrderPlaced(true);
      setTimeout(() => {
        navigate(`/orders`);
      }, 2000);
    }
  };

  if (items.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container max-w-md text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="w-24 h-24 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center"
            >
              <Check className="w-12 h-12 text-primary-foreground" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-3xl font-bold text-foreground mb-2"
            >
              Order Placed!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground"
            >
              Redirecting to your orders...
            </motion.p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Checkout
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Delivery & Payment */}
            <div className="lg:col-span-2 space-y-6">
              {/* Delivery Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-soft"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Delivery Address
                  </h2>
                </div>
                
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your full delivery address..."
                  rows={3}
                  className="w-full p-4 bg-secondary rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-6 shadow-soft"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Payment Method
                  </h2>
                </div>
                
                <div className="space-y-3">
                  {[
                    { name: "UPI / Credit Card", icon: "💳" },
                    { name: "Cash on Delivery", icon: "💵" },
                    { name: "Digital Wallet", icon: "📱" },
                  ].map((method, index) => (
                    <label
                      key={method.name}
                      className="flex items-center gap-4 p-4 bg-secondary rounded-xl cursor-pointer hover:bg-secondary/80 transition-colors"
                    >
                      <input
                        type="radio"
                        name="payment"
                        defaultChecked={index === 0}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-2xl">{method.icon}</span>
                      <span className="font-medium text-foreground">{method.name}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft sticky top-24">
                <h2 className="font-display text-xl font-bold text-foreground mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.quantity}x {item.name}
                      </span>
                      <span className="text-foreground">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between text-foreground font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">₹{total}</span>
                  </div>
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={handlePlaceOrder}
                  disabled={!address.trim() || isProcessing}
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                      />
                      Processing...
                    </span>
                  ) : (
                    `Pay ₹${total}`
                  )}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
