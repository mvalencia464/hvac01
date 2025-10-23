import { useState } from 'react';
import {
  Home as HomeIcon, // Renamed Home to HomeIcon to avoid conflict
  Wrench,
  Droplet,
  Zap,
  MapPin,
  ChevronLeft
} from 'lucide-react';

const genericInfo = {
  companyName: "Stoke HVAC",
  phone: "5091234567",
  cityRegion: "Metro City",
  establishedYear: "1998",
};

// Define a type for the page names
type PageName = 'services' | 'serviceDetail' | 'locations' | 'locationDetail';

// --- HEADER COMPONENT ---
function Header({ onNav }: { onNav: (page: PageName) => void }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
            <HomeIcon className="text-white w-6 h-6" /> {/* Using HomeIcon */}
          </div>
          <h1 className="text-xl font-bold text-blue-900">{genericInfo.companyName}</h1>
        </div>
        <nav className="hidden md:flex space-x-6 font-semibold text-gray-700">
          <button onClick={() => onNav('services')} className="hover:text-blue-700">Services</button>
          <button onClick={() => onNav('locations')} className="hover:text-blue-700">Locations</button>
          <a href="#" className="hover:text-blue-700">Contact</a>
        </nav>
      </div>
    </header>
  );
}

// --- FOOTER COMPONENT ---
function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} {genericInfo.companyName}. All rights reserved.
      </div>
    </footer>
  );
}

