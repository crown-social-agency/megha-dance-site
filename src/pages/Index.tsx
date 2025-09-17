import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import WhatToExpect from "@/components/WhatToExpect";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <Hero />
      <About />
      <Classes />
      <WhatToExpect />
      <Footer />
    </div>
  );
};

export default Index;
