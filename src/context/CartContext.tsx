import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, MenuItem, Order } from '@/types';
import { toast } from '@/hooks/use-toast';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, restaurantId: string, restaurantName: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
  orders: Order[];
  placeOrder: (deliveryAddress: string) => Order | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const addToCart = (item: MenuItem, restaurantId: string, restaurantName: string) => {
    setItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        toast({
          title: "Updated cart",
          description: `Added another ${item.name} to your cart`,
        });
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      toast({
        title: "Added to cart",
        description: `${item.name} has been added to your cart`,
      });
      return [...prev, { ...item, quantity: 1, restaurantId, restaurantName }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setItems(prev => prev.filter(i => i.id !== itemId));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart",
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setItems(prev => 
      prev.map(i => i.id === itemId ? { ...i, quantity } : i)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  const placeOrder = (deliveryAddress: string): Order | null => {
    if (items.length === 0) return null;

    const newOrder: Order = {
      id: `ORD-${Date.now()}`,
      items: [...items],
      total: getTotal(),
      status: 'placed',
      createdAt: new Date(),
      restaurantName: items[0]?.restaurantName || 'Restaurant',
      deliveryAddress,
      estimatedDelivery: '30-45 min',
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    
    toast({
      title: "Order placed successfully!",
      description: `Your order #${newOrder.id} is being prepared`,
    });

    return newOrder;
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotal,
      getItemCount,
      orders,
      placeOrder,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
