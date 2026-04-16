import newProduct1 from "@/assets/new-product-1.png";
import newProduct2 from "@/assets/new-product-2.png";
import newProduct3 from "@/assets/new-product-3.png";
import newProduct4 from "@/assets/new-product-4.png";
import newProduct5 from "@/assets/new-product-5.png";
import newProduct6 from "@/assets/new-product-6.png";
import newProduct7 from "@/assets/new-product-7.png";
import newProduct8 from "@/assets/new-product-8.png";
import newProduct9 from "@/assets/new-product-9.png";
import newProduct10 from "@/assets/new-product-10.png";

export interface Product {
  id: number;
  name: string;
  model: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  hoverImage?: string;
  images: string[];
  category: string;
  vehicle: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export const categories = [
  "Maruti Suzuki Fuel Pumps",
  "Tata Fuel Pumps",
  "Hyundai Fuel Pumps",
  "Fuel Pump Assemblies",
  "Fuel Pressure Regulators",
];

export const products: Product[] = [
  {
    id: 15,
    name: "Maruti Suzuki Pump Assy Fuel",
    model: "15100-F03",
    price: 4989,
    oldPrice: 5061,
    rating: 5,
    image: newProduct1,
    images: [newProduct1, newProduct1, newProduct1],
    category: "Maruti Suzuki Fuel Pumps",
    vehicle: "Maruti Alto, Omni, Wagon R",
    description: "OEM high-performance fuel pump assembly. Designed for consistent fuel pressure and flow. Genuine replacement part for Maruti vehicles.",
    features: ["OEM Specification", "Durable Build", "Perfect Fit", "High Reliability", "100% Tested"],
    inStock: true,
  },
  {
    id: 16,
    name: "Denso Fuel Pump Motor",
    model: "HA19-9880",
    price: 1391,
    oldPrice: 1473,
    rating: 5,
    image: newProduct2,
    images: [newProduct2, newProduct2, newProduct2],
    category: "Fuel Pump Assemblies",
    vehicle: "Multiple Vehicle Platforms",
    description: "Premium Denso fuel pump motor. Engineered for long-lasting performance and quiet operation. Ideal aftermarket replacement.",
    features: ["Quiet Operation", "Low Power Draw", "High Flow Rate", "Plug and Play", "Certified Quality"],
    inStock: true,
  },
  {
    id: 17,
    name: "Plate Sub-Assy, Fuel Suction",
    model: "770-050",
    price: 731,
    oldPrice: 3656,
    rating: 4,
    image: newProduct3,
    images: [newProduct3, newProduct3, newProduct3],
    category: "Fuel Pump Assemblies",
    vehicle: "Toyota / Lexus",
    description: "Toyota/Lexus genuine fuel suction plate sub-assembly. Essential component for the fuel delivery system.",
    features: ["Toyota Compatible", "Lexus Fitment", "OEM Quality", "Enhanced Durability", "Easy Installation"],
    inStock: true,
  },
  {
    id: 18,
    name: "Tata Assy Priming Pump",
    model: "289-0123",
    price: 1593,
    oldPrice: 1755,
    rating: 4,
    image: newProduct4,
    images: [newProduct4, newProduct4, newProduct4],
    category: "Fuel Pump Assemblies",
    vehicle: "Tata Movus, Sumo Grande",
    description: "Pump for TATA MOVUS, SUMO GRANDE - 289...0123 - TATA. OEM quality priming pump ensures proper fuel delivery and system priming.",
    features: ["Tata Genuine Style", "OEM Quality", "Direct Replacement", "Durable Material", "Reliable Prime"],
    inStock: true,
  },
  {
    id: 19,
    name: "Mahindra Fuel Delivery Module Secondary",
    model: "1001-741N",
    price: 1890,
    oldPrice: 2108,
    rating: 5,
    image: newProduct5,
    images: [newProduct5, newProduct5, newProduct5],
    category: "Fuel Pump Assemblies",
    vehicle: "Mahindra XUV 500",
    description: "Fuel Supply Module for MAHINDRA XUV 500 1ST GEN, XUV 500 2ND GEN, XUV 500 2ND GEN F/L - 1001...741N - MAHINDRA. High-precision secondary module for optimal fuel supply.",
    features: ["XUV 500 Compatible", "Secondary Supply Module", "OEM Specification", "Tested for Performance", "Long Life Cycle"],
    inStock: true,
  },
  {
    id: 20,
    name: "Maruti Suzuki Pump ASY, Fuel",
    model: "15110-420",
    price: 633,
    oldPrice: 645,
    rating: 4,
    image: newProduct6,
    images: [newProduct6, newProduct6, newProduct6],
    category: "Maruti Suzuki Fuel Pumps",
    vehicle: "Maruti 800, 1000",
    description: "Fuel Pump for MARUTI 1000, 800 2ND GEN TYPE 1, 800 2ND GEN TYPE 2 - 151...420 - MARUTI SUZUKI. Mechanical fuel pump assembly for vintage Maruti models.",
    features: ["Mechanical Pump", "Classic Model Fit", "Maruti Genuine Type", "Easy Maintenance", "Genuine Build"],
    inStock: true,
  },
  {
    id: 21,
    name: "Delphi Fuel Supply Module",
    model: "AM-772",
    price: 4900,
    rating: 5,
    image: newProduct7,
    images: [newProduct7, newProduct7, newProduct7],
    category: "Fuel Pump Assemblies",
    vehicle: "Mahindra Jeeto",
    description: "Fuel Supply Module for MAHINDRA JEETO, JEETO MINI VAN - AM...772 - DELPHI. Complete aftermarket fuel supply module for commercial range.",
    features: ["Jeeto Compatible", "Delphi Brand Quality", "Complete Module", "Industrial Grade", "Easy Fitment"],
    inStock: true,
  },
  {
    id: 22,
    name: "HKT Fuel Pump Motor",
    model: "FP-03",
    price: 818,
    oldPrice: 1000,
    rating: 5,
    image: newProduct8,
    images: [newProduct8, newProduct8, newProduct8],
    category: "Fuel Pump Assemblies",
    vehicle: "Tata Nano",
    description: "Fuel Pump for TATA NANO, NANO GenX, NANO TWIST - FP...03 - HKT. Compact and efficient fuel pump motor for Tata Nano range.",
    features: ["Nano Compatible", "HKT Aftermarket", "Efficient Motor", "Low Vibration", "OEM Equivalent"],
    inStock: true,
  },
  {
    id: 23,
    name: "Maruti Suzuki PUMP ASSY, FUEL",
    model: "151..R03",
    price: 5716,
    rating: 5,
    image: newProduct9,
    images: [newProduct9, newProduct9, newProduct9],
    category: "Maruti Suzuki Fuel Pumps",
    vehicle: "Celerio, Wagon R 3rd Gen",
    description: "Fuel Pump for MARUTI CELERIO 2ND GEN, WAGON R 3RD GEN - 151...R03 - MARUTI SUZUKI. High-performance OEM quality replacement.",
    features: ["OEM Quality", "Celerio/WagonR Fit", "Direct Replacement", "Tested Performance", "Long Service Life"],
    inStock: true,
  },
  {
    id: 24,
    name: "Maruti Suzuki PUMP ASSY FUEL",
    model: "151..L02",
    price: 5522,
    rating: 5,
    image: newProduct10,
    images: [newProduct10, newProduct10, newProduct10],
    category: "Maruti Suzuki Fuel Pumps",
    vehicle: "Swift, Dzire 2nd Gen",
    description: "Fuel Pump for MARUTI SWIFT 2ND GEN, SWIFT 2ND GEN F/L, SWIFT DZIRE 2ND GEN, SWIFT DZIRE 2ND GEN F/L - 151...L02 - MARUTI SUZUKI.",
    features: ["Complete Assembly", "Swift/Dzire Fit", "OEM Specification", "Integrated Float", "Easy Installation"],
    inStock: true,
  },
];
