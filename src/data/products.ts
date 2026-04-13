import product1 from "@/assets/product-fuel-pump-1.jpg";
import product2 from "@/assets/product-fuel-pump-2.jpg";
import product3 from "@/assets/product-fuel-pump-3.jpg";
import product4 from "@/assets/product-fuel-pump-4.jpg";
import product5 from "@/assets/product-fuel-pump-5.jpg";
import product6 from "@/assets/product-fuel-pump-6.jpg";
import product7 from "@/assets/product-fuel-pump-7.jpg";
import product8 from "@/assets/product-fuel-pump-8.jpg";

import car1 from "@/assets/wagonr_car.png";
import car2 from "@/assets/swift_car.png";
import car3 from "@/assets/baleno_car.png";
import car4 from "@/assets/ertiga_car.png";
import car5 from "@/assets/alto_car.png";
import car6 from "@/assets/brezza_car.png";
import car7 from "@/assets/tiago_car.png";
import car8 from "@/assets/celerio_car.png";
import car9 from "@/assets/hyundai_i20_car.png";

import os1 from "@/assets/oxygen-sensor-1.png";
import os2 from "@/assets/oxygen-sensor-2.png";
import os3 from "@/assets/oxygen-sensor-3.png";
import os4 from "@/assets/oxygen-sensor-4.png";
import os5 from "@/assets/oxygen-sensor-5.png";
import os6 from "@/assets/oxygen-sensor-6.png";

export interface Product {
  id: number;
  name: string;
  model: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  hoverImage?: string;
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
  "Oxygen Sensors",
  "Fuel Pump Assemblies",
  "Fuel Pressure Regulators",
];

