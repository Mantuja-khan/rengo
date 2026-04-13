import { Award, Users, Clock, Wrench, CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-workshop.jpg";
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
  return (
    <div>
      <section className="relative py-16 overflow-hidden scroll-fade">
        <img src={ctaBgAbout} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="container relative z-10">
          <h1 className="text-3xl md:text-4xl text-secondary-foreground">About Us</h1>
          <p className="text-muted-foreground text-sm mt-2 font-body normal-case tracking-normal font-normal">Home / About Us</p>
        </div>
      </section>

      <section className="container py-12 grid md:grid-cols-2 gap-10 items-center scroll-fade">
        <div>
          <img src={aboutImg} alt="Rengo Automotive Manufacturing Facility" loading="lazy" width={1200} height={600} className="w-full rounded-sm" />
        </div>
        <div>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Story</span>
          <h2 className="text-3xl text-foreground mt-2 mb-4">Rengo Automotive Private Limited</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-body normal-case tracking-normal font-normal">
            Rengo Automotive Private Limited is a leading manufacturer of car fuel pumps and auto parts based in Bhiwadi, Rajasthan. With an advanced manufacturing facility and experienced technical team, we deliver consistent quality products for the Indian automotive industry.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-body normal-case tracking-normal font-normal">
            Quality assurance is at the core of Rengo Automotive. Each fuel pump undergoes rigorous testing to meet industry standards and ensure reliable performance under all driving conditions.
          </p>
          <h3 className="text-sm font-bold text-foreground mb-3">Applications:</h3>
          <ul className="text-sm text-muted-foreground space-y-1 font-body normal-case tracking-normal font-normal">
            <li>• Passenger Cars</li>
            <li>• Commercial 4-Wheeler Vehicles</li>
            <li>• OEM & Replacement Market</li>
          </ul>
        </div>
      </section>

      <section className="bg-primary scroll-fade">
        <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="h-8 w-8 text-primary-foreground mx-auto mb-2" />
              <p className="text-3xl font-heading font-bold text-primary-foreground">{s.value}</p>
              <p className="text-primary-foreground/80 text-sm font-body normal-case tracking-normal font-normal">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-12 scroll-fade">
        <h2 className="text-3xl text-foreground text-center mb-10">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {keyFeatures.map((f) => (
            <div key={f} className="flex items-center gap-3 bg-card border border-border p-5 rounded-sm">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm text-foreground">{f}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent scroll-fade">
        <div className="container py-12">
          <h2 className="text-3xl text-foreground text-center mb-10">Why Choose Rengo Automotive</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Advanced Manufacturing", desc: "State-of-the-art manufacturing facility with laser marking, welding, and injection molding machines." },
              { title: "Experienced Team", desc: "Our experienced technical team ensures every product meets the highest quality standards." },
              { title: "Competitive Pricing", desc: "We offer competitive pricing with on-time delivery and customization as per client requirements." },
            ].map((v) => (
              <div key={v.title} className="bg-card border border-border p-8 rounded-sm text-center">
                <h3 className="text-lg text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm font-body normal-case tracking-normal font-normal">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
