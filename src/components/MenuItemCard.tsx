import { motion } from "framer-motion";
import { Plus, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuItem } from "@/types";
import { useCart } from "@/context/CartContext";

interface MenuItemCardProps {
  item: MenuItem;
  restaurantId: string;
  restaurantName: string;
  index?: number;
}

const MenuItemCard = ({ item, restaurantId, restaurantName, index = 0 }: MenuItemCardProps) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-card rounded-xl overflow-hidden shadow-soft card-hover"
    >
      <div className="flex">
        {/* Image */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {item.popular && (
            <div className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
              <Flame className="w-3 h-3" />
              Popular
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1">
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {item.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-primary">
              ₹{item.price}
            </span>
            <Button
              variant="default"
              size="sm"
              onClick={() => addToCart(item, restaurantId, restaurantName)}
              className="group-hover:shadow-glow"
            >
              <Plus className="w-4 h-4" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItemCard;
