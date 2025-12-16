import { motion } from "framer-motion";
import { Star, Clock, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Restaurant } from "@/types";

interface RestaurantCardProps {
  restaurant: Restaurant;
  index?: number;
}

const RestaurantCard = ({ restaurant, index = 0 }: RestaurantCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={`/restaurant/${restaurant.id}`}>
        <div className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover cursor-pointer">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {restaurant.featured && (
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {restaurant.name}
                </h3>
                <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
              </div>
              <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-lg">
                <Star className="w-4 h-4 fill-primary" />
                <span className="text-sm font-semibold">{restaurant.rating}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-4 h-4" />
                <span>₹{restaurant.deliveryFee}</span>
              </div>
              <span className="text-foreground font-medium">{restaurant.priceRange}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RestaurantCard;
