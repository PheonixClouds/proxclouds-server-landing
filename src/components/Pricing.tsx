import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$5",
      period: "month",
      description: "Perfect for small servers and testing",
      features: [
        "2GB RAM",
        "20 Player Slots",
        "25GB NVMe Storage", 
        "DDoS Protection",
        "24/7 Support"
      ],
      popular: false
    },
    {
      name: "Pro", 
      price: "$12",
      period: "month",
      description: "Great for growing communities",
      features: [
        "4GB RAM",
        "50 Player Slots", 
        "50GB NVMe Storage",
        "DDoS Protection",
        "Priority Support",
        "Free Subdomain"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$25",
      period: "month", 
      description: "For large servers and networks",
      features: [
        "8GB RAM",
        "Unlimited Players",
        "100GB NVMe Storage",
        "Advanced DDoS Protection", 
        "Dedicated Support",
        "Custom Domain",
        "Database Access"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="bg-gradient-primary bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your Minecraft server. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-primary shadow-glow scale-105' 
                  : 'hover:shadow-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                
                <Button 
                  className="w-full mt-6" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => window.open('https://discord.gg/your-invite-code', '_blank')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;