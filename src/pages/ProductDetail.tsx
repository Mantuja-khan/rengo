import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Star, ShoppingCart, ArrowLeft, Check, X } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductDetail = () => {
  const { id } = useParams();
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl text-foreground mb-4">Product Not Found</h1>
        <Link to="/products" className="text-primary underline">Back to Products</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div>
      <div className="container pt-8 pb-2">
        <Link to="/products" className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors w-fit">
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>
      </div>

      <section className="container py-10 scroll-fade">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-accent border border-border rounded-sm p-4 flex items-center justify-center overflow-hidden h-[400px] md:h-[500px]">
            <Carousel className="w-full">
              <CarouselContent>
                {product.images?.map((img, index) => (
                  <CarouselItem key={index} className="flex items-center justify-center">
                    <img
                      src={img}
                      alt={`${product.name}-${index}`}
                      width={512}
                      height={512}
                      className="max-w-full max-h-[350px] md:max-h-[450px] object-contain"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl text-foreground mb-2">{product.name}</h1>
            <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">
              MODEL :- {product.partNumber || product.model}
            </p>
            {product.vehicle && (
              <p className="text-sm text-muted-foreground mb-3">Vehicle: <span className="font-semibold text-foreground">{product.vehicle}</span></p>
            )}
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < product.rating ? "fill-star text-star" : "text-border"}`} />
              ))}
              <span className="text-sm text-muted-foreground ml-2">({product.rating}/5)</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-heading font-bold text-primary">
                {product.price ? `₹${product.price.toLocaleString("en-IN")}` : "Price on Enquiry"}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-muted-foreground line-through">₹{product.oldPrice.toLocaleString("en-IN")}</span>
              )}
            </div>
            <div className="flex items-center gap-2 mb-6">
              {product.inStock ? (
                <span className="flex items-center gap-1 text-sm font-semibold text-foreground"><Check className="h-4 w-4" /> In Stock</span>
              ) : (
                <span className="flex items-center gap-1 text-sm font-semibold text-primary"><Check className="h-4 w-4" /> In Stock </span>
              )}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body normal-case tracking-normal font-normal">{product.description}</p>


            <div className="flex gap-4">
              <button 
                onClick={() => setEnquiryOpen(true)}
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 font-semibold uppercase text-sm transition-colors rounded-sm disabled:opacity-50 font-heading" 
                disabled={!product.inStock}
              >
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

      <EnquiryForm product={product} open={enquiryOpen} onOpenChange={setEnquiryOpen} />
    </div>
  );
};

export default ProductDetail;
