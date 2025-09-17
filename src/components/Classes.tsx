import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Classes = () => {
  const classLevels = [
    {
      title: "Beginner",
      subtitle: "Foundation Level",
      description: "Perfect for those new to Indian classical dance. Learn basic postures, hand gestures (mudras), and simple compositions.",
      duration: "60 minutes",
      frequency: "Once per week",
      highlights: [
        "Basic Bharatanatyam positions",
        "Elementary adavus (steps)",
        "Simple hasta mudras (hand gestures)",
        "Introduction to rhythm and music"
      ]
    },
    {
      title: "Intermediate",
      subtitle: "Development Level", 
      description: "Build upon foundation skills with more complex choreography and deeper understanding of classical techniques.",
      duration: "75 minutes",
      frequency: "Twice per week",
      highlights: [
        "Advanced adavus and combinations",
        "Short choreographed pieces",
        "Expression and storytelling",
        "Music theory and tala"
      ]
    },
    {
      title: "Advanced",
      subtitle: "Mastery Level",
      description: "Refine technique and work on traditional compositions with focus on performance quality and artistic expression.",
      duration: "90 minutes", 
      frequency: "Flexible schedule",
      highlights: [
        "Traditional varnams and padams",
        "Advanced abhinaya (expression)",
        "Performance preparation",
        "Cultural context and history"
      ]
    }
  ];

  return (
    <section id="classes" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Class Offerings
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Structured learning paths designed to guide you through your classical dance journey, 
            from first steps to accomplished performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {classLevels.map((level, index) => (
            <Card key={index} className="p-8 shadow-elegant hover:shadow-glow transition-all duration-500 border-0 bg-white hover:scale-105 group">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{level.title}</h3>
                <p className="text-accent font-medium">{level.subtitle}</p>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {level.description}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">Duration:</span>
                  <span className="text-sm text-muted-foreground">{level.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">Frequency:</span>
                  <span className="text-sm text-muted-foreground">{level.frequency}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-3">What You'll Learn:</h4>
                <ul className="space-y-2">
                  {level.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-primary mb-4">Ready to Begin?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our welcoming community of dancers and start your journey into the beautiful world of Indian classical dance. 
            Classes begin in September 2024.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Contact for Details
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Trial Class
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;