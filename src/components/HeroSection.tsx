import { motion } from "framer-motion";
import { ArrowRight, Clock, Utensils, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroFood from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFood}
          alt="Delicious food spread"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Utensils className="w-4 h-4" />
              #1 Food Delivery Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Delicious Food,{" "}
            <span className="text-gradient">Delivered</span> to Your Door
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            Discover the best restaurants in your city. Order your favorite meals
            and get them delivered in minutes, hot and fresh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/restaurants">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Order Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="w-full sm:w-auto">
              Explore Restaurants
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border"
          >
            <div>
              <div className="flex items-center gap-2 text-primary mb-1">
                <Utensils className="w-5 h-5" />
                <span className="font-display text-2xl font-bold">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Restaurants</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-primary mb-1">
                <Clock className="w-5 h-5" />
                <span className="font-display text-2xl font-bold">30 min</span>
              </div>
              <p className="text-sm text-muted-foreground">Average Delivery</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-primary mb-1">
                <Star className="w-5 h-5" />
                <span className="font-display text-2xl font-bold">4.8</span>
              </div>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
