const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Megha's Dance Studio</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Bringing the timeless art of Indian classical dance to the modern world with grace, authenticity, and personalized instruction.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                About Megha
              </a>
              <a href="#classes" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Class Offerings
              </a>
              <a href="#what-to-expect" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                What to Expect
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Classes starting September 2024</p>
              <p>Bay Area, California</p>
              <p className="text-accent font-medium">Contact for more details</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Megha's Classical Dance Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;