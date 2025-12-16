import { Restaurant, MenuItem } from "@/types";

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "La Piazza Italiana",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: 49,
    priceRange: "₹₹",
    featured: true,
    description: "Authentic Italian cuisine with fresh ingredients imported from Italy."
  },
  {
    id: "2",
    name: "Tokyo Ramen House",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    cuisine: "Japanese",
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: 39,
    priceRange: "₹₹",
    featured: true,
    description: "Traditional Japanese ramen and sushi made with authentic recipes."
  },
  {
    id: "3",
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
    cuisine: "Indian",
    rating: 4.7,
    deliveryTime: "30-40 min",
    deliveryFee: 29,
    priceRange: "₹₹",
    featured: true,
    description: "Rich and flavorful Indian dishes with aromatic spices."
  },
  {
    id: "4",
    name: "Burger Republic",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    cuisine: "American",
    rating: 4.5,
    deliveryTime: "15-25 min",
    deliveryFee: 25,
    priceRange: "₹",
    featured: false,
    description: "Gourmet burgers made with premium beef and fresh toppings."
  },
  {
    id: "5",
    name: "Dragon Palace",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    cuisine: "Chinese",
    rating: 4.4,
    deliveryTime: "25-35 min",
    deliveryFee: 35,
    priceRange: "₹₹",
    featured: false,
    description: "Authentic Chinese cuisine with centuries-old family recipes."
  },
  {
    id: "6",
    name: "Mediterranean Oasis",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80",
    cuisine: "Mediterranean",
    rating: 4.9,
    deliveryTime: "30-40 min",
    deliveryFee: 59,
    priceRange: "₹₹₹",
    featured: true,
    description: "Fresh Mediterranean flavors with the finest olive oils and herbs."
  }
];

export const menuItems: Record<string, MenuItem[]> = {
  "1": [
    { id: "1-1", name: "Margherita Pizza", description: "Fresh tomatoes, mozzarella, basil", price: 349, image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=80", category: "Pizza", popular: true },
    { id: "1-2", name: "Spaghetti Carbonara", description: "Creamy sauce, pancetta, parmesan", price: 399, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80", category: "Pasta", popular: true },
    { id: "1-3", name: "Bruschetta", description: "Toasted bread, tomatoes, garlic, basil", price: 199, image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80", category: "Appetizers", popular: false },
    { id: "1-4", name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 179, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80", category: "Desserts", popular: true },
    { id: "1-5", name: "Pepperoni Pizza", description: "Spicy pepperoni, mozzarella, tomato sauce", price: 399, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80", category: "Pizza", popular: true },
    { id: "1-6", name: "Fettuccine Alfredo", description: "Creamy alfredo sauce, parmesan", price: 379, image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&q=80", category: "Pasta", popular: false },
  ],
  "2": [
    { id: "2-1", name: "Tonkotsu Ramen", description: "Rich pork broth, chashu, soft egg", price: 379, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80", category: "Ramen", popular: true },
    { id: "2-2", name: "Salmon Sashimi", description: "Fresh Atlantic salmon, 8 pieces", price: 449, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80", category: "Sushi", popular: true },
    { id: "2-3", name: "California Roll", description: "Crab, avocado, cucumber, 8 pieces", price: 299, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80", category: "Sushi", popular: true },
    { id: "2-4", name: "Miso Soup", description: "Traditional soup with tofu and seaweed", price: 99, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80", category: "Soups", popular: false },
    { id: "2-5", name: "Gyoza", description: "Pan-fried dumplings, 6 pieces", price: 199, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80", category: "Appetizers", popular: true },
  ],
  "3": [
    { id: "3-1", name: "Butter Chicken", description: "Creamy tomato curry, tender chicken", price: 329, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80", category: "Curry", popular: true },
    { id: "3-2", name: "Biryani", description: "Aromatic rice with spices and lamb", price: 379, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80", category: "Rice", popular: true },
    { id: "3-3", name: "Naan Bread", description: "Freshly baked tandoori bread", price: 49, image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=400&q=80", category: "Bread", popular: false },
    { id: "3-4", name: "Samosa", description: "Crispy pastry with spiced potatoes, 3 pieces", price: 99, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80", category: "Appetizers", popular: true },
    { id: "3-5", name: "Paneer Tikka", description: "Grilled cottage cheese with spices", price: 279, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80", category: "Appetizers", popular: true },
  ],
  "4": [
    { id: "4-1", name: "Classic Cheeseburger", description: "Angus beef, cheddar, lettuce, tomato", price: 249, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", category: "Burgers", popular: true },
    { id: "4-2", name: "Bacon BBQ Burger", description: "Crispy bacon, BBQ sauce, onion rings", price: 299, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80", category: "Burgers", popular: true },
    { id: "4-3", name: "Loaded Fries", description: "Cheese, bacon, sour cream, chives", price: 179, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80", category: "Sides", popular: true },
    { id: "4-4", name: "Milkshake", description: "Classic vanilla, chocolate, or strawberry", price: 129, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80", category: "Drinks", popular: false },
  ],
  "5": [
    { id: "5-1", name: "Kung Pao Chicken", description: "Spicy chicken with peanuts and vegetables", price: 299, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&q=80", category: "Main Course", popular: true },
    { id: "5-2", name: "Sweet and Sour Pork", description: "Crispy pork in tangy sauce", price: 329, image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80", category: "Main Course", popular: true },
    { id: "5-3", name: "Dim Sum Platter", description: "Assorted steamed dumplings, 12 pieces", price: 399, image: "https://images.unsplash.com/photo-1576577445504-6af96477db52?w=400&q=80", category: "Appetizers", popular: true },
    { id: "5-4", name: "Fried Rice", description: "Wok-fried rice with egg and vegetables", price: 199, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80", category: "Rice", popular: false },
  ],
  "6": [
    { id: "6-1", name: "Falafel Platter", description: "Crispy falafel, hummus, pita, salad", price: 279, image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb5?w=400&q=80", category: "Main Course", popular: true },
    { id: "6-2", name: "Lamb Shawarma", description: "Slow-roasted lamb, tahini, pickles", price: 349, image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80", category: "Main Course", popular: true },
    { id: "6-3", name: "Hummus with Pita", description: "Creamy hummus, warm pita bread", price: 149, image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&q=80", category: "Appetizers", popular: true },
    { id: "6-4", name: "Greek Salad", description: "Fresh vegetables, feta, olives, olive oil", price: 199, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80", category: "Salads", popular: false },
    { id: "6-5", name: "Baklava", description: "Layered phyllo, nuts, honey syrup", price: 129, image: "https://images.unsplash.com/photo-1598110750624-207050c4f28c?w=400&q=80", category: "Desserts", popular: true },
  ],
};
