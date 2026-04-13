import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import logo from "@/assets/logo.png";
import { products } from "@/data/products";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
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
    ? products.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.model.toLowerCase().includes(searchQuery.toLowerCase())
    )
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
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-foreground outline-none"
              />
              <button onClick={closeSearch} className="p-1">
                <X className="h-5 w-5 text-foreground" />
              </button>
            </div>
          )}

          <Link to="/" className="flex items-center gap-1 md:gap-2">
            <img src={logo} alt="Rengo Automotive" className="h-8 md:h-12 w-auto" />
            <div>
              <span className="font-heading text-lg md:text-2xl font-bold tracking-tight text-foreground">RENGO</span>
              <span className="font-heading text-lg md:text-2xl font-bold text-primary ml-0.5">AUTOMOTIVES</span>
              <p className="text-[10px] md:text-xs text-muted-foreground -mt-1"> Private Limited</p>
            </div>
          </Link>

          {/* Desktop search bar */}
          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8 relative">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border bg-background text-sm text-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {searchQuery.trim() && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile search toggle */}
            <button className="md:hidden p-2 hover:text-primary transition-colors" onClick={() => setSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </button>
            <button className="relative p-2 hover:text-primary transition-colors hidden md:block">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
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
                      <p className="text-sm font-semibold text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.vehicle} • ₹{p.price.toLocaleString("en-IN")}</p>
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

      {mobileOpen && (
        <div className="md:hidden bg-navbar border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors font-heading ${location.pathname === link.path
                ? "bg-secondary text-secondary-foreground"
                : "text-navbar-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
