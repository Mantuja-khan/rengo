import { useState } from "react";
import { type Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface EnquiryFormProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EnquiryForm({ product, open, onOpenChange }: EnquiryFormProps) {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [requirement, setRequirement] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.rengoautomotives.com/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          mobile,
          message: requirement,
          productModel: product.model,
          productName: product.name,
          subject: `Product Enquiry for ${product.model}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send enquiry');
      }

      toast({
        title: "Enquiry Sent",
        description: "Thank you for your interest. Our team will contact you soon.",
      });

      onOpenChange(false);
      setEmail("");
      setMobile("");
      setRequirement("");
    } catch (error) {
      console.error('Enquiry Error:', error);
      toast({
        title: "Submission Failed",
        description: "Could not send enquiry. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-heading">Product Enquiry</DialogTitle>
          <DialogDescription>
            Please fill in the details below to enquire about this product.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-4 py-4 border-b border-border">
          <img src={product.image} alt={product.name} className="w-16 h-16 object-contain bg-accent rounded-sm" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-foreground line-clamp-1 uppercase">{product.name}</p>
            <p className="text-xs text-primary font-bold">MODEL: {product.model}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address (Gmail)</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="requirement">Other Requirements</Label>
            <Textarea
              id="requirement"
              placeholder="Tell us about your quantity or custom needs..."
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <Button type="submit" className="w-full font-heading uppercase" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Enquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
