import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dance-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Indian Classical Dance Performance"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
          Classical Indian
          <span className="block text-gradient">Dance</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto fade-in-up-delay font-light">
          Discover the elegance and grace of traditional Bharatanatyam with personalized instruction from Megha
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay">
          <Button variant="elegant" size="xl" className="min-w-[200px]">
            Learn More
          </Button>
          <Button variant="hero" size="xl" className="min-w-[200px]">
            Start Your Journey
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;