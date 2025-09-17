# QR Code Scanner - React Assignment

A React + TypeScript application that scans QR codes and navigates to different pages based on the QR content. Built for the Conexus Junior React Developer position.

## Features

- **QR Code Scanner**: Uses device camera to scan QR codes
- **Interactive Gauge Page**: Dynamic torque gauge with color-changing SVG overlay
- **Landing Page**: Professional tool showcase with hero images
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript**: Fully typed with proper interfaces
- **Accessible**: ARIA labels, keyboard navigation, and semantic HTML

## Installation & Setup

### Prerequisites
- Node.js 16+ and npm
- Modern web browser with camera access

### Steps
1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd qr-scanner-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to the displayed local URL (typically `http://localhost:5173`)

## Usage

### QR Code Testing

The app expects QR codes with query parameters to determine navigation:

**Sample QR Code Content:**
- **Gauge Page**: `?type=gauge` or `http://localhost:5173/?type=gauge`
- **Landing Page**: `?type=landing` or `http://localhost:5173/?type=landing`

You can generate QR codes using any online QR generator with the above strings, or use the demo navigation buttons in the scanner interface.

### Camera Permissions

The app will request camera access when you click "Start Scanning". Make sure to allow camera permissions in your browser.

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (shadcn/ui)
│   ├── QRScanner.tsx    # Main QR scanning component
│   ├── InteractiveGauge.tsx  # Torque gauge page
│   └── LandingPage.tsx  # Product showcase page
├── assets/              # Images and SVG files
├── types/               # TypeScript type definitions
├── lib/                 # Utility functions
└── pages/               # Route components
```

## Key Technologies

- **React 18** with functional components and hooks
- **TypeScript** for type safety
- **Vite** for build tooling and development server
- **React Router** for navigation
- **@zxing/browser** for QR code scanning
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components

## Implementation Notes

### QR Scanner
- Uses `@zxing/browser` for cross-platform QR code detection
- Handles camera permissions gracefully with error messages
- Provides fallback demo buttons for testing without QR codes

### Interactive Gauge
- Vertical gauge with smooth color transitions (green → yellow → red)
- SVG overlay that changes tint based on gauge value
- "BREAK" warning overlay when maximum value is reached
- Responsive design with proper contrast against background image

### Landing Page
- Professional industrial design theme
- Responsive grid layouts
- Optimized images with proper alt text
- Call-to-action sections and feature highlights

### Accessibility Features
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color scheme
- Alt text for all images

### Design Decisions

**Color Scheme**: Industrial dark theme with lime green accents to match the provided assets

**Typography**: Clean, modern fonts with good readability

**Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop

**Performance**: Optimized images, efficient re-renders, and minimal bundle size

## Browser Support

- Chrome 87+
- Firefox 82+
- Safari 14+
- Edge 87+

**Note**: Camera access requires HTTPS in production or localhost for development.

## Production Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

3. Ensure HTTPS is enabled for camera access

## Assignment Requirements Met

✅ **React 18+ with TypeScript** - Full TypeScript implementation with proper types  
✅ **QR Code Scanning** - Camera-based scanning with @zxing/browser  
✅ **Routing** - React Router navigation based on QR content  
✅ **Interactive Gauge** - Color-changing vertical gauge with increment functionality  
✅ **SVG Overlay** - Dynamic tinting based on gauge value  
✅ **Landing Page** - Hero images and product showcase  
✅ **Responsive Design** - Mobile-first responsive layout  
✅ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation  
✅ **Code Quality** - Clean component structure, TypeScript types, error handling  

## Time Investment

Approximately 2 hours as requested, focused on:
- Core functionality implementation (1 hour)
- UI polish and responsive design (45 minutes)  
- Testing and documentation (15 minutes)