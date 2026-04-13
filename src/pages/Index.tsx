import { Link } from "react-router-dom";
import { Shield, Headphones, ArrowRight, Factory } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import heroImg from "@/assets/hero-fuel-pump.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const heroSlides = [
  { image: heroImg, title: "Car Fuel Pumps\n& Auto Parts", subtitle: "Manufacturer of premium fuel pumps for Maruti Suzuki, Tata, Hyundai & more." },
  { image: heroSlide2, title: "Precision\nEngineered Parts", subtitle: "OEM quality components with rigorous testing standards for every product." },
  { image: heroSlide3, title: "Advanced\nManufacturing", subtitle: "State-of-the-art facility in Bhiwadi, Rajasthan with modern CNC machines." },
  { image: heroSlide4, title: "Complete Product\nRange", subtitle: "50+ fuel pump models covering major Indian automobile brands." },
];

const features = [
  { icon: Factory, title: "Own Manufacturing", desc: "Advanced facility in Bhiwadi" },
  { icon: Shield, title: "Quality Assured", desc: "Rigorous testing standards" },
  { icon: Headphones, title: "Expert Support", desc: "Dedicated technical team" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative bg-secondary overflow-hidden min-h-[420px] scroll-fade">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-secondary/80" />
          </div>
        ))}
        <div className="container relative z-20 grid md:grid-cols-2 items-center min-h-[420px]">
          <div className="py-12 md:py-20">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Rengo Automotive Pvt Ltd</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mt-2 mb-4 leading-tight whitespace-pre-line">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-muted-foreground mb-6 max-w-md text-sm leading-relaxed normal-case font-body tracking-normal font-normal">
              {heroSlides[currentSlide].subtitle}
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-semibold uppercase text-sm hover:bg-primary/90 transition-colors rounded-sm font-heading"
            >
              View Products <ArrowRight className="h-4 w-4" />
            </Link>
            {/* Dots */}
            <div className="flex gap-2 mt-6">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === currentSlide ? "bg-primary" : "bg-muted-foreground/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features bar */}
      <section className="bg-card border-b border-border scroll-fade">
        <div className="container py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{f.title}</p>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="bg-accent scroll-fade">
        <div className="container py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl text-foreground">Popular Products</h2>
            <Link to="/products" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1 font-heading">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link 
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 font-semibold uppercase text-sm hover:bg-primary/90 transition-all hover:gap-3 rounded-sm shadow-md font-heading"
            >
              View More Products <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-primary scroll-fade mb-12">
        <div className="container py-12 text-center">
          <h2 className="text-3xl md:text-4xl text-primary-foreground mb-2">Bulk Order Enquiry</h2>
          <p className="text-primary-foreground/80 mb-6 font-body normal-case tracking-normal font-normal">Competitive pricing for OEM & replacement market orders</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 font-semibold uppercase text-sm hover:bg-secondary/90 transition-colors rounded-sm font-heading"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
