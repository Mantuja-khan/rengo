import { useState, useEffect } from "react";
import { Award, Users, Clock, Wrench, CheckCircle } from "lucide-react";
import { products } from "@/data/products";
import ctaBgAbout from "@/assets/cta-bg-about.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "5000+", label: "Happy Clients" },
  { icon: Clock, value: "24/7", label: "Customer Support" },
  { icon: Wrench, value: "50+", label: "Product Models" },
];

const keyFeatures = [
  "High precision manufacturing",
  "Durable & long service life",
  "Superior fuel flow performance",
  "Corrosion-resistant materials",
  "Tested for safety & reliability",
  "Compatible with major 4-wheeler brands",
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const displayProducts = products.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % displayProducts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [displayProducts.length]);

  return (
    <div>
      <section className="relative py-16 overflow-hidden scroll-fade">
        <img src={ctaBgAbout} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="container relative z-10">
          <h1 className="text-3xl md:text-4xl text-secondary-foreground font-heading">About Us</h1>
          <p className="text-muted-foreground text-sm mt-2 font-body normal-case tracking-normal">Home / About Us</p>
        </div>
      </section>

      <section className="container py-12 grid md:grid-cols-2 gap-10 items-center scroll-fade">
        <div className="relative aspect-square md:aspect-video rounded-sm overflow-hidden bg-accent group">
          <div 
            className="flex transition-transform duration-700 ease-in-out h-full" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {displayProducts.map((p, idx) => (
              <div key={idx} className="flex-shrink-0 w-full h-full p-4 md:p-8">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {displayProducts.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentSlide ? "bg-primary" : "bg-primary/20"}`}
              />
            ))}
          </div>
        </div>
        <div>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Story</span>
          <h2 className="text-3xl text-foreground mt-2 mb-4 font-heading font-bold">Rengo Automotive Private Limited</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-body normal-case tracking-normal">
            Rengo Automotive Private Limited is a leading manufacturer of high-precision fuel pumps and auto parts based in Bhiwadi, Rajasthan. With an advanced manufacturing facility and experienced technical team, we deliver consistent quality products for the Indian automotive industry.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body normal-case tracking-normal">
            Quality assurance is at the core of Rengo Automotive. Each fuel pump undergoes rigorous testing to meet industry standards and ensure reliable performance under all driving conditions.
          </p>
          <h3 className="text-sm font-bold text-foreground mb-3 font-heading uppercase tracking-wider">Major Applications:</h3>
          <ul className="text-sm text-muted-foreground space-y-2 font-body normal-case tracking-normal">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" /> Passenger Cars
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" /> Commercial 4-Wheeler Vehicles
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" /> OEM & Replacement Market
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-primary scroll-fade">
        <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-primary-foreground">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-heading font-bold">{s.value}</p>
              <p className="text-sm opacity-70 font-body normal-case tracking-normal">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-12 scroll-fade">
        <h2 className="text-3xl text-foreground text-center mb-10 font-heading font-bold">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {keyFeatures.map((f) => (
            <div key={f} className="flex items-center gap-3 bg-card border border-border p-5 rounded-sm">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm text-foreground font-body">{f}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent scroll-fade">
        <div className="container py-12">
          <h2 className="text-3xl text-foreground text-center mb-10 font-heading font-bold">Why Choose Rengo Automotive</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Advanced Manufacturing", desc: "State-of-the-art manufacturing facility with laser marking, welding, and injection molding machines." },
              { title: "Experienced Team", desc: "Our experienced technical team ensures every product meets the highest quality standards." },
              { title: "Competitive Pricing", desc: "We offer competitive pricing with on-time delivery and customization as per client requirements." },
            ].map((v) => (
              <div key={v.title} className="bg-card border border-border p-8 rounded-sm text-center shadow-sm">
                <h3 className="text-lg text-foreground mb-3 font-heading font-bold">{v.title}</h3>
                <p className="text-muted-foreground text-sm font-body normal-case tracking-normal line-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
