import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, FileText } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { products } from "@/data/products";
import { Highlight } from "./Highlight";
import logo from "../assets/rengologo.png"
import cataloguePdf from "../assets/rengo.pdf";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Brands", path: "/brands" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchResults = searchQuery.trim().length > 0
    ? products
      .filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.partNumber && p.partNumber.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .sort((a, b) => {
        const query = searchQuery.toLowerCase();

        // Helper to check if it's a high-priority match
        const isHighPriority = (p: typeof products[0]) =>
          p.model.toLowerCase() === query ||
          (p.partNumber && p.partNumber.toLowerCase() === query) ||
          p.sku.toLowerCase() === query ||
          p.model.toLowerCase().startsWith(query) ||
          (p.partNumber && p.partNumber.toLowerCase().includes(query) && p.partNumber.toLowerCase().split('...')[1]?.startsWith(query));

        const aPriority = isHighPriority(a);
        const bPriority = isHighPriority(b);

        if (aPriority && !bPriority) return -1;
        if (!aPriority && bPriority) return 1;
        return 0;
      })
    : [];

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-card border-b border-border relative">
        <div className="container flex items-center justify-between py-3">
          {/* Mobile search overlay */}
          {searchOpen && (
            <div className="absolute inset-0 bg-card z-20 flex items-center px-4 gap-2 md:hidden">
              <Search className="h-5 w-5 text-muted-foreground shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search by model or part number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-base text-foreground outline-none"
              />
              <button onClick={closeSearch} className="p-1">
                <X className="h-5 w-5 text-foreground" />
              </button>
            </div>
          )}

          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img
              src={logo}
              alt="Rengo Automotive"
              className="h-16 md:h-20 w-auto transition-all"
            />
            <div className="flex flex-col">
              <div className="flex items-center leading-none">
                <span className="font-heading text-lg md:text-2xl font-bold tracking-tighter text-primary">
                  RENGO
                </span>
                <span className="font-heading text-lg md:text-2xl font-bold tracking-tighter text-black ml-1">
                  AUTOMOTIVES
                </span>
              </div>
              <span className="text-[12px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-0.5 leading-none">
                Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop search/catalogue/cart bar */}
          <div className="hidden md:flex items-center gap-4 flex-1 max-w-xl mx-8 relative">
            <div className="relative w-full flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by model or part number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border bg-background text-base text-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {searchQuery.trim() && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={cataloguePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span className="hidden lg:inline">Catalogue</span>
              </a>
              <button className="relative p-2 hover:text-primary transition-colors bg-accent/50 rounded-sm">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile search toggle */}
            <button className="md:hidden p-2 hover:text-primary transition-colors" onClick={() => setSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </button>
            {/* Mobile Catalogue Button */}
            <a
              href={cataloguePdf}
              target="_blank"
              rel="noopener noreferrer"
              title="View Catalogue"
              className="md:hidden flex items-center justify-center bg-primary text-primary-foreground w-9 h-9 rounded-sm hover:bg-primary/90 transition-colors"
            >
              <FileText className="h-5 w-5" />
            </a>
            <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search results dropdown */}
        {searchQuery.trim().length > 0 && (
          <div className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-lg z-30 max-h-80 overflow-y-auto">
            <div className="container py-2">
              {searchResults.length > 0 ? (
                searchResults.map((p) => (
                  <Link
                    key={p.id}
                    to={`/products/${p.id}`}
                    onClick={closeSearch}
                    className="flex items-center gap-3 p-3 hover:bg-accent rounded-sm transition-colors"
                  >
                    <img src={p.image} alt={p.name} className="w-12 h-12 object-contain rounded-sm bg-accent" />
                    <div>
                      <p className="text-sm font-semibold text-foreground line-clamp-1">
                        <Highlight text={p.name} query={searchQuery} />
                      </p>
                      <p className="text-[10px] text-primary font-bold uppercase tracking-tight">
                        Model: <Highlight text={p.model} query={searchQuery} /> {p.partNumber ? <>• <Highlight text={p.partNumber} query={searchQuery} /></> : ""}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">
                        {p.vehicle} • {p.price ? `₹${p.price.toLocaleString("en-IN")}` : "Price on Enquiry"}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-muted-foreground text-center py-4">No products found for "{searchQuery}"</p>
              )}
            </div>
          </div>
        )}
      </div>

      <nav className="bg-navbar">
        <div className="container hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors font-heading ${location.pathname === link.path
                ? "bg-secondary text-secondary-foreground"
                : "text-navbar-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setMobileOpen(false)}
          />
          {/* Sidebar */}
          <div className="absolute top-0 right-0 h-full w-[280px] bg-card flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="p-5 border-b border-border flex items-center justify-between bg-accent/10">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-12 w-auto" />
                <div className="flex flex-col">
                  <div className="leading-tight">
                    <span className="text-primary font-bold">RENGO</span>
                    <span className="text-foreground font-bold ml-1">AUTO</span>
                  </div>
                  <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-tighter">Automotives Pvt. Ltd.</span>
                </div>
              </div>
              <button 
                onClick={() => setMobileOpen(false)}
                className="p-2 hover:bg-accent rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-foreground" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center px-4 py-4 rounded-sm text-sm font-bold uppercase tracking-widest transition-all ${
                      location.pathname === link.path
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                        : "text-foreground hover:bg-accent border border-transparent hover:border-border"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="p-6 border-t border-border bg-accent/30 space-y-4">
              <div className="text-center">
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Manufacturing Excellence Since 2012</p>
              </div>
              <button 
                onClick={() => { navigate("/contact"); setMobileOpen(false); }}
                className="w-full bg-secondary text-secondary-foreground py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-secondary/90 transition-colors"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
