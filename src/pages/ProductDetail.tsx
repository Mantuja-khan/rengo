import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, ArrowLeft, Check, X } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl text-foreground mb-4">Product Not Found</h1>
        <Link to="/products" className="text-primary hover:underline">Back to Products</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div>
      <div className="container pt-8 pb-2">
        <Link to="/products" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors w-fit">
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>
      </div>

      <section className="container py-10 scroll-fade">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="group relative bg-accent border border-border rounded-sm p-8 flex items-center justify-center overflow-hidden h-[400px] md:h-[500px]">
            <img 
              src={product.image} 
              alt={product.name} 
              width={512} 
              height={512} 
              className={`max-w-full max-h-full object-contain z-10 transition-all duration-500 ${product.hoverImage ? "group-hover:opacity-0" : "group-hover:scale-110"}`} 
            />
            {product.hoverImage && (
              <img
                src={product.hoverImage}
                alt={`${product.name} vehicle`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100"
              />
            )}
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl text-foreground mb-2">{product.name}</h1>
            <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">
              MODEL :- {product.model}
            </p>
            <p className="text-sm text-muted-foreground mb-3">Vehicle: <span className="font-semibold text-foreground">{product.vehicle}</span></p>
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < product.rating ? "fill-star text-star" : "text-border"}`} />
              ))}
              <span className="text-sm text-muted-foreground ml-2">({product.rating}/5)</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-heading font-bold text-primary">₹{product.price.toLocaleString("en-IN")}</span>
              {product.oldPrice && (
                <span className="text-lg text-muted-foreground line-through">₹{product.oldPrice.toLocaleString("en-IN")}</span>
              )}
            </div>
            <div className="flex items-center gap-2 mb-6">
              {product.inStock ? (
                <span className="flex items-center gap-1 text-sm font-semibold text-foreground"><Check className="h-4 w-4" /> In Stock</span>
              ) : (
                <span className="flex items-center gap-1 text-sm font-semibold text-primary"><X className="h-4 w-4" /> Out of Stock</span>
              )}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body normal-case tracking-normal font-normal">{product.description}</p>

            <h3 className="text-sm font-bold text-foreground mb-3">Key Features:</h3>
            <ul className="space-y-2 mb-8">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" /> {f}
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 font-semibold uppercase text-sm hover:bg-primary/90 transition-colors rounded-sm disabled:opacity-50 font-heading" disabled={!product.inStock}>
                <ShoppingCart className="h-5 w-5" /> Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent scroll-fade">
        <div className="container py-12">
          <h2 className="text-2xl text-foreground mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
