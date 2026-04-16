import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => (
  <Link
    to={`/products/${product.id}`}
    className="bg-card border border-border rounded-sm overflow-hidden transition-all"
  >
    <div className="relative aspect-square bg-accent overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={512}
        height={512}
        className="w-full h-full object-contain p-4"
      />
      {product.oldPrice && (
        <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-sm z-10">
          {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
        </span>
      )}
      {!product.inStock && (
        <span className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-sm z-10">
          Out of Stock
        </span>
      )}
    </div>
    <div className="p-2 md:p-4">
      <div className="flex items-center gap-0.5 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-2.5 w-2.5 md:h-3.5 md:w-3.5 ${i < product.rating ? "fill-star text-star" : "text-border"}`}
          />
        ))}
      </div>
      <h3 className="text-[10px] md:text-sm font-semibold text-foreground line-clamp-2 mb-1 normal-case tracking-normal font-heading">
        {product.name}
      </h3>
      <p className="text-[8px] md:text-xs font-bold text-primary mb-1 md:mb-2 uppercase tracking-wider">
        MODEL :- {product.model}
      </p>
      <div className="flex items-center gap-1 md:gap-2">
        <span className="text-sm md:text-lg font-bold text-primary font-heading">₹{product.price.toLocaleString("en-IN")}</span>
        {product.oldPrice && (
          <span className="text-[10px] md:text-sm text-muted-foreground line-through">₹{product.oldPrice.toLocaleString("en-IN")}</span>
        )}
      </div>
      <button className="mt-2 md:mt-3 w-full flex items-center justify-center gap-1 md:gap-2 bg-primary text-primary-foreground py-1.5 md:py-2 text-[10px] md:text-sm font-semibold rounded-sm font-heading">
        <ShoppingCart className="h-3 w-3 md:h-4 md:w-4" />
        View Details
      </button>
    </div>
  </Link>
);

export default ProductCard;
