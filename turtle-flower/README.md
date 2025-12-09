# Turtle Flower Generator

A beautiful Python program that generates a vibrant, colorful flower/mandala pattern using the Turtle graphics library. The pattern features smooth color transitions across the full spectrum, creating an intricate radial design.

## Features

- 🌸 Creates a stunning flower/mandala pattern with 16 outer segments
- 🌈 Smooth color transitions through the full HSV color spectrum
- ⚡ Fast rendering with maximum turtle speed
- 🎨 Black background for vibrant color contrast

## Requirements

- Python 3.x
- Standard library modules (no external dependencies required):
  - `turtle` - for graphics rendering
  - `colorsys` - for HSV to RGB color conversion

## Installation

No installation required! This project uses only Python's built-in libraries.

## Usage

Simply run the Python script:

```bash
python turtle_flower.py
```

The program will open a graphics window displaying the colorful pattern. The window will remain open until you manually close it.

## How It Works

The program uses nested loops to create the pattern:

1. **Outer Loop** (`i in range(16)`): Creates 16 main segments/petals around the center
2. **Inner Loop** (`j in range(18)`): Draws 18 curved lines within each segment
3. **Color System**: Uses HSV (Hue, Saturation, Value) color space:
   - Starts with hue `h = 0`
   - Increments by `0.005` for each line, creating smooth color transitions
   - Converts HSV to RGB using `colorsys.hsv_to_rgb()`
4. **Drawing Pattern**: Each segment is created by drawing two mirrored arcs using the `circle()` function with decreasing radii

## Code Structure

- `speed(0)`: Sets maximum drawing speed
- `bgcolor("black")`: Sets the background to black
- Color calculation: `colorsys.hsv_to_rgb(h, 1, 1)` converts hue to RGB
- Pattern drawing: Uses `circle()` with varying radii and angles to create the petal effect

## Example Output

The program generates a circular, symmetrical pattern resembling a flower or mandala with:
- Vibrant colors transitioning through the spectrum
- Concentric curved lines creating depth
- Radial symmetry around a central point

## License

This is a simple educational project. Feel free to use and modify as you like!

## Author

Created as a tutorial project for learning Python Turtle graphics.

