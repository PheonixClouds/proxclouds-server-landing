import { Shield, Zap, Globe, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Premium NVMe SSDs and latest generation CPUs ensure your server runs at peak performance with minimal latency."
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced protection keeps your server online 24/7. Our enterprise-grade security shields against all attacks."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Deploy servers across multiple regions worldwide. Choose the location closest to your players for optimal performance."
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Our dedicated Minecraft specialists are always ready to help. Get instant support via Discord, tickets, or live chat."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">ProxClouds?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need for the ultimate Minecraft hosting experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-hover transition-all duration-300 border-0 bg-gradient-card backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;