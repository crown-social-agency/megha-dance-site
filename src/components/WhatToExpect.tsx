import { Card } from "@/components/ui/card";

const WhatToExpect = () => {
  const expectations = [
    {
      title: "Personalized Attention",
      description: "Small class sizes ensure individual guidance and correction to help you progress at your own pace",
      icon: "👥"
    },
    {
      title: "Cultural Context",
      description: "Learn not just the movements, but the rich history and spiritual significance behind each gesture and composition",
      icon: "🏛️"
    },
    {
      title: "Progressive Learning",
      description: "Structured curriculum that builds skills systematically, from basic postures to complex choreography",
      icon: "📈"
    },
    {
      title: "Supportive Environment",
      description: "Encouraging atmosphere that celebrates both effort and achievement, perfect for beginners and experienced dancers",
      icon: "🌟"
    },
    {
      title: "Performance Opportunities",
      description: "Regular opportunities to showcase your progress in informal recitals and community events",
      icon: "🎭"
    },
    {
      title: "Mind-Body Connection",
      description: "Experience the meditative aspects of classical dance that promote both physical fitness and mental well-being",
      icon: "🧘‍♀️"
    }
  ];

  return (
    <section id="what-to-expect" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What to Expect
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every class is designed to be enriching, challenging, and deeply rewarding. 
            Here's what makes our approach to classical dance education special.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expectations.map((item, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-elegant transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 group">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-center leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-elegant">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Your First Class Experience
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Welcome & Introduction</h4>
                    <p className="text-muted-foreground text-sm">Brief overview of Bharatanatyam and what we'll cover in the session</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Warm-up & Stretching</h4>
                    <p className="text-muted-foreground text-sm">Gentle exercises to prepare your body for classical dance movements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Basic Positions</h4>
                    <p className="text-muted-foreground text-sm">Learn fundamental postures and alignment principles</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Simple Movements</h4>
                    <p className="text-muted-foreground text-sm">Practice basic steps and hand gestures with rhythmic patterns</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Cool Down & Questions</h4>
                    <p className="text-muted-foreground text-sm">Relaxation and time to discuss your dance journey ahead</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-primary mb-4 text-center">
                What to Bring
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Comfortable, flexible clothing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Water bottle for hydration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Open mind and enthusiasm</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Notebook for any questions</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-center text-muted-foreground">
                  <strong className="text-primary">Note:</strong> No prior dance experience necessary. 
                  We'll provide all other equipment and materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;