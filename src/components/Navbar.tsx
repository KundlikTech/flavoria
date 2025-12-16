import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, MapPin, User, Search, LogOut, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import logo from '../../public/logo.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const Navbar = () => {
  const navigate = useNavigate();
  const { getItemCount } = useCart();
  const { user, signOut, isRestaurantOwner } = useAuth();
  const itemCount = getItemCount();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-soft">
            {/* <span className="text-primary-foreground font-display font-bold text-xl">F</span> */}
            <img src={logo} alt="logo" />
          </div>
          <span className="font-display text-2xl font-bold text-foreground">
            Flav<span className="text-primary">oria</span>
          </span>
        </Link>

        {/* Location - Desktop */}
        <div className="hidden md:flex items-center gap-2 bg-secondary rounded-full px-4 py-2 cursor-pointer hover:bg-secondary/80 transition-colors">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Pune, MH</span>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search restaurants or dishes..."
              className="w-full pl-10 pr-4 py-2.5 bg-secondary rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link to="/orders">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              My Orders
            </Button>
          </Link>
          
          <Link to="/cart" className="relative">
            <Button variant="cart" size="icon">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            {itemCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center"
              >
                {itemCount}
              </motion.span>
            )}
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="hidden sm:flex">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium text-foreground truncate">
                    {user.email}
                  </p>
                </div>
                <DropdownMenuSeparator />
                {isRestaurantOwner && (
                  <DropdownMenuItem onClick={() => navigate("/restaurant-orders")}>
                    <Store className="w-4 h-4 mr-2" />
                    Restaurant Orders
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={() => navigate("/orders")}>
                  My Orders
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
