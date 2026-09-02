import './globals.css';

export const metadata = {
  title: 'Cargo Kings Inc | Supreme Expedited Freight & Telemetry',
  description: 'High-security expedited straight box freight logistics. USDOT 3801397 • MC 1368401 • 26ft Dock-High Straight Box, Onboard Electric Pallet Jack, TSA & TWIC Certified Operators.',
  icons: {
    icon: '/image/ssstik.io_1788346269178.webp',
    shortcut: '/image/ssstik.io_1788346269178.webp',
    apple: '/image/ssstik.io_1788346269178.webp',
  },
  keywords: [
    'Cargo Kings Inc',
    'Expedited Freight',
    'Box Truck Logistics',
    'TSA Certified Carrier',
    'TWIC Clearance Trucking',
    'Dock High Freight',
    'Electric Pallet Jack',
    'Gaika Headley',
    'MC 1368401',
    'USDOT 3801397'
  ],
  authors: [{ name: 'Gaika Headley', url: 'https://cargokingsinc.com' }],
  openGraph: {
    title: 'Cargo Kings Inc | Expedited Logistics & 3D Telemetry',
    description: 'Supreme Expedited Freight Power. TSA Change 10 Certified & TWIC Card Approved. 2 Dedicated Power Units.',
    url: 'https://cargokingsinc.com',
    siteName: 'Cargo Kings Inc',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 selection:bg-red-600 selection:text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
