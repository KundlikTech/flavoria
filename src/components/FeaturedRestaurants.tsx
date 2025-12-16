import { motion } from "framer-motion";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "@/data/mockData";

const FeaturedRestaurants = () => {
  const featuredRestaurants = restaurants.filter(r => r.featured);

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Restaurants
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked restaurants known for their exceptional quality and taste.
            These are our customers' favorites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRestaurants.map((restaurant, index) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
