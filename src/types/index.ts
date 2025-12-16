export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  priceRange: string;
  featured: boolean;
  description: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
  restaurantId: string;
  restaurantName: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'placed' | 'preparing' | 'out-for-delivery' | 'delivered';
  createdAt: Date;
  restaurantName: string;
  deliveryAddress: string;
  estimatedDelivery: string;
}
