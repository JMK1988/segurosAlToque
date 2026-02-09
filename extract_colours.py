from PIL import Image
import numpy as np

def extract_dominant_colors(image_path, num_colors=5):
    try:
        image = Image.open(image_path)
        image = image.convert('RGB')
        image = image.resize((150, 150))  # Resize for faster processing
        
        # Get colors from image
        pixels = np.array(image)
        pixels = pixels.reshape(-1, 3)
        
        # Simple frequency count avoiding heavy libraries like sklearn for now
        # We'll use a simple bucket approach or similar if needed, 
        # but let's try a basic histogram approach using Pillow's getcolors
        
        # Since getcolors() can return None if too many colors, let's limit the palette first
        image_quantized = image.quantize(colors=num_colors)
        palette = image_quantized.getpalette()
        
        colors = []
        # getpalette returns a list of [r, g, b, r, g, b, ...]
        # We only need the first num_colors * 3 values
        for i in range(0, num_colors * 3, 3):
            r = palette[i]
            g = palette[i+1]
            b = palette[i+2]
            colors.append((r, g, b))
            
        return colors
    except Exception as e:
        print(f"Error: {e}")
        return []

def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

if __name__ == "__main__":
    image_path = 'public/logo.jpeg'
    colors = extract_dominant_colors(image_path)
    
    print("Dominant Colors:")
    for color in colors:
        print(rgb_to_hex(color))
