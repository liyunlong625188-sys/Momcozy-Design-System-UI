from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parent
REFERENCE = ROOT / "shadcn-reference/alert-dialog-desktop-top.png"
IMPLEMENTATION = ROOT / "implementation-alert-dialog-desktop-1440.png"
OUTPUT = ROOT / "comparison-alert-dialog-desktop.png"

target_width = 1440
target_height = 1000
label_height = 42

reference = Image.open(REFERENCE).convert("RGB").crop((0, 0, target_width, target_height))
implementation = Image.open(IMPLEMENTATION).convert("RGB").crop((0, 0, target_width, target_height))

canvas = Image.new("RGB", (target_width * 2 + 24, target_height + label_height), "#f4f2f0")
canvas.paste(reference, (0, label_height))
canvas.paste(implementation, (target_width + 24, label_height))

draw = ImageDraw.Draw(canvas)
draw.text((18, 14), "REFERENCE · shadcn docs structure", fill="#240f1b")
draw.text((target_width + 42, 14), "IMPLEMENTATION · Momcozy UI library", fill="#240f1b")
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
canvas.save(OUTPUT)
