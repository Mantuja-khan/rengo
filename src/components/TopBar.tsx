import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground text-sm hidden md:block">
    <div className="container flex items-center justify-between py-2">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-primary" />
          Bhiwadi, Rajasthan, India
        </span>
        <span className="flex items-center gap-1.5">
          <Phone className="h-4 w-4 text-primary" />
          +91 9929095035
        </span>
        <span className="flex items-center gap-1.5">
          <Mail className="h-4 w-4 text-primary" />
          Rangoverautomotive@gmail.com
        </span>
      </div>
    </div>
  </div>
);

export default TopBar;