// --- SERVICES PAGE ---
function ServicesPage({ onSelectService }: { onSelectService: (id: string) => void }) {
  const services = [
    { id: 'hvac', name: 'Heating & Cooling', icon: Wrench, description: 'AC repair, furnace maintenance, indoor air quality.' },
    { id: 'plumbing', name: 'Plumbing & Drains', icon: Droplet, description: 'Leak repair, water heaters, drain cleaning.' },
    { id: 'electrical', name: 'Electrical', icon: Zap, description: 'Panel upgrades, lighting, generators.' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition" onClick={() => onSelectService(service.id)}>
            <service.icon className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

// --- SERVICE DETAIL PAGE ---
function ServiceDetail({ serviceId, onBack }: { serviceId: string; onBack: () => void }) {
  const serviceDetails: Record<string, {
    name: string;
    description: string;
    features: string[];
  }> = {
    hvac: {
      name: 'Heating & Cooling',
      description: 'We provide expert AC repair, furnace maintenance, and indoor air quality solutions to keep your home comfortable year-round.',
      features: ['AC Repair & Installation', 'Furnace Maintenance', 'Indoor Air Quality'],
    },
    plumbing: {
      name: 'Plumbing & Drains',
      description: 'Our licensed plumbers handle leak detection, water heater services, and drain cleaning with fast, reliable service.',
      features: ['Leak Detection & Repair', 'Water Heater Services', 'Drain Cleaning'],
    },
    electrical: {
      name: 'Electrical',
      description: 'From panel upgrades to lighting installation and generator services, our electricians keep your home powered safely.',
      features: ['Panel Upgrades', 'Lighting Installation', 'Generator Services'],
    },
  };

  const service = serviceDetails[serviceId];

  if (!service) return <p className="p-4">Service not found.</p>;

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <button onClick={onBack} className="mb-6 flex items-center text-blue-700 hover:underline">
        <ChevronLeft className="w-5 h-5 mr-1" /> Back to Services
      </button>
      <h2 className="text-4xl font-bold mb-4 text-blue-900">{service.name}</h2>
      <p className="mb-6 text-gray-700">{service.description}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        {service.features.map((feat, i) => <li key={i}>{feat}</li>)}
      </ul>
    </main>
  );
}

// --- LOCATIONS PAGE ---
function LocationsPage({ onSelectLocation }: { onSelectLocation: (id: string) => void }) {
  const locations = [
    { id: 'metro', name: 'Metro City', phone: genericInfo.phone, address: '123 Service Lane, Metro City, ST 12345' },
    { id: 'suburb', name: 'Suburbia', phone: genericInfo.phone, address: '456 Suburb St, Suburbia, ST 67890' },
    { id: 'uptown', name: 'Uptown', phone: genericInfo.phone, address: '789 Uptown Ave, Uptown, ST 11223' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Our Service Areas</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {locations.map(loc => (
          <div key={loc.id} className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition" onClick={() => onSelectLocation(loc.id)}>
            <MapPin className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{loc.name}</h3>
            <p className="text-gray-600">{loc.address}</p>
            <p className="text-gray-600 font-semibold mt-2">Phone: {loc.phone}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

// --- LOCATION DETAIL PAGE ---
function LocationDetail({ locationId, onBack }: { locationId: string; onBack: () => void }) {
  const locationDetails: Record<string, {
    name: string;
    phone: string;
    address: string;
    description: string;
    hours: string;
  }> = {
    metro: {
      name: 'Metro City',
      phone: genericInfo.phone,
      address: '123 Service Lane, Metro City, ST 12345',
      description: 'Serving the heart of Metro City with fast, reliable home services.',
      hours: 'Mon-Fri: 7am-8pm, Sat-Sun: 8am-5pm',
    },
    suburb: {
      name: 'Suburbia',
      phone: genericInfo.phone,
      address: '456 Suburb St, Suburbia, ST 67890',
      description: 'Covering all of Suburbia with expert HVAC, plumbing, and electrical services.',
      hours: 'Mon-Fri: 8am-6pm, Sat: 9am-4pm',
    },
    uptown: {
      name: 'Uptown',
      phone: genericInfo.phone,
      address: '789 Uptown Ave, Uptown, ST 11223',
      description: 'Trusted by Uptown residents for quality home service solutions.',
      hours: 'Mon-Fri: 7am-7pm, Sat-Sun: Closed',
    },
  };

  const location = locationDetails[locationId];

  if (!location) return <p className="p-4">Location not found.</p>;

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <button onClick={onBack} className="mb-6 flex items-center text-blue-700 hover:underline">
        <ChevronLeft className="w-5 h-5 mr-1" /> Back to Locations
      </button>
      <h2 className="text-4xl font-bold mb-4 text-blue-900">{location.name}</h2>
      <p className="mb-2 text-gray-700 font-semibold">Address:</p>
      <p className="mb-6 text-gray-600">{location.address}</p>
      <p className="mb-2 text-gray-700 font-semibold">Phone:</p>
      <a href={`tel:${location.phone}`} className="text-blue-700 hover:underline mb-6 block"> {location.phone} </a>
      <p className="mb-6 text-gray-700">{location.description}</p>
      <p className="text-gray-700 font-semibold">Hours:</p>
      <p className="text-gray-600">{location.hours}</p>
    </main>
  );
}

// --- MAIN APP COMPONENT ---
export default function Home() {
  const [page, setPage] = useState<PageName>('services'); // 'services' | 'serviceDetail' | 'locations' | 'locationDetail'
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelectService = (id: string) => {
    setSelectedId(id);
    setPage('serviceDetail');
  };

  const handleSelectLocation = (id: string) => {
    setSelectedId(id);
    setPage('locationDetail');
  };

  const handleBack = () => {
    if (page === 'serviceDetail') setPage('services');
    else if (page === 'locationDetail') setPage('locations');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onNav={setPage} />

      {page === 'services' && <ServicesPage onSelectService={handleSelectService} />}
      {page === 'serviceDetail' && selectedId && <ServiceDetail serviceId={selectedId} onBack={handleBack} />}
      {page === 'locations' && <LocationsPage onSelectLocation={handleSelectLocation} />}
      {page === 'locationDetail' && selectedId && <LocationDetail locationId={selectedId} onBack={handleBack} />}

      <Footer />
    </div>
  );
}