import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/context/CartContext";

const statusColors = {
  placed: "bg-blue-100 text-blue-700",
  preparing: "bg-yellow-100 text-yellow-700",
  "out-for-delivery": "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
};

const statusLabels = {
  placed: "Order Placed",
  preparing: "Preparing",
  "out-for-delivery": "Out for Delivery",
  delivered: "Delivered",
};

const RestaurantOrdersPage = () => {
  const { user, isRestaurantOwner, restaurantId } = useAuth();
  const { orders } = useCart();
  
  // Filter orders for this restaurant (in real app, this would come from database)
  const restaurantOrders = orders.filter(order => 
    order.items.some(item => item.restaurantId === restaurantId)
  );

  if (!user || !isRestaurantOwner) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container max-w-2xl text-center">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              Restaurant Access Only
            </h1>
            <p className="text-muted-foreground mb-6">
              You need to be logged in as a restaurant owner to view this page.
            </p>
            <Link to="/auth">
              <Button variant="hero">Sign In</Button>
            </Link>
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
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground">
                Restaurant Orders
              </h1>
              <p className="text-muted-foreground">Manage incoming orders</p>
            </div>
          </motion.div>

          {restaurantOrders.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                No Orders Yet
              </h2>
              <p className="text-muted-foreground">
                New orders will appear here when customers place them.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {restaurantOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-soft"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        Order #{order.id}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {order.createdAt.toLocaleDateString()} at {order.createdAt.toLocaleTimeString()}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}>
                      {statusLabels[order.status]}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-foreground">
                          {item.quantity}x {item.name}
                        </span>
                        <span className="text-muted-foreground">
                          ₹{(item.price * item.quantity).toFixed(0)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{order.deliveryAddress}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{order.estimatedDelivery}</span>
                    </div>
                    <div className="ml-auto font-bold text-primary">
                      ₹{order.total.toFixed(0)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default RestaurantOrdersPage;
