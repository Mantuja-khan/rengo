import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/rengologo.png"

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-xl font-bold font-heading leading-none">
            <span className="text-primary">RENGO</span> <span className="text-white">AUTOMOTIVES</span>
            <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Pvt. Ltd.</span>
          </h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Manufacturer of high-precision car fuel pumps, oxygen sensors & auto parts. Advanced manufacturing facility with consistent quality standards based in Bhiwadi.
        </p>
      </div>
      <div>
        <h3 className="text-lg mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
          <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
          <li><Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
          <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg mb-4 uppercase font-heading text-primary font-bold">Categories</h3>
        <ul className="space-y-2 text-sm">
          <li><Link to="/products?category=Fuel pump" className="text-muted-foreground hover:text-primary transition-colors">Fuel Pump</Link></li>
          <li><Link to="/products?category=Oxygen Sensors" className="text-muted-foreground hover:text-primary transition-colors">Oxygen Sensors</Link></li>
          <li><Link to="/products?category=Fuel motor" className="text-muted-foreground hover:text-primary transition-colors">Fuel Pump Motor</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg mb-4">Contact Info</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
            A-348-349 (S), Phool Bagh RIICO Industrial Area, Bhiwadi 301019, Rajasthan
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4 text-primary shrink-0" />
            +91 9929095035, 8930245250
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4 text-primary shrink-0" />
            Rangoverautomotive@gmail.com
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-muted-foreground/20">
      <div className="container py-4 text-center text-xs text-muted-foreground">
        © 2026 Rengo Automotive Private Limited. All rights reserved.
        <br />
        Designed By SS Graphices
      </div>
    </div>
  </footer>
);

export default Footer;
