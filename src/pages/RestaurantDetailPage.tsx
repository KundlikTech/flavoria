import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Clock, Truck, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import MenuItemCard from "@/components/MenuItemCard";
import { Button } from "@/components/ui/button";
import { restaurants, menuItems } from "@/data/mockData";
import { useState } from "react";

const RestaurantDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find(r => r.id === id);
  const items = menuItems[id || ""] || [];
  
  const categories = [...new Set(items.map(item => item.category))];
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems = selectedCategory === "All" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container text-center">
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">
              Restaurant not found
            </h1>
            <Link to="/restaurants">
              <Button>Back to Restaurants</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          <div className="absolute top-4 left-4">
            <Link to="/restaurants">
              <Button variant="secondary" size="icon" className="rounded-full shadow-medium">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Restaurant Info */}
        <div className="container -mt-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-6 shadow-elevated mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                  {restaurant.name}
                </h1>
                <p className="text-muted-foreground mb-4">{restaurant.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-primary" />
                    <span className="font-semibold">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Truck className="w-4 h-4" />
                    <span>₹{restaurant.deliveryFee} delivery</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>2.5 km away</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {restaurant.cuisine}
                </span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {restaurant.priceRange}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "All" ? "default" : "secondary"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
                className="rounded-full"
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-16">
            {filteredItems.map((item, index) => (
              <MenuItemCard
                key={item.id}
                item={item}
                restaurantId={restaurant.id}
                restaurantName={restaurant.name}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RestaurantDetailPage;
