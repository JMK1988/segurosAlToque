
import os

FILE_PATH = r"c:\Users\Asistente Produccion\Documents\GitHub\segurosAlToque\node_modules\@hugeicons\core-free-icons\dist\types\index.d.ts"
KEYWORDS = {
    "autos": ["Car", "Auto", "Vehicle"],
    "motos": ["Moto", "Bike", "Cycle"],
    "taxi": ["Taxi", "Cab"],
    "hogar": ["Home", "House", "Building"],
    "comercio": ["Store", "Shop", "Market"],
    "accidentes": ["Health", "Injury", "Medical", "Hospital", "FirstAid", "Bandage"],
    "retiro": ["Money", "Bank", "Piggy", "Coin", "Finance", "Dollar", "Cash", "Note"],
    "asistencia": ["Plane", "Flight", "Travel", "World", "Globe", "Earth"],
    "alquiler": ["Key", "Rent", "House"],
    "celular": ["Phone", "Mobile", "Device", "SmartPhone"],
    "flotas": ["Truck", "Bus", "Fleet"],
    "art": ["Briefcase", "Work", "Helmet", "Safety"],
    "agro": ["Leaf", "Plant", "Tree", "Nature", "Farm", "Tractor", "Wheat"],
    "transporte": ["Delivery", "Shipping", "Box", "Container", "Truck"]
}

def search_icons():
    try:
        with open(FILE_PATH, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        found_icons = {k: [] for k in KEYWORDS.keys()}
        
        for line in lines:
            if "declare const" in line and "Icon" in line:
                parts = line.split()
                if len(parts) >= 3:
                    icon_name = parts[2].replace(":", "")
                    
                    for category, tags in KEYWORDS.items():
                        for tag in tags:
                            if tag.lower() in icon_name.lower():
                                found_icons[category].append(icon_name)

        for category, icons in found_icons.items():
            print(f"--- {category.upper()} ---")
            # Propose top 5 matches
            print("\n".join(icons[:10]))
            print("\n")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    search_icons()
