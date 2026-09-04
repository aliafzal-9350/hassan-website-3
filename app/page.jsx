'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import {
  Phone,
  Mail,
  ShieldCheck,
  Zap,
  Truck,
  Crown,
  Instagram,
  Activity,
  ArrowUpRight,
  Radio,
  Clock,
  Compass,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  ChevronRight,
  Gauge,
  FileCheck,
  Check,
  Menu,
  X,
  Camera,
  ChevronLeft,
  Maximize2
} from 'lucide-react';

const fleetGallery = [
  { image: '/image/ccccc.jpeg', label: 'Primary fleet', title: 'Blue 26ft straight box', detail: 'Full 3/4 exterior profile' },
  { image: '/image/mmmm.jpeg', label: 'Rear access', title: 'Dock-high rear entry', detail: 'Liftgate ready for loading' },
  { image: '/image/ooooo.jpeg', label: 'Cargo handling', title: 'Electric pallet jack', detail: 'Onboard powered equipment' },
  { image: '/image/pppp.jpeg', label: 'Side profile', title: 'Expedited box body', detail: 'High-volume cargo capacity' },
  { image: '/image/ssssss.jpeg', label: 'Fleet angle', title: 'Front 3/4 view', detail: 'Road-ready power unit' },
  { image: '/image/rrrrr.jpeg', label: 'Rear liftgate', title: 'Ground-level access', detail: 'Hydraulic liftgate platform' },
  { image: '/image/uuuuuu.jpeg', label: 'Brand identity', title: 'CARGO KINGS INC.', detail: 'MC and USDOT marked cab' },
  { image: '/image/vvvvv.jpeg', label: 'Cab detail', title: 'Driver-side finish', detail: 'Clean, branded operator cab' },
  { image: '/image/whi.jpeg', label: 'White unit', title: 'Additional capacity', detail: 'Second dedicated power unit' },
];

const CargoKingsCanvas = dynamic(() => import('@/components/CargoKingsCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[290px] sm:min-h-[400px] flex flex-col items-center justify-center font-mono text-xs tracking-widest text-red-600 bg-red-50/50 rounded-2xl sm:rounded-3xl border border-red-100 p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-600 animate-ping" />
        <span className="font-bold text-center text-[11px] sm:text-xs">INITIALIZING 3D FLEET MATRIX...</span>
      </div>
      <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono tracking-wider text-center">
        CONNECTING TO 26FT DOCK-HIGH TELEMETRY CORE
      </span>
    </div>
  ),
});

