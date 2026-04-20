
import re

# Data for 25 Fuel Pumps
pumps = [
    {"id": 1, "sku": "FP1001", "name": "MARUTI SUZUKI- FUEL PUMP", "partNumber": "151...F03", "desc": "Fuel Pump for MARUTI ALTO, OMNI 3RD GEN, WAGON R 1ST GEN 1ST F/L, WAGON R 1ST GEN 2ND F/L, ZEN ESTILO 1ST GEN - 151...F03 - MARUTI SUZUKI "},
    {"id": 2, "sku": "FP1002", "name": "MARUTI SUZUKI- FUEL PUMP", "partNumber": "151...P03", "desc": "Fuel Pump for MARUTI BALENO 3RD GEN, FRONX - 151...P03 - MARUTI SUZUKI "},
    {"id": 3, "sku": "FP1003", "name": "MARUTI SUZUKI – FUEL PUMP", "partNumber": "151...R03", "desc": "Fuel Pump for MARUTI CELERIO 2ND GEN, WAGON R 3RD GEN - 151...R03 - MARUTI SUZUKI "},
    {"id": 4, "sku": "FP1004", "name": "MARUTI SUZUKI- FUEL PUMP", "partNumber": "151...L02", "desc": "Fuel Pump for MARUTI SWIFT 2ND GEN, SWIFT 2ND GEN F/L, SWIFT DZIRE 2ND GEN, SWIFT DZIRE 2ND GEN F/L - 151...L02 - MARUTI SUZUKI "},
    {"id": 5, "sku": "FP1005", "name": "MARUTI SUZUKI- FUEL PUMP", "partNumber": "151...K01", "desc": "Fuel Pump for MARUTI SX4 1ST GEN - 151...K01 - MARUTI SUZUKI "},
    {"id": 6, "sku": "FP1006", "name": "MARUTI SUZUKI – FUEL PUMP", "partNumber": "151...R03", "desc": "Fuel Pump for MARUTI ERTIGA 2ND GEN F/L, XL6 1ST GEN F/L - 151...R03 - MARUTI SUZUKI"},
    {"id": 7, "sku": "FP1007", "name": "MARUTI SUZUKI- FUEL PUMP", "partNumber": "151...RA0", "desc": "Fuel Pump for MARUTI ERTIGA 2ND GEN - 151...RA0 - MARUTI SUZUKI "},
    {"id": 8, "sku": "FP1008", "name": "MARUTI SUZUKI – FUEL PUMP", "partNumber": "151...R04", "desc": "Fuel Pump for MARUTI IGNIS 1ST GEN, IGNIS 1ST GEN F/L, WAGON R 3RD GEN - 151...R04 - MARUTI SUZUKI "},
    {"id": 9, "sku": "FP1009", "name": "MARUTI SUZUKI – FUEL PUMP", "partNumber": "151...R03", "desc": "Maruti Suzuki Ignis Fuel Pump - 151...R03 MGP"},
    {"id": 10, "sku": "FP1010", "name": "TATA – FUEL PUMP ASSY", "partNumber": "543...0121", "desc": "Fuel Pump for TATA CURVV, NEXON - 543...0121 - TATA "},
    {"id": 11, "sku": "FP1011", "name": "MARUTI SUZUKI- FUEL PUMP", "partNumber": "151...PA5", "desc": "Fuel Pump for MARUTI BALENO 2ND GEN, BALENO 2ND GEN F/L, SWIFT 3RD GEN, SWIFT 3RD GEN F/L, SWIFT DZIRE 3RD GEN - 151...PA5 - MARUTI SUZUKI "},
    {"id": 12, "sku": "FP1012", "name": "MARUTI SUZUKI- FUEL PUMP", "partNumber": "151...M03", "desc": "This GENUINE PUMP ASSEMBLY FUEL with OEM number comes under Engine Parts. It is suitable for suzuki-spare-parts and is available in stock 151...M03"},
    {"id": 13, "sku": "FP1013", "name": "MARUTI SUZUKI- FUEL PUMP", "partNumber": "151...P04", "desc": "Fuel Pump for MARUTI SWIFT 2ND GEN F/L, SWIFT DZIRE 2ND GEN F/L - 151...P04 - MARUTI SUZUKI "},
    {"id": 14, "sku": "FP1014", "name": "MARUTI SUZUKI – FUEL PUMP", "partNumber": "151...R02", "desc": "Fuel Pump for MARUTI ERTIGA 2ND GEN, XL6 1ST GEN - 151...R12 - MARUTI SUZUKI "},
    {"id": 15, "sku": "FP1015", "name": "MARUTI SUZUKI- FUEL PUMP", "partNumber": "151...L01", "desc": "Fuel Pump for MARUTI SWIFT 2ND GEN, SWIFT 2ND GEN F/L, SWIFT DZIRE 2ND GEN, SWIFT DZIRE 2ND GEN F/L - 151...L01 - MARUTI SUZUKI"},
    {"id": 16, "sku": "FP1016", "name": "MARUTI SUZUKI – FUEL PUMP", "partNumber": "151...M02", "desc": "Fuel Pump for MARUTI CELERIO 2ND GEN, WAGON R 3RD GEN - 151...R02 - MARUTI SUZUKI"},
    {"id": 17, "sku": "FP1017", "name": "MARUTI SUZUKI – FUEL PUMP", "partNumber": "151...M00", "desc": "Fuel Pump for MARUTI S-CROSS 1ST GEN, S-CROSS 1ST GEN F/L, VITARA BREZZA 1ST GEN - 151...M00 - MARUTI SUZUKI"},
    {"id": 18, "sku": "FP1018", "name": "MARUTI SUZUKI – FUEL PUMP", "partNumber": "151...M02", "desc": "Fuel Pump for MARUTI ERTIGA 1ST GEN, ERTIGA 1ST GEN F/L - 151...M02 - MARUTI SUZUKI "},
    {"id": 19, "sku": "FP1019", "name": "MARUTI SUZUKI – FUEL PUMP", "partNumber": "151...T03", "desc": "Fuel Pump for MARUTI GRAND VITARA 3RD GEN - 151...T03 - MARUTI SUZUKI"},
    {"id": 20, "sku": "FP1020", "name": "MARUTI SUZUKI – FUEL PUMP", "partNumber": "151...F03", "desc": "Fuel Pump for MARUTI ALTO, OMNI 3RD GEN, WAGON R 1ST GEN 1ST F/L, WAGON R 1ST GEN 2ND F/L, ZEN ESTILO 1ST GEN - 151...F03 - MARUTI SUZUKI"},
    {"id": 21, "sku": "FP1021", "name": "MARUTI SUZUKI – FUEL PUMP", "partNumber": "151...P04", "desc": "Fuel Pump for MARUTI BALENO 3RD GEN, FRONX - 151...P04 - MARUTI SUZUKI"},
    {"id": 22, "sku": "FP1022", "name": "MARUTI SUZUKI – FUEL PUMP", "partNumber": "151...P02", "desc": "Fuel Pump for MARUTI ALTO 800 1ST GEN F/L, ALTO K10 2ND GEN - 151...P02 - MARUTI SUZUKI "},
    {"id": 23, "sku": "FP1023", "name": "MARUTI SUZUKI – FUEL PUMP", "partNumber": "151...R02", "desc": "This GENUINE PUMP ASSY, FUEL with OEM number  151...R02 comes under Engine Parts. It is suitable for suzuki "},
    {"id": 24, "sku": "FP1024", "name": "TATA – FUEL PUMP", "partNumber": "544...0169", "desc": "Fuel Pump for TATA ALTROZ, PUNCH - 544...0169 - TATA "},
    {"id": 25, "sku": "FP1025", "name": "TATA – FUEL PUMP", "partNumber": "543...0121", "desc": "Fuel Pump for TATA CURVV, NEXON - 543...0121 - TATA  "},
]

def gen_motor(i, pump):
    motor_id = 26 + i
    motor_sku = f"FPM-{i+1:03d}"
    motor_name = pump["name"].replace("PUMP", "MOTOR")
    motor_model = f"RPM{3001 + i}"
    motor_desc = pump["desc"]
    return f"""  {{
    id: {motor_id},
    sku: "{motor_sku}",
    name: "{motor_name}",
    model: "{motor_model}",
    partNumber: "{pump['partNumber']}",
    price: 490,
    oldPrice: 700,
    category: "Fuel motor",
    image: motorImg,
    images: [motorImg],
    vehicle: "Universal",
    description: "{motor_desc}",
    features: ["High Durability", "Universal Fit", "Efficient Performance"],
    inStock: true,
    rating: 5,
  }},"""

# We'll generate the list from motor 3 to 25
all_motors = "\\n".join([gen_motor(i, pumps[i]) for i in range(2, 25)])
print(all_motors)
