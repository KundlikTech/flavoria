import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, ChefHat, Truck, Check, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { Order } from "@/types";

const orderStatusSteps = [
  { status: 'placed', icon: Package, label: 'Order Placed' },
  { status: 'preparing', icon: ChefHat, label: 'Preparing' },
  { status: 'out-for-delivery', icon: Truck, label: 'Out for Delivery' },
  { status: 'delivered', icon: Check, label: 'Delivered' },
];

const OrdersPage = () => {
  const { orders } = useCart();
  const [simulatedOrders, setSimulatedOrders] = useState<Order[]>([]);

  // Simulate order status progression
  useEffect(() => {
    setSimulatedOrders(orders);
    
    const interval = setInterval(() => {
      setSimulatedOrders(prev => prev.map(order => {
        const statusIndex = orderStatusSteps.findIndex(s => s.status === order.status);
        if (statusIndex < orderStatusSteps.length - 1) {
          return { ...order, status: orderStatusSteps[statusIndex + 1].status as Order['status'] };
        }
        return order;
      }));
    }, 10000); // Progress every 10 seconds for demo

    return () => clearInterval(interval);
  }, [orders]);

  if (simulatedOrders.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
                <Package className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="font-display text-2xl font-bold text-foreground mb-2">
                No orders yet
              </h1>
              <p className="text-muted-foreground mb-8">
                Place your first order and track it here.
              </p>
              <Link to="/restaurants">
                <Button variant="hero" size="lg">
                  Browse Restaurants
                </Button>
              </Link>
            </motion.div>
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
            className="mb-8"
          >
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              My Orders
            </h1>
            <p className="text-muted-foreground">
              Track your orders in real-time
            </p>
          </motion.div>

          {/* Orders List */}
          <div className="space-y-6">
            {simulatedOrders.map((order, index) => {
              const currentStatusIndex = orderStatusSteps.findIndex(s => s.status === order.status);
              
              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-soft"
                >
                  {/* Order Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {order.id}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {order.restaurantName} • {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">₹{order.total}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{order.estimatedDelivery}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status Tracker */}
                  <div className="relative mb-6">
                    <div className="flex justify-between items-center">
                      {orderStatusSteps.map((step, stepIndex) => {
                        const isCompleted = stepIndex <= currentStatusIndex;
                        const isCurrent = stepIndex === currentStatusIndex;
                        
                        return (
                          <div key={step.status} className="flex flex-col items-center z-10">
                            <motion.div
                              animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                              transition={{ duration: 1, repeat: isCurrent ? Infinity : 0 }}
                              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                                isCompleted 
                                  ? 'bg-primary text-primary-foreground' 
                                  : 'bg-secondary text-muted-foreground'
                              }`}
                            >
                              <step.icon className="w-5 h-5" />
                            </motion.div>
                            <span className={`text-xs mt-2 text-center ${
                              isCompleted ? 'text-primary font-medium' : 'text-muted-foreground'
                            }`}>
                              {step.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Progress Line */}
                    <div className="absolute top-6 left-0 right-0 h-0.5 bg-secondary -z-0 mx-6">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(currentStatusIndex / (orderStatusSteps.length - 1)) * 100}%` }}
                        className="h-full bg-primary"
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground mb-3">Order Items</h4>
                    <div className="space-y-2">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">{item.name}</p>
                            <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                          <p className="text-sm font-medium text-foreground">
                            ₹{item.price * item.quantity}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div className="border-t border-border pt-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Delivering to:</span> {order.deliveryAddress}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrdersPage;