export default function HomePage() {
  const [activePreset, setActivePreset] = useState('default');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [details, setDetails] = useState('');
  const [contact, setContact] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const activeGalleryItem = fleetGallery[activeGalleryIndex];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setPickup('');
      setDropoff('');
      setDetails('');
      setContact('');
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-600 selection:text-white antialiased overflow-x-hidden relative bg-bright-grid">

      {/* 1. TELEMETRY STATUS BAR (BRIGHT WHITE & RED - RESPONSIVE) */}
      <div className="border-b border-red-100 bg-white/95 backdrop-blur-md text-slate-600 text-xs py-2 px-3 sm:px-8 relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2 sm:gap-4">

          {/* Status & Credential Pills */}
          <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] overflow-x-auto no-scrollbar py-0.5 whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-red-700 font-bold bg-red-50 px-2 sm:px-2.5 py-0.5 rounded-full border border-red-200 shrink-0">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-red-600 animate-ping" />
              STATUS: DISPATCH LIVE
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-700 font-semibold shrink-0">MC# 1368401</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-700 font-semibold shrink-0">USDOT 3801397</span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:inline text-red-600 font-medium bg-red-50/80 px-2 py-0.5 rounded border border-red-100 shrink-0">
              2 DEDICATED POWER UNITS ACTIVE
            </span>
          </div>

          {/* Social Channels */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <a
              href="https://www.instagram.com/cargokingsinc/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 sm:gap-1.5 text-slate-600 hover:text-red-600 transition group font-medium"
              title="Instagram @cargokingsinc"
            >
              <Instagram className="w-3.5 h-3.5 text-red-600 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-mono hidden md:inline">@cargokingsinc</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <a
              href="https://www.tiktok.com/@cargokingsinc"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 sm:gap-1.5 text-slate-600 hover:text-red-600 transition group font-medium"
              title="TikTok @cargokingsinc"
            >
              <svg className="w-3.5 h-3.5 fill-current text-red-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.27 1.76-.23.84-.16 1.78.28 2.54.49.88 1.44 1.47 2.45 1.57.94.13 1.93-.12 2.66-.75.69-.57 1.11-1.43 1.14-2.32.04-3.55.02-7.11.02-10.66V.02h.01z" />
              </svg>
              <span className="text-[11px] font-mono hidden md:inline">TikTok</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. COMMAND HEADER NAVIGATION */}
      <header className="border-b border-slate-100 bg-white/95 backdrop-blur-xl sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">

          {/* Brand Wordmark with Crown Accent */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center shadow-sm sm:shadow-md border border-slate-200 overflow-hidden group-hover:border-red-400 transition shrink-0">
              <img
                src="/image/ssstik.io_1788346269178.webp"
                alt="Cargo Kings Inc logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 block leading-none font-heading">
                CARGO <span className="text-red-600">KINGS INC</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase block mt-1">
                EXPEDITED FREIGHT POWER
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-slate-600 font-semibold">
            <a href="#hero" className="text-red-600 font-bold hover:text-red-700 transition flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              01 // 3D Fleet
            </a>
            <a href="#gallery" className="hover:text-red-600 transition">02 // Gallery</a>
            <a href="#specs" className="hover:text-red-600 transition">02 // Specs</a>
            <a href="#compliance" className="hover:text-red-600 transition">03 // TSA & TWIC</a>
            <a href="#booking" className="hover:text-red-600 transition">04 // Rapid Quote</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:9295037626"
              className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-red-md transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-3.5 h-3.5 text-white animate-bounce" />
              <span className="hidden xs:inline sm:inline">(929) 503-7626</span>
              <span className="xs:hidden">DISPATCH</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-red-200 hover:text-red-600 transition flex items-center justify-center min-w-[40px] min-h-[40px]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-2xl px-4 py-5 shadow-xl space-y-3">
            <div className="flex flex-col space-y-1.5 font-mono text-xs uppercase tracking-wider font-bold">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-red-50/70 text-red-700 border border-red-100"
              >
                <span className="flex items-center gap-2.5">
                  <Radio className="w-4 h-4 text-red-600" />
                  01 // 3D Fleet Visualizer
                </span>
                <ChevronRight className="w-4 h-4 text-red-400" />
              </a>
              <a
                href="#specs"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-slate-800 hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
              >
                <span className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-slate-500" />
                  02 // Fleet Specs & Pallet Jack
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-slate-800 hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
              >
                <span className="flex items-center gap-2.5">
                  <Camera className="w-4 h-4 text-slate-500" />
                  02 // Fleet Photo Gallery
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#compliance"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-slate-800 hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
              >
                <span className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-slate-500" />
                  03 // TSA & TWIC Port Clearance
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-slate-800 hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
              >
                <span className="flex items-center gap-2.5">
                  <Lock className="w-4 h-4 text-slate-500" />
                  04 // Rapid Rate Confirmation
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:9295037626"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-mono font-bold text-xs uppercase py-3.5 rounded-xl shadow-red-md"
              >
                <Phone className="w-4 h-4" />
                Direct Call: (929) 503-7626
              </a>
              <div className="flex justify-around items-center pt-2 font-mono text-[11px] text-slate-500">
                <a href="https://www.instagram.com/cargokingsinc/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-red-600 font-medium">
                  <Instagram className="w-3.5 h-3.5" />
                  @cargokingsinc
                </a>
                <span>•</span>
                <a href="https://www.tiktok.com/@cargokingsinc" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-red-600 font-medium">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SHOWCASE WITH 3D TELEMETRY (2-COLUMN SHOWCASE) */}
      <section id="hero" className="relative px-4 sm:px-8 max-w-7xl mx-auto pt-6 sm:pt-8 pb-12 sm:pb-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">

          {/* Left Column: Hero Information */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">

            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-sm max-w-full">
              <Radio className="w-3.5 h-3.5 text-red-600 animate-pulse shrink-0" />
              <span className="truncate">2 Dedicated Power Units Ready For Dispatch</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[0.98] uppercase font-heading">
              SUPREME<br />
              EXPEDITED<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-600">
                FREIGHT.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg">
              Engineered for high-security corridors and rapid regional freight. Dock-high box truck logistics equipped with onboard electric pallet jacks and verified TSA/TWIC operators.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1 sm:pt-2">
              <a
                href="#booking"
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xs font-mono uppercase tracking-widest px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl transition shadow-red-md flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[46px]"
              >
                <span>Lock In Dedicated Load</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="tel:9295037626"
                className="w-full sm:w-auto bg-white hover:bg-red-50/50 border border-slate-300 hover:border-red-300 text-slate-800 hover:text-red-600 font-mono font-semibold text-xs tracking-wider uppercase px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl transition shadow-sm flex items-center justify-center gap-2 min-h-[46px]"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" />
                <span>Direct Dispatch</span>
              </a>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-slate-200 font-mono">
              <div className="bg-slate-50 border border-slate-200 p-2.5 sm:p-3.5 rounded-xl">
                <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase block tracking-wider">Equipment</span>
                <span className="text-[11px] sm:text-xs font-bold text-slate-900 block mt-1 truncate">26ft Dock High</span>
              </div>
              <div className="bg-red-50/70 border border-red-200/80 p-2.5 sm:p-3.5 rounded-xl">
                <span className="text-[9px] sm:text-[10px] text-red-700 font-bold uppercase block tracking-wider">Pallet Jack</span>
                <span className="text-[11px] sm:text-xs font-bold text-red-600 block mt-1 truncate">Electric Unit</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-2.5 sm:p-3.5 rounded-xl">
                <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase block tracking-wider">Clearance</span>
                <span className="text-[11px] sm:text-xs font-bold text-slate-900 block mt-1 truncate">TSA & TWIC</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dedicated 3D Interactive Viewer Card */}
          <div className="lg:col-span-6 mt-2 lg:mt-0">
            <div className="bg-gradient-to-b from-white to-red-50/20 border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-card overflow-hidden relative p-2 sm:p-2.5">

              {/* Card Header with Status & Hints */}
              <div className="flex items-center justify-between px-3 sm:px-4 pt-2.5 sm:pt-3 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-[11px] text-slate-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
                  <span>3D FLEET</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-red-600">INTERACTIVE 360°</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[9px] sm:text-[10px] text-slate-500">
                  <Activity className="w-3 h-3 text-red-500 shrink-0" />
                  <span className="hidden xs:inline">DRAG TO ROTATE • PINCH TO ZOOM</span>
                  <span className="xs:hidden">360° ROTATE</span>
                </div>
              </div>

              {/* 3D Canvas Box */}
              <div className="w-full h-[290px] xs:h-[340px] sm:h-[420px] lg:h-[470px] relative bg-gradient-to-b from-slate-50/60 to-white rounded-xl sm:rounded-2xl overflow-hidden">
                <CargoKingsCanvas activePreset={activePreset} />
              </div>

              {/* 3D Angle Selector Pills */}
              <div className="p-2 sm:p-3 bg-white border-t border-slate-100">
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-1.5 sm:gap-2 font-mono text-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase mr-1 hidden md:inline">Camera View:</span>

                  <button
                    type="button"
                    onClick={() => setActivePreset('default')}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 min-h-[40px] ${activePreset === 'default'
                        ? 'bg-red-600 text-white shadow-red-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-red-50 hover:text-red-600'
                      }`}
                  >
                    <Compass className="w-3.5 h-3.5 shrink-0" />
                    <span>3/4 View</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActivePreset('side')}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 min-h-[40px] ${activePreset === 'side'
                        ? 'bg-red-600 text-white shadow-red-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-red-50 hover:text-red-600'
                      }`}
                  >
                    <Layers className="w-3.5 h-3.5 shrink-0" />
                    <span>Cargo Side</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActivePreset('rear')}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 min-h-[40px] ${activePreset === 'rear'
                        ? 'bg-red-600 text-white shadow-red-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-red-50 hover:text-red-600'
                      }`}
                  >
                    <Truck className="w-3.5 h-3.5 shrink-0" />
                    <span>Rear Liftgate</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActivePreset('front')}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 min-h-[40px] ${activePreset === 'front'
                        ? 'bg-red-600 text-white shadow-red-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-red-50 hover:text-red-600'
                      }`}
                  >
                    <Gauge className="w-3.5 h-3.5 shrink-0" />
                    <span>Front Cab</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* 4. REAL FLEET & EQUIPMENT GALLERY */}
      <section id="gallery" className="border-y border-slate-200 bg-white text-slate-900 bg-bright-grid py-14 sm:py-20 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8 sm:mb-10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-600 flex items-center gap-2">
                <Camera className="w-4 h-4" />
                CARGO KINGS INC. / FIELD GALLERY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 font-heading text-slate-950">
                Equipment you can put to work.
              </h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md">
              A closer look at the dedicated straight-box fleet, liftgate access, and onboard handling equipment behind every dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
            <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 min-h-[360px] sm:min-h-[530px] group shadow-card">
              <img
                src={activeGalleryItem.image}
                alt={`${activeGalleryItem.title} for Cargo Kings Inc`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/10" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-red-600 text-white px-3 py-1.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider">
                  {String(activeGalleryIndex + 1).padStart(2, '0')} / {String(fleetGallery.length).padStart(2, '0')}
                </span>
                <span className="bg-white/90 border border-white px-3 py-1.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700">
                  Verified fleet photo
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 flex items-end justify-between gap-4">
                <div>
                  <p className="text-red-300 text-[10px] font-mono uppercase tracking-widest font-bold mb-1">{activeGalleryItem.label}</p>
                  <h3 className="text-2xl sm:text-4xl font-black font-heading text-white">{activeGalleryItem.title}</h3>
                  <p className="text-slate-200 text-xs sm:text-sm mt-1">{activeGalleryItem.detail}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveGalleryIndex((activeGalleryIndex + 1) % fleetGallery.length)}
                  className="shrink-0 w-11 h-11 rounded-full bg-white text-slate-950 flex items-center justify-center hover:bg-red-500 hover:text-white transition"
                  aria-label="Show next fleet photo"
                  title="Next fleet photo"
                >
                  <ChevronLeft className="w-5 h-5 rotate-180" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="border border-slate-200 bg-white rounded-2xl p-5 sm:p-6 shadow-card">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-600">Inspection index</span>
                  <Maximize2 className="w-4 h-4 text-red-600" />
                </div>
                <div className="grid grid-cols-3 gap-2 max-h-[270px] overflow-y-auto pr-1">
                  {fleetGallery.map((item, index) => (
                    <button
                      type="button"
                      key={item.image}
                      onClick={() => setActiveGalleryIndex(index)}
                      className={`relative aspect-square overflow-hidden rounded-lg border-2 transition ${activeGalleryIndex === index ? 'border-red-600' : 'border-slate-200 hover:border-red-300'}`}
                      aria-label={`View ${item.title}`}
                      title={item.title}
                    >
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                      <span className="absolute bottom-1 left-1 text-[9px] font-mono font-bold bg-slate-950/80 text-white px-1.5 py-0.5 rounded">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="border border-red-200 bg-red-50/70 rounded-2xl p-5 sm:p-6 flex-1 shadow-card">
                <span className="text-[10px] text-red-700 font-mono uppercase tracking-widest font-bold">Dispatch-ready standard</span>
                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <div className="flex justify-between gap-3 border-b border-red-200 pb-3"><span>Power units</span><strong className="text-slate-950">02 active</strong></div>
                  <div className="flex justify-between gap-3 border-b border-red-200 pb-3"><span>Body type</span><strong className="text-slate-950">26ft box</strong></div>
                  <div className="flex justify-between gap-3"><span>Load assist</span><strong className="text-slate-950">Electric jack</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FLEET CAPABILITIES & SECURITY DIAGNOSTICS */}
      <section id="specs" className="border-t border-slate-200 bg-slate-50/60 py-12 sm:py-20 px-4 sm:px-8 relative">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                Fleet Specifications & Hardware
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950 mt-2 font-heading">
                Heavy-Duty Expedited Capabilities
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
              Managed under principal authority by <strong className="text-slate-900">Gaika Headley</strong>, delivering zero-failure ground transport across ports, airports, and commercial freight hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">

            {/* Feature 1 */}
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl sm:rounded-3xl relative group hover:border-red-400 transition-all duration-300 shadow-card hover:shadow-red-sm">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 mb-5 sm:mb-6 group-hover:scale-105 transition-transform">
                <Truck className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-heading">26ft Dock-High Straight Box</h3>
                <span className="text-[10px] font-mono font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">2 UNITS</span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                2 Dedicated Power Units optimized for commercial dock height loading bays, high-cube pallet volume, and expedited interstate corridors.
              </p>
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-mono font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>GVW 26,000 LBS • Full Dock Fit</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl sm:rounded-3xl relative group hover:border-red-400 transition-all duration-300 shadow-card hover:shadow-red-sm">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 mb-5 sm:mb-6 group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-heading">Onboard Electric Pallet Jack</h3>
                <span className="text-[10px] font-mono font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">POWERED</span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Powered electric pallet jack coupled with heavy-duty liftgates for rapid ground-level unload and load operations without dock availability.
              </p>
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-mono font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Hydraulic Liftgate & Ground Level</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl sm:rounded-3xl relative group hover:border-red-400 transition-all duration-300 shadow-card hover:shadow-red-sm">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 mb-5 sm:mb-6 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-heading">TSA & TWIC Clearance</h3>
                <span className="text-[10px] font-mono font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">CERTIFIED</span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                TSA Change 10 Certificate & TWIC card authorized operators for direct access into maritime port terminals, airport ramps, and high-security freight docks.
              </p>
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-mono font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Port & Airport Ramp Access</span>
              </div>
            </div>

          </div>

          {/* Technical Specs Breakdown */}
          <div className="mt-8 sm:mt-12 bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-card">
            <h4 className="text-sm sm:text-base font-bold font-heading text-slate-950 mb-4 sm:mb-6 flex items-center gap-2">
              <FileCheck className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              Verified Fleet & Operations Metrics
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 font-mono">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold block">Gross Weight</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block mt-1">26,000 LBS</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold block">Box Length</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block mt-1">26ft Length</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold block">Lift Equipment</span>
                <span className="text-xs sm:text-sm font-bold text-red-600 block mt-1">Electric Jack</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold block">Security Status</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block mt-1">TSA + TWIC</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold block">FMCSA Authority</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block mt-1">MC# 1368401</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold block">USDOT Number</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block mt-1">DOT# 3801397</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. DIRECT DISPATCH & RATE CONFIRMATION TERMINAL */}
      <section id="booking" className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto relative">
        <div className="bg-gradient-to-br from-white via-white to-red-50/50 border border-red-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-14 shadow-card relative overflow-hidden">

          {/* Ambient Red Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                Fast Rate Confirmations
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight font-heading">
                Direct Carrier Rate Terminal
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                Book immediate capacity with Cargo Kings Inc. We respond to brokers and enterprise shippers with live ETA quotes and vehicle availability.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200 flex items-center gap-3 sm:gap-4 hover:border-red-400 transition shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block">Direct Line & 24/7 Dispatch</span>
                    <a href="tel:9295037626" className="text-sm sm:text-lg font-bold text-slate-900 hover:text-red-600 transition font-mono">
                      (929) 503-7626
                    </a>
                  </div>
                </div>

                <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200 flex items-center gap-3 sm:gap-4 hover:border-red-400 transition shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block">Inquiries & Rate Cons</span>
                    <div className="flex flex-col sm:flex-row sm:gap-4 mt-0.5">
                      <a href="mailto:info@cargokingsinc.com" className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-red-600 transition font-mono truncate">
                        info@cargokingsinc.com
                      </a>
                      <a href="mailto:cargokings718@gmail.com" className="text-[11px] sm:text-xs font-mono text-slate-500 hover:text-red-600 transition truncate">
                        cargokings718@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Rate Request Form */}
            <div className="lg:col-span-6 bg-white border border-slate-200 p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-card relative">
              <div className="flex items-center justify-between mb-4 sm:mb-5 pb-3 border-b border-slate-100">
                <h3 className="text-sm sm:text-lg font-bold font-mono text-slate-900 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-red-600" />
                  Request Rate Confirmation
                </h3>
                <span className="text-[10px] font-mono font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200 uppercase">
                  24/7 Response
                </span>
              </div>

              {formSubmitted ? (
                <div className="py-8 sm:py-12 px-4 text-center space-y-3 bg-red-50 border border-red-200 rounded-2xl">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto shadow-red-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-950 font-mono uppercase">Rate Request Transmitted</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Our direct dispatch has received your corridor specifications. A dispatcher will follow up with an immediate rate confirmation.
                  </p>
                  <span className="text-[11px] font-mono font-bold text-red-600 block pt-2">
                    For urgent immediate load: Call (929) 503-7626
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-700 uppercase block mb-1">Pickup Zip / Metro</label>
                      <input
                        type="text"
                        required
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder="e.g. 11430 (JFK Airport)"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:bg-white focus:ring-1 focus:ring-red-600 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-700 uppercase block mb-1">Dropoff Zip / City</label>
                      <input
                        type="text"
                        required
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        placeholder="e.g. 07114 (Newark Port)"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:bg-white focus:ring-1 focus:ring-red-600 outline-none transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-700 uppercase block mb-1">Pallet Count, Weight & Liftgate Need</label>
                    <input
                      type="text"
                      required
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="e.g. 12 Pallets / 10,000 lbs / Liftgate + Electric Pallet Jack"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:bg-white focus:ring-1 focus:ring-red-600 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-700 uppercase block mb-1">Shipper / Broker Contact (Email or Phone)</label>
                    <input
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="e.g. dispatch@freightbroker.com or (555) 000-0000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:bg-white focus:ring-1 focus:ring-red-600 outline-none transition"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold font-mono text-xs uppercase tracking-wider py-3.5 sm:py-4 rounded-xl transition shadow-red-md flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[46px]"
                  >
                    <span>Submit Rate Inquiry</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 6. ENTERPRISE FOOTER */}
      <footer id="compliance" className="border-t border-slate-200 bg-slate-50 text-slate-600 pt-12 sm:pt-16 pb-24 lg:pb-12 px-4 sm:px-8 font-mono text-xs">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-200">

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-base font-black tracking-tight text-slate-950 block font-heading">
                  CARGO KINGS INC.
                </span>
              </div>
              <p className="text-slate-500 leading-relaxed text-[11px]">
                Authorized motor carrier delivering expedited dock-high freight, heavy-duty liftgate handling, and certified port access.
              </p>
              <div className="flex gap-2 pt-1 flex-wrap">
                <span className="bg-red-50 border border-red-200 text-red-700 font-bold px-2.5 py-1 rounded text-[10px]">
                  MC# 1368401
                </span>
                <span className="bg-white border border-slate-200 text-slate-700 font-semibold px-2.5 py-1 rounded text-[10px]">
                  DOT# 3801397
                </span>
              </div>
            </div>

            <div className="space-y-2 text-[11px]">
              <span className="font-bold text-slate-950 uppercase block">Fleet & Capacity</span>
              <p className="text-slate-600">• 2 Dedicated Power Units</p>
              <p className="text-slate-600">• 26ft Straight Box (Dock High)</p>
              <p className="text-slate-600">• Electric Pallet Jack Onboard</p>
              <p className="text-slate-600">• Hydraulic Maxon Liftgates</p>
            </div>

            <div className="space-y-2 text-[11px]">
              <span className="font-bold text-slate-950 uppercase block">Security & Clearance</span>
              <p className="text-slate-600">• TSA Certified (Change 10)</p>
              <p className="text-slate-600">• TWIC Card Port Clearance</p>
              <p className="text-slate-600">• Maritime & Airport Escort</p>
              <p className="text-slate-600">• Active FMCSA Authority</p>
            </div>

            <div className="space-y-2 text-[11px]">
              <span className="font-bold text-slate-950 uppercase block">Leadership & Social</span>
              <p className="text-slate-900 font-semibold">Owner: Gaika Headley</p>
              <p className="text-slate-600">Direct: (929) 503-7626</p>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://www.instagram.com/cargokingsinc/" target="_blank" rel="noreferrer" className="text-red-600 hover:text-red-700 font-medium transition flex items-center gap-1">
                  <Instagram className="w-3.5 h-3.5" />
                  Instagram
                </a>
                <a href="https://www.tiktok.com/@cargokingsinc" target="_blank" rel="noreferrer" className="text-red-600 hover:text-red-700 font-medium transition flex items-center gap-1">
                  TikTok
                </a>
              </div>
            </div>

          </div>

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-slate-500 text-[11px] text-center sm:text-left">
            <p>© {new Date().getFullYear()} Cargo Kings Inc. All rights reserved.</p>
            <p>DOT# 3801397 • MC# 1368401 • Principal: Gaika Headley</p>
          </div>
        </div>
      </footer>

      {/* 7. STICKY MOBILE BOTTOM BAR (HIGH-CONVERSION CALL & RAPID QUOTE) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 px-3 py-2.5 shadow-lg pb-safe">
        <div className="max-w-md mx-auto flex items-center gap-2">
          <a
            href="tel:9295037626"
            className="flex-1 bg-gradient-to-r from-red-600 to-red-700 active:from-red-700 active:to-red-800 text-white font-mono font-bold text-xs uppercase tracking-wider py-3 px-3 rounded-xl shadow-red-sm flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 animate-bounce" />
            <span>Direct Dispatch</span>
          </a>
          <a
            href="#booking"
            className="flex-1 bg-slate-900 active:bg-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider py-3 px-3 rounded-xl flex items-center justify-center gap-1"
          >
            <span>Rapid Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-red-400" />
          </a>
        </div>
      </div>

    </div>
  );
}
