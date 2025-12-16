import { motion } from "framer-motion";
import { Utensils, Truck, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Wide Selection",
    description: "Choose from hundreds of restaurants and cuisines, all in one place."
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your food delivered in 30 minutes or less, guaranteed fresh."
  },
  {
    icon: Clock,
    title: "Live Tracking",
    description: "Track your order in real-time from the kitchen to your doorstep."
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Multiple secure payment options with buyer protection included."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Flavoria?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best food delivery experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-soft card-hover text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
