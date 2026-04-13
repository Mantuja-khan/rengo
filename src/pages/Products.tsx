import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import ctaBgProducts from "@/assets/cta-bg-products.jpg";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <section className="relative py-16 overflow-hidden scroll-fade">
        <img src={ctaBgProducts} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="container relative z-10">
          <h1 className="text-3xl md:text-4xl text-secondary-foreground">Our Products</h1>
          <p className="text-muted-foreground text-sm mt-2 font-body normal-case tracking-normal font-normal">Home / Products</p>
        </div>
      </section>

      <div className="container py-10 scroll-fade">
        <div className="grid lg:grid-cols-[240px_1fr] gap-8 items-start">
          <aside className="lg:sticky lg:top-24">
            <h2 className="text-lg text-foreground mb-4">Categories</h2>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setSearchParams({})}
                  className={`w-full text-left px-3 py-2 text-sm rounded-sm transition-colors font-heading ${
                    activeCategory === "All" ? "bg-primary text-primary-foreground" : "hover:bg-accent text-foreground"
                  }`}
                >
                  All Products
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSearchParams({ category: cat })}
                    className={`w-full text-left px-3 py-2 text-sm rounded-sm transition-colors font-heading ${
                      activeCategory === cat ? "bg-primary text-primary-foreground" : "hover:bg-accent text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-20">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
