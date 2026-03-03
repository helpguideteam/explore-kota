"use client";

import dynamic from 'next/dynamic';
import kotaPlaces from '@/data/posts.json';
import bundiPlaces from '@/data/bundi.json';
// import baranPlaces from '@/data/baran.json';
// import jhalawarPlaces from '@/data/jhalawar.json';

// const allPlaces = [...kotaPlaces, ...bundiPlaces , ...baranPlaces, ...jhalawarPlaces];
const allPlaces = [...kotaPlaces];

const placesWithGeo = allPlaces.filter(
  (place) =>
    place.geo?.lat &&
    place.geo?.lng &&
    !isNaN(place.geo.lat) &&
    !isNaN(place.geo.lng)
);

const DynamicMap = dynamic(() => import('@/components/map'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[60vh] md:h-[70vh] bg-gray-100 rounded-3xl">
      <p className="text-lg font-medium text-gray-600">Loading interactive map...</p>
    </div>
  ),
});

export default function HadotiRegion() {
  const center = [25.2138, 75.9630];
  const zoom = 10;

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
        <div className="relative lg:h-[100vh] h-[94vh] bg-[url('/bundi/bundi-1.webp')] bg-cover bg-center overflow-hidden">

        {/* Soft dark overlay (very light) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white/90 animate-fadeUpSlow">Hadoti Region</h1>

          <span className="mt-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/60 animate-fadeUpDelayed">
            Kota • Bundi • Baran • Jhalawar
          </span>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-[1px] border border-white/20 shadow-lg hover:scale-110 transition-all duration-300">
            <svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7 7m0 0l7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* About Hadoti */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-orange-50/40 via-white to-amber-50/30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/20 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-600 font-bold tracking-[0.35em] uppercase text-sm mb-6 block">
                Discover Hadoti
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                The Hidden Heart <br />
                <span className="text-orange-500">of Rajasthan</span>
              </h2>
            </div>

            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Hadoti — the culturally rich southeastern corner of Rajasthan — unites Kota, Bundi, Baran, and Jhalawar. 
                This lesser-traveled region offers majestic forts, intricate stepwells (baoris), ancient temples, 
                vibrant miniature paintings, and pristine nature along the Chambal River and Mukundra Hills.
              </p>
              <p>
                Far from the crowded tourist trails, Hadoti delivers authentic Rajasthani heritage, wildlife safaris, 
                and serene landscapes — perfect for travellers seeking depth and discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-10 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Interactive Journey
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Explore Kota <span className="text-orange-500">on the Map</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Discover {placesWithGeo.length} heritage sites, forts, temples & natural wonders — zoom, click, plan your route
            </p>
          </div>

          <div className="h-[60vh] md:h-[70vh] lg:h-[85vh] rounded-3xl overflow-hidden shadow-2xl shadow-yellow-900">
            <DynamicMap
              places={placesWithGeo}
              center={center}
              zoom={zoom}
              height="100%"
            />
          </div>
        </div>
      </section>
      
    </main>
  );
}