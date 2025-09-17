import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Megha
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-br from-primary/20 to-accent/30 rounded-2xl shadow-elegant flex items-center justify-center">
                <div className="text-center text-primary/60">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Megha's Photo</p>
                  <p className="text-xs opacity-75">Placeholder - Replace with actual image</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            <Card className="p-8 shadow-elegant border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-glow transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Teaching Philosophy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in creating a supportive and inspiring environment where students can connect with the rich cultural heritage of Indian classical dance while developing their own artistic expression.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-8 shadow-elegant border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-glow transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Professional Background
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Currently working at Google, I bring the same precision and dedication to teaching classical Indian dance as I do to my professional career. My approach combines traditional techniques with modern teaching methods.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Starting this September, I'm excited to share my passion for Bharatanatyam with students who want to explore this beautiful art form.
                </p>
              </div>
            </Card>

            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 p-8 rounded-2xl shadow-soft relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-primary mb-6 text-center">
                  Why Choose Classical Dance?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-white/30 backdrop-blur-sm">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Cultural Connection</h4>
                      <p className="text-muted-foreground text-sm">Connect with thousands of years of artistic tradition and storytelling</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-white/30 backdrop-blur-sm">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Physical Grace</h4>
                      <p className="text-muted-foreground text-sm">Develop poise, flexibility, and body awareness through precise movements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-white/30 backdrop-blur-sm">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 shadow-sm">  </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Mental Focus</h4>
                      <p className="text-muted-foreground text-sm">Enhance concentration and mindfulness through disciplined practice</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-white/30 backdrop-blur-sm">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Artistic Expression</h4>
                      <p className="text-muted-foreground text-sm">Learn to express emotions and stories through classical dance vocabulary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;