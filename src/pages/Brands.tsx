const Brands = () => {
  const brands = [
    "ABRO", "ALEO", "Ashok Leyland", "Auto Gold", "Autokoi", "Banco", 
    "BEHR", "Bosch", "Castrol", "Chevrolet", "Delphi", "Denso", 
    "Depo", "E&E Turbos", "Estra", "Exedy", "Ford", "Gabriel", 
    "Garrett", "Gates", "Hanon Systems", "HL Mando", "Honda", "IGB", 
    "Indo Lite", "Kartion", "K-Tek", "Legends", "Lemforder", "Lpr", 
    "Luk", "Lumax", "Mahindra", "Mark Xtralife", "Maruti Suzuki"
  ];

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Our Brands</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {brands.map((brand) => (
          <div 
            key={brand} 
            className="bg-accent border border-border rounded-sm p-6 flex items-center justify-center min-h-[100px] text-center"
          >
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
