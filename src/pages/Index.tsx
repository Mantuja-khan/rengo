import { Link } from "react-router-dom";
import { Shield, Headphones, ArrowRight, Factory } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import heroImg from "@/assets/hero-fuel-pump.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const heroSlides = [
  { image: heroImg, title: "Car Fuel Pumps\n& Auto Parts", subtitle: "Manufacturer of premium fuel pumps for Maruti Suzuki, Tata, Hyundai & more." },
  { image: heroSlide2, title: "Precision\nEngineered Parts", subtitle: "OEM quality components with rigorous testing standards for every product." },
  { image: heroSlide3, title: "Advanced\nManufacturing", subtitle: "State-of-the-art facility in Bhiwadi, Rajasthan with modern CNC machines." },
  { image: heroSlide4, title: "Complete Product\nRange", subtitle: "50+ fuel pump models covering major Indian automobile brands." },
];


const brands = [
  { name: "Maruti Suzuki", logo: "https://static.vecteezy.com/system/resources/thumbnails/020/336/714/small_2x/maruti-suzuki-logo-maruiti-icon-free-free-vector.jpg" },
  { name: "Tata", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KpAgocFqrks7-cn9TQgUKSZD02aTajb8QQ&s" },
  { name: "Hyundai", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMqbtuvqvYh7uWG4_v6iRevmsxZpUzHBqLw&s" },
  { name: "Honda", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Honda.svg" },
  { name: "Mahindra", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoR6wruJ7GQAsvoQApm6jGQKLBVUxL2Wz4Q&s" },
  { name: "Nissan", logo: "https://1000logos.net/wp-content/uploads/2020/03/Nissan-Logo-2012.png" },
  { name: "Ford", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4Z1hYiX1RccI-RnqG3hAUnHSm88abpn1Tw&s" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const animRef = useScrollAnimation();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div ref={animRef}>
      {/* Hero Carousel */}
      <section className="relative bg-secondary overflow-hidden min-h-[420px]">
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
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-semibold uppercase text-sm hover:bg-primary/90 transition-colors rounded-sm"
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



      {/* Short About Section */}
      <section className="py-16 bg-white scroll-fade">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Legacy</span>
            <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-6 font-heading font-bold">Reliable Automotive Solutions</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body normal-case tracking-normal">
              Rengo Automotive Private Limited is a leading manufacturer of high-precision fuel pumps and automotive components. Based in Bhiwadi, Rajasthan, we have been delivering OEM-standard quality since 2012. Our commitment to excellence ensures every part we produce meets the rigorous demands of modern engines.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-accent p-6 rounded-sm text-center">
              <p className="text-3xl font-bold text-primary mb-1">12+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp.</p>
            </div>
            <div className="bg-accent p-6 rounded-sm text-center">
              <p className="text-3xl font-bold text-primary mb-1">50+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Models</p>
            </div>
            <div className="bg-accent p-6 rounded-sm text-center">
              <p className="text-3xl font-bold text-primary mb-1">100%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Tested</p>
            </div>
            <div className="bg-accent p-6 rounded-sm text-center">
              <p className="text-3xl font-bold text-primary mb-1">OEM</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Quality Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 bg-accent/30 scroll-fade border-y border-border">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground opacity-80 uppercase tracking-widest">Part Solutions For Leading Brands</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-8 items-center">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center justify-center p-2 border border-black bg-white rounded-sm h-16 md:h-20">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full w-auto object-contain transition-transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="bg-accent scroll-fade">
        <div className="container py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl text-foreground">Popular Products</h2>
            <Link to="/products" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {products.slice(0, 5).map((p, i) => (
              <div key={p.id} className={i === 4 ? "hidden xl:block" : "block"}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-primary scroll-fade">
        <div className="container py-12 text-center">
          <h2 className="text-3xl md:text-4xl text-primary-foreground mb-2">Bulk Order Enquiry</h2>
          <p className="text-primary-foreground/80 mb-6 font-body normal-case tracking-normal font-normal">Competitive pricing for OEM & replacement market orders</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 font-semibold uppercase text-sm hover:bg-secondary/90 transition-colors rounded-sm"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>


    </div>
  );
};

export default Index;
