const Brands = () => {
  const brands = [
    { name: "Maruti Suzuki", logo: "https://static.vecteezy.com/system/resources/thumbnails/020/336/714/small_2x/maruti-suzuki-logo-maruiti-icon-free-free-vector.jpg" },
    { name: "Tata", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KpAgocFqrks7-cn9TQgUKSZD02aTajb8QQ&s" },
    { name: "Hyundai", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMqbtuvqvYh7uWG4_v6iRevmsxZpUzHBqLw&s" },
    { name: "Honda", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Honda.svg" },
    { name: "Mahindra", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoR6wruJ7GQAsvoQApm6jGQKLBVUxL2Wz4Q&s" },
    { name: "Nissan", logo: "https://1000logos.net/wp-content/uploads/2020/03/Nissan-Logo-2012.png" },
    { name: "Ford", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4Z1hYiX1RccI-RnqG3hAUnHSm88abpn1Tw&s" },
  ];

  return (
    <div className="container py-16 scroll-fade">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-extrabold text-foreground mb-4 uppercase tracking-tight">Our Trusted Brands</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">We provide high-precision automotive components for all major Indian automobile manufacturers.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {brands.map((brand) => (
          <div 
            key={brand.name} 
            className="bg-white border-2 border-black rounded-sm p-8 flex items-center justify-center min-h-[180px] hover:shadow-lg transition-all"
          >
            <img 
              src={brand.logo} 
              alt={brand.name} 
              className="max-h-20 max-w-full object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
