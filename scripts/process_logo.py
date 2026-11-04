"""Convert LuminaLogo.jpg (purple script on white/light background) into
transparent PNGs:
  - public/lumina-logo.png       (purple on transparent)
  - public/lumina-logo-white.png (white on transparent, for dark backgrounds)
"""
from PIL import Image
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "LuminaLogo.jpg")
PUB = os.path.join(ROOT, "public")

os.makedirs(PUB, exist_ok=True)

img = Image.open(SRC).convert("RGBA")
w, h = img.size
px = img.load()

# Build alpha from "distance from white" so light-gray background and the
# card shadow fade out while the dark purple marks stay opaque.
def luminance(p):
    r, g, b = p[0], p[1], p[2]
    return 0.299 * r + 0.587 * g + 0.114 * b

LOW = 105   # fully opaque ink
HIGH = 135  # fully transparent background/shadow/card

# First pass: compute alpha per pixel
alphas = []
for y in range(h):
    row = []
    for x in range(w):
        r, g, b, _ = px[x, y]
        lum = luminance((r, g, b))
        if lum >= HIGH:
            a = 0
        elif lum <= LOW:
            a = 255
        else:
            t = (lum - LOW) / (HIGH - LOW)
            a = int(255 * (1 - t))
        row.append(a)
    alphas.append(row)

# Feather: average with neighbors to soften jagged JPG edges
def smooth_alpha(alphas, w, h):
    out = [row[:] for row in alphas]
    for y in range(1, h - 1):
        for x in range(1, w - 1):
            s = 0
            for dy in (-1, 0, 1):
                for dx in (-1, 0, 1):
                    s += alphas[y + dy][x + dx]
            out[y][x] = s // 9
    return out

alphas = smooth_alpha(alphas, w, h)

purple = Image.new("RGBA", img.size, (0, 0, 0, 0))
white = Image.new("RGBA", img.size, (0, 0, 0, 0))
pp = purple.load()
wp = white.load()

for y in range(h):
    for x in range(w):
        r, g, b, _ = px[x, y]
        a = alphas[y][x]
        if a == 0:
            continue
        pp[x, y] = (r, g, b, a)
        wp[x, y] = (255, 255, 255, a)

# Crop transparent padding around the mark (with a little breathing room)
def crop(img, pad=12):
    b = img.getbbox()
    if not b:
        return img
    l, t, r, bo = b
    l = max(0, l - pad); t = max(0, t - pad)
    r = min(img.width, r + pad); bo = min(img.height, bo + pad)
    return img.crop((l, t, r, bo))

purple = crop(purple)
white = crop(white)

purple.save(os.path.join(PUB, "lumina-logo.png"))
white.save(os.path.join(PUB, "lumina-logo-white.png"))
print("Saved:", os.path.join(PUB, "lumina-logo.png"), purple.size)
print("Saved:", os.path.join(PUB, "lumina-logo-white.png"), white.size)
