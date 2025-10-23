import React, { useState } from 'react';
import {
  Phone,
  Menu,
  X,
  Star,
  ChevronRight,
  Clock,
  ShieldCheck,
  Wrench,
  Droplet,
  Zap,
  Percent,
  CreditCard,
  Award,
  MapPin,
  Calendar
} from 'lucide-react';

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const genericInfo = {
    companyName: "[Generic Company Name]",
    phone: "[XXX-XXX-XXXX]",
    cityRegion: "[City/Region]",
    establishedYear: "[Year]",
    rating: "[X.X]",
    reviewCount: "[X,XXX]+",
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      {/* --- TOP UTILITY BAR --- */}
      <div className="bg-slate-900 text-slate-300 text-xs md:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-red-500" />
            <span className="font-medium text-white">
              After Hour Emergency Service Available
            </span>
          </div>
          <div className="flex space-x-6">
            {['About Us', 'Service Areas', 'Contact Us'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white transition-colors hidden sm:block"
              >
                {item}
              </a>
            ))}
            <a href="#" className="hover:text-white transition-colors">
              Search
            </a>
          </div>
        </div>
      </div>

      {/* --- MAIN HEADER --- */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
              <Wrench className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold leading-none text-blue-900">
                {genericInfo.companyName}
              </h1>
              <p className="text-xs text-gray-500 uppercase tracking-wider hidden md:block">
                Home Services Specialists
              </p>
            </div>
          </div>

          {/* Desktop Main Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-medium text-gray-700">
            <a href="#" className="flex items-center space-x-1 text-red-600 hover:text-red-700">
              <Percent className="w-4 h-4" />
              <span>Discounts</span>
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">HVAC</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Plumbing</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Electrical</a>
          </nav>

          {/* CTA Area */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-500 font-medium">24/7 Service</span>
              <a href="tel:" className="flex items-center space-x-2 text-xl font-bold text-gray-900">
                <Phone className="w-5 h-5 text-blue-700 fill-current" />
                <span>{genericInfo.phone}</span>
              </a>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors shadow-sm flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Schedule Online</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-4 pb-6 space-y-4 shadow-xl absolute w-full left-0">
            <div className="grid grid-cols-2 gap-2">
              <a href="#" className="flex flex-col items-center justify-center p-4 bg-red-50 rounded-lg text-red-700 font-medium">
                <Percent className="w-6 h-6 mb-2" />
                Discounts
              </a>
              <a href="#" className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg text-blue-700 font-medium">
                <Wrench className="w-6 h-6 mb-2" />
                HVAC
              </a>
              <a href="#" className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg text-blue-700 font-medium">
                <Droplet className="w-6 h-6 mb-2" />
                Plumbing
              </a>
              <a href="#" className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg text-blue-700 font-medium">
                <Zap className="w-6 h-6 mb-2" />
                Electrical
              </a>
            </div>
            <hr />
            <div className="space-y-3">
              <a href="#" className="block text-lg font-medium text-gray-800">Financing</a>
              <a href="#" className="block text-lg font-medium text-gray-800">Service Club Membership</a>
              <a href="#" className="block text-lg font-medium text-gray-800">About Us</a>
            </div>
            <button className="w-full bg-red-600 text-white font-bold py-4 rounded-md flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call {genericInfo.phone}</span>
            </button>
          </div>
        )}
      </header>

      {/* --- TRUST BANNER --- */}
      <div className="bg-blue-50 border-b border-blue-100 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm md:text-base text-blue-900">
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="font-bold">{genericInfo.rating}/5</span>
          </div>
          <span className="hidden sm:inline text-blue-300">|</span>
          <p>Based on <strong>{genericInfo.reviewCount}</strong> customer reviews</p>
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <main className="flex-grow relative">
        {/* Generic Background Placeholder */}
        <div className="absolute inset-0 bg-gray-200">
          <div className="w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" />
           {/* Use a pattern to make it look less plain if no image */}
           <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-900/10 bg-opacity-60 backdrop-blur-sm text-blue-900 font-semibold px-4 py-2 rounded-full text-sm border border-blue-900/20">
              <ShieldCheck className="w-5 h-5" />
              <span>Fully Insured & Licensed Specialists</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Servicing <span className="text-blue-700">{genericInfo.cityRegion}</span> Residents Since {genericInfo.establishedYear}
              </h2>
              <p className="text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
                The area's most trusted HVAC, Plumbing & Electrical specialists. We get it done right the first time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-md transition-transform active:scale-95 flex items-center justify-center space-x-2 shadow-lg shadow-blue-900/20">
                <span>See Our Discounts</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2 text-gray-700 font-medium">
                <Award className="w-6 h-6 text-blue-700" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 relative z-10 lg:ml-auto lg:max-w-md w-full">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Your Service</h3>
              <p className="text-gray-600 text-sm">
                Online requests are processed <span className="font-semibold">Mon-Fri: 7am-8pm</span> and <span className="font-semibold">Sat-Sun: 8am-5pm</span>.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  What do you need help with?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'hvac', label: 'HVAC Service', icon: Wrench },
                    { id: 'plumbing', label: 'Plumbing', icon: Droplet },
                    { id: 'drain', label: 'Drain Service', icon: Droplet },
                    { id: 'club', label: 'Membership', icon: Award },
                  ].map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedService(service.id)}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${selectedService === service.id ? 'border-blue-600 bg-blue-50 text-blue-800' : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-600'}`}
                    >
                      <service.icon className={`w-6 h-6 mb-1 ${selectedService === service.id ? 'text-blue-600' : 'text-gray-400'}`} />
                      <span className="text-sm font-medium leading-tight">{service.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Generic Inputs to complete the 'Form' look */}
              <div className="space-y-4 pt-2">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input type="text" id="name" placeholder="Full Name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Phone Number" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md transition-colors shadow-md text-lg">
                  Submit Request
                </button>
                <p className="text-xs text-center text-gray-500">
                  For emergencies, please call us directly at <a href="tel:" className="underline font-semibold hover:text-red-600">{genericInfo.phone}</a>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Decorative bottom curve or transition could go here */}
        <div className="h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </main>

      {/* --- SIMPLE FOOTER PREVIEW --- */}
      <footer className="bg-white py-8 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-600">
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-lg">{genericInfo.companyName}</h4>
            <p className="mb-4">{genericInfo.cityRegion}'s trusted home service experts since {genericInfo.establishedYear}.</p>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>Serving [Region] & Surrounding Areas</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-700">Air Conditioning</a></li>
              <li><a href="#" className="hover:text-blue-700">Heating / Furnace</a></li>
              <li><a href="#" className="hover:text-blue-700">Plumbing Repair</a></li>
              <li><a href="#" className="hover:text-blue-700">Electrical Panels</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-700">Special Offers</a></li>
              <li><a href="#" className="hover:text-blue-700">Financing Options</a></li>
              <li><a href="#" className="hover:text-blue-700">Maintenance Plan</a></li>
              <li><a href="#" className="hover:text-blue-700">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <p className="text-2xl font-bold text-blue-900 mb-2">{genericInfo.phone}</p>
            <button className="text-red-600 font-semibold hover:underline">Schedule Service Now &rarr;</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