export const products: Product[] = [
  {
    id: 1,
    name: "WagonR Fuel Pump Assembly",
    model: "15100-68-PA5",
    price: 2899,
    oldPrice: 3499,
    rating: 5,
    image: product1,
    hoverImage: car1,
    category: "Maruti Suzuki Fuel Pumps",
    vehicle: "Maruti Suzuki WagonR",
    description: "High-performance fuel pump assembly designed for Maruti Suzuki WagonR. Manufactured with precision engineering at our Bhiwadi facility. Ensures consistent fuel delivery and long service life.",
    features: ["OEM Replacement", "High Precision Manufacturing", "Corrosion-Resistant Materials", "Tested for Safety & Reliability", "Compatible with WagonR All Variants"],
    inStock: true,
  },
  {
    id: 2,
    name: "Swift Fuel Pump Assembly",
    model: "15100-74L01",
    price: 3200,
    rating: 5,
    image: product2,
    hoverImage: car2,
    category: "Maruti Suzuki Fuel Pumps",
    vehicle: "Maruti Suzuki Swift",
    description: "Premium fuel pump assembly for Maruti Suzuki Swift. Built with durable materials for superior fuel flow performance. Direct fit replacement with plug & play installation.",
    features: ["Direct Fit for Swift", "Superior Fuel Flow", "Durable & Long Service Life", "Rigorous Quality Testing", "1 Year Warranty"],
    inStock: true,
  },
  {
    id: 3,
    name: "Baleno Fuel Pump Assembly",
    model: "15100-79M00",
    price: 3450,
    oldPrice: 3999,
    rating: 5,
    image: product3,
    hoverImage: car3,
    category: "Maruti Suzuki Fuel Pumps",
    vehicle: "Maruti Suzuki Baleno",
    description: "High-quality fuel pump assembly for Maruti Suzuki Baleno. Engineered for optimal fuel atomization and consistent pressure delivery under all driving conditions.",
    features: ["Baleno Compatible", "High Pressure Output", "Stainless Steel Components", "Low Noise Operation", "OEM Specifications"],
    inStock: true,
  },
  {
    id: 4,
    name: "Ertiga Fuel Pump Assembly",
    model: "15100-72R12",
    price: 3650,
    rating: 4,
    image: product4,
    hoverImage: car4,
    category: "Maruti Suzuki Fuel Pumps",
    vehicle: "Maruti Suzuki Ertiga",
    description: "Complete fuel pump module for Maruti Suzuki Ertiga with integrated fuel level sender, strainer, and wiring harness. Drop-in replacement for hassle-free installation.",
    features: ["Complete Assembly with Sender", "Plug & Play Installation", "Strainer Included", "Integrated Wiring Harness", "Tested & Certified"],
    inStock: true,
  },
  {
    id: 5,
    name: "Alto Fuel Pump Assembly",
    model: "15100-67P02",
    price: 2499,
    oldPrice: 2999,
    rating: 4,
    image: product5,
    hoverImage: car5,
    category: "Maruti Suzuki Fuel Pumps",
    vehicle: "Maruti Suzuki Alto",
    description: "Reliable fuel pump assembly for Maruti Suzuki Alto. Compact design with consistent fuel delivery for efficient engine performance.",
    features: ["Alto All Variants", "Compact Design", "Consistent Fuel Delivery", "Corrosion Resistant", "Easy Installation"],
    inStock: true,
  },
  {
    id: 6,
    name: "Brezza Fuel Pump Assembly",
    model: "15100-76T03",
    price: 3850,
    rating: 5,
    image: product6,
    hoverImage: car6,
    category: "Maruti Suzuki Fuel Pumps",
    vehicle: "Maruti Suzuki Vitara Brezza",
    description: "Premium fuel pump assembly for Maruti Suzuki Vitara Brezza. High precision manufacturing ensures reliable performance in all conditions.",
    features: ["Brezza Compatible", "High Precision Build", "Durable Materials", "Superior Performance", "Quality Assured"],
    inStock: true,
  },
  {
    id: 7,
    name: "Tiago Fuel Pump Assembly",
    model: "543847100121",
    price: 3100,
    rating: 4,
    image: product7,
    hoverImage: car7,
    category: "Tata Fuel Pumps",
    vehicle: "Tata Tiago",
    description: "High-quality fuel pump assembly for Tata Tiago. Manufactured at our advanced facility with rigorous quality control for reliable fuel system performance.",
    features: ["Tata Tiago Compatible", "Advanced Manufacturing", "Rigorous Testing", "Long Service Life", "OEM Quality"],
    inStock: true,
  },
  {
    id: 8,
    name: "Celerio Fuel Pump Assembly",
    model: "15100-67P01",
    price: 2650,
    oldPrice: 3100,
    rating: 4,
    image: product8,
    hoverImage: car8,
    category: "Maruti Suzuki Fuel Pumps",
    vehicle: "Maruti Suzuki Celerio / Alto K10",
    description: "Fuel pump assembly for Maruti Suzuki Celerio and Alto K10. Adjustable fuel pressure for maintaining consistent fuel system performance.",
    features: ["Celerio / Alto K10 Fit", "Consistent Pressure", "Aluminum Components", "Easy Installation", "Warranty Included"],
    inStock: true,
  },
  {
    id: 9,
    name: "Premium Oxygen Sensor (Green Wire)",
    model: "OS-68-PA5",
    price: 1299,
    oldPrice: 1599,
    rating: 5,
    image: os1,
    hoverImage: car2,
    category: "Oxygen Sensors",
    vehicle: "Maruti Suzuki Swift",
    description: "High-precision oxygen sensor with green wire connector. Essential for maintaining optimal air-fuel ratio and engine efficiency.",
    features: ["Zirconia Element", "Fast Response Time", "High Temperature Resistance", "Consistent Voltage Signal", "OEM Quality"],
    inStock: true,
  },
  {
    id: 10,
    name: "Lambda Sensor (Orange Wire)",
    model: "LS-74L01",
    price: 1450,
    rating: 5,
    image: os2,
    hoverImage: car7,
    category: "Oxygen Sensors",
    vehicle: "Tata Tiago",
    description: "Premium lambda sensor with orange wire design. Engineered for precise exhaust gas measurement and emission control.",
    features: ["Planar Technology", "Long Service Life", "Corrosion Resistant", "Direct Fit Connector", "Tested for Accuracy"],
    inStock: true,
  },
  {
    id: 11,
    name: "Exhaust Gas Sensor (Grey Wire)",
    model: "EGS-79M00",
    price: 1350,
    oldPrice: 1650,
    rating: 4,
    image: os3,
    hoverImage: car3,
    category: "Oxygen Sensors",
    vehicle: "Maruti Suzuki Baleno",
    description: "Reliable exhaust gas sensor with grey wire connection. Helps improve fuel economy and reduce vehicle emissions.",
    features: ["Universal Fit Style", "Heat Shielded Wiring", "Anti-Seize Pre-applied", "Enhanced Engine Response", "Quality Certified"],
    inStock: true,
  },
  {
    id: 12,
    name: "Air-Fuel Ratio Sensor (White Wire)",
    model: "AFR-72R12",
    price: 1850,
    rating: 5,
    image: os4,
    hoverImage: car9,
    category: "Oxygen Sensors",
    vehicle: "Hyundai i20",
    description: "Advanced air-fuel ratio sensor with white wire. Provides continuous measurement for modern engine management systems.",
    features: ["Wideband Response", "Heated Element", "Premium Sensing Material", "Improves Idle Stability", "Easy Installation"],
    inStock: true,
  },
  {
    id: 13,
    name: "Universal Oxygen Sensor (Blue Wire)",
    model: "UOS-BLUE-01",
    price: 1150,
    rating: 4,
    image: os5,
    hoverImage: car5,
    category: "Oxygen Sensors",
    vehicle: "Universal / Maruti Suzuki Alto",
    description: "Universal fit oxygen sensor with durable blue wire insulation. High performance sensing element for all fuel types.",
    features: ["Coated Shell", "High Temp Tolerance", "Versatile Fitment", "Optimized Fuel Feed", "Reliable Performance"],
    inStock: true,
  },
  {
    id: 14,
    name: "Wideband Oxygen Sensor (Red Plug)",
    model: "WOS-RED-02",
    price: 1999,
    oldPrice: 2499,
    rating: 5,
    image: os6,
    hoverImage: car6,
    category: "Oxygen Sensors",
    vehicle: "Maruti Suzuki Vitara Brezza",
    description: "Premium wideband oxygen sensor with protective red plug sleeve. Advanced technology for precise AFR monitoring in turbocharged engines.",
    features: ["Fast Light-Off", "Dual Element", "Long Term Stability", "Protective Shield", "Precision Calibrated"],
    inStock: true,
  },
];
