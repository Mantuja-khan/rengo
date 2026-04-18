import { Link } from "react-router-dom";
import { Shield, Headphones, ArrowRight, Factory, CheckCircle } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import heroImg from "@/assets/hero-fuel-pump.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import aboutImg from "@/assets/about-workshop.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const fuelPumpImg = "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/27c5c81e74cf7786518030b4b9adaf08.webp";
const oxygenSensorImg = "https://boodmo.com/media/cache/part_zoom_horizontal/images/parts/cbec2ab0efe35219874e929c7125b736.webp";

const heroSlides = [
  { image: heroImg, title: "Rengo Automotive\nPrivate Limited", subtitle: "Excellence in Automotive Part Manufacturing since 2012." },
  { image: fuelPumpImg, title: "Premium\nFuel Pumps", subtitle: "High efficiency fuel pumps for Maruti Suzuki, Tata, Hyundai and more." },
  { image: fuelPumpImg, title: "OEM Quality\nFuel Modules", subtitle: "Precision engineered modules for durable and consistent performance." },
  { image: oxygenSensorImg, title: "Advanced\nOxygen Sensors", subtitle: "Optimize fuel efficiency and reduce emissions with our high-precision lambda sensors." },
  { image: oxygenSensorImg, title: "Precision\nECU Feedback", subtitle: "Accurate air-fuel ratio monitoring for smoother and more reliable engine response." },
];

const features = [
  { icon: Factory, title: "Own Manufacturing", desc: "Advanced facility in Bhiwadi" },
  { icon: Shield, title: "Quality Assured", desc: "Rigorous testing standards" },
  { icon: Headphones, title: "Expert Support", desc: "Dedicated technical team" },
];

const brands = [
  "Maruti Suzuki", "Tata", "Hyundai", "Mahindra", "Honda", "Chevrolet", "Ford", "Bosch"
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);
useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-12 md:py-0 scroll-fade overflow-hidden min-h-[500px] flex items-center">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `url(${heroSlide4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/85 z-[1]" />

        <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center min-h-[500px]">
          <div className="flex flex-col justify-center order-2 md:order-1 pt-8 md:pt-0">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block drop-shadow-md">Rengo Automotive Pvt Ltd</span>
            <div className="relative h-[200px] md:h-[240px]">
              {heroSlides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-1000 transform ${i === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight whitespace-pre-line font-heading font-black tracking-tight drop-shadow-xl">
                    {slide.title}
                  </h1>
                  <p className="text-white/80 mb-8 max-w-md text-base md:text-lg leading-relaxed font-body font-medium drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase text-sm hover:scale-105 transition-all rounded-sm font-heading shadow-xl"
              >
                View Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 font-bold uppercase text-sm hover:bg-white hover:text-primary transition-all rounded-sm font-heading backdrop-blur-sm"
              >
                Enquire Now
              </Link>
            </div>
            {/* Dots UI */}
            <div className="flex gap-3 mt-12">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? "bg-primary w-12" : "bg-white/30 w-4"}`}
                />
              ))}
            </div>
          </div>
          <div className="relative order-1 md:order-2 h-[350px] md:h-[550px] flex items-center justify-center mt-8 md:mt-0">
            {heroSlides.map((slide, i) => (
              <img
                key={i}
                src={slide.image}
                alt={slide.title}
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 transform ${i === currentSlide ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 rotate-3"}`}
              />
            ))}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features bar */}
      <section className="bg-card border-y border-border scroll-fade">
        <div className="container py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-4 p-4 hover:bg-accent/50 transition-colors rounded-sm">
              <div className="bg-primary/10 p-4 rounded-full">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-base text-foreground font-heading">{f.title}</p>
                <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white scroll-fade">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={aboutImg} alt="About Rengo Automotive" className="rounded-lg shadow-xl relative z-10 w-full h-auto" />
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-lg z-0" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg z-20 hidden md:block">
              <p className="text-3xl font-bold font-heading">10+</p>
              <p className="text-xs uppercase tracking-wider">Years Experience</p>
            </div>
          </div>
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Legacy</span>
            <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-6 font-heading font-bold">Advanced Automotive Solutions</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body">
              Rengo Automotive Private Limited is a leading manufacturer of car fuel pumps and auto parts based in Bhiwadi, Rajasthan. We specialize in precision engineering and high-quality manufacturing for global automotive brands.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "High precision components",
                "OEM Quality Standards",
                "Rigorous quality testing",
                "Durable performance"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 bg-accent/30 scroll-fade border-y border-border">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Trusted By Major Brands</h2>
            <p className="text-muted-foreground text-sm mt-2">Supplying components for industry leading automobile manufacturers</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 items-center">
            {brands.map((brand) => (
              <div key={brand} className="bg-white p-4 rounded-sm border border-border shadow-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider text-center">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="bg-accent/10 scroll-fade">
        <div className="container py-16">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Popular Products</h2>
              <p className="text-muted-foreground mt-2">Our most sought-after fuel pumps and sensors</p>
            </div>
            <Link to="/products" className="group text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Explore All Products <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-primary relative overflow-hidden scroll-fade">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="container py-16 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Bulk Order Enquiry</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-lg font-body">
            Get competitive pricing for OEM and replacement market orders. We offer customized production to meet your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 font-bold uppercase text-sm hover:bg-opacity-90 transition-all rounded-sm shadow-xl hover:shadow-2xl font-heading"
          >
            Contact Our Sales Team <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
