import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-server.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Premium Minecraft
          <span className="block bg-gradient-primary bg-clip-text text-transparent">
            Server Hosting
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          Experience lag-free gaming with our lightning-fast servers. 
          Deploy in seconds, scale instantly, and game without limits.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => window.open('https://discord.gg/your-invite-code', '_blank')}
          >
            Get Started Now
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 text-white border-white/30 hover:bg-white/10">
            View Pricing
          </Button>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-8 text-white/60">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">99.9%</div>
            <div className="text-sm">Uptime</div>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm">Support</div>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5min</div>
            <div className="text-sm">Setup</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;