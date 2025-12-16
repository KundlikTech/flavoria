import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import FeaturesSection from "@/components/FeaturesSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from '/logo.png'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedRestaurants />
        <FeaturesSection />
        
        {/* CTA Section */}
        <section className="py-20 gradient-hero">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Hungry? Order Now!
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Browse our full collection of restaurants and start ordering your favorite dishes today.
              </p>
              <Link to="/restaurants">
                <Button variant="secondary" size="xl">
                  Browse All Restaurants
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    {/* <span className="text-primary-foreground font-display font-bold text-xl">F</span> */}
                    <img src={logo} alt="logo" />
                  </div>
                  <span className="font-display text-2xl font-bold text-foreground">
                    Flav<span className="text-primary">oria</span>
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your favorite food, delivered fast and fresh.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link to="/restaurants" className="hover:text-primary transition-colors">Restaurants</Link></li>
                  <li><Link to="/orders" className="hover:text-primary transition-colors">My Orders</Link></li>
                  <li><Link to="/cart" className="hover:text-primary transition-colors">Cart</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
              © 2024 Flavoria. All rights reserved.
              <div>
                powered by Tantragya
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
