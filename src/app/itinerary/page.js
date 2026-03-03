"use client";

import { useState, useMemo, useRef } from "react";
import dynamic from 'next/dynamic';
import posts from "@/data/posts.json";

const DynamicMap = dynamic(() => import('@/components/map'), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center">Loading Map...</div>
});

// Fast straight-line distance
function getDistanceKm(lat1, lon1, lat2, lon2) {
  if (!lat1 || !lon1 || !lat2 || !lon2) return 0;
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) ** 2;
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

const DEFAULT_CENTER = [25.16809, 75.85167];
const DISTANCE_OPTIONS = [
  { label: "All", value: "all" },
  { label: "≤ 1 km", value: "1" },
  { label: "≤ 5 km", value: "5" },
  { label: "≤ 10 km", value: "10" },
  { label: "≤ 20 km", value: "20" },
  { label: "> 20 km", value: "more" }
];

export default function WhereToGo() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [itinerary, setItinerary] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState('');
  const [distanceFilter, setDistanceFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState('near');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const resultsRef = useRef(null);

  const currentCenter = userLocation ? [userLocation.lat, userLocation.lng] : DEFAULT_CENTER;
  const categories = ["nature", "wildlife", "temple", "historical", "tourist", "family", "photography", "water"];

  // Memoized filtering for performance
  const filteredPlaces = useMemo(() => {
    return posts.filter(place => {
      if (!place.geo?.lat || !place.geo?.lng) return false;

      const distanceKm = getDistanceKm(currentCenter[0], currentCenter[1], place.geo.lat, place.geo.lng);

      let distanceMatch = true;
      if (distanceFilter !== "all") {
        const maxKm = Number(distanceFilter);
        distanceMatch = distanceFilter === "more" ? distanceKm > 20 : distanceKm <= maxKm;
      }
      if (!distanceMatch) return false;

      if (selectedCategories.length === 0) return true;

      const placeTags = [
        ...(place.tag?.toLowerCase().split(' • ') || []),
        ...(place.tags?.map(t => t.toLowerCase()) || [])
      ].filter(Boolean);

      return selectedCategories.some(cat => {
        const lowerCat = cat.toLowerCase();
        return placeTags.some(tag => tag.includes(lowerCat) || lowerCat.includes(tag));
      });
    });
  }, [currentCenter, distanceFilter, selectedCategories]);

  const sortedPlaces = useMemo(() => {
    return [...filteredPlaces].sort((a, b) => {
      const distA = getDistanceKm(currentCenter[0], currentCenter[1], a.geo.lat, a.geo.lng);
      const distB = getDistanceKm(currentCenter[0], currentCenter[1], b.geo.lat, b.geo.lng);
      return sortOrder === 'near' ? distA - distB : distB - distA;
    });
  }, [filteredPlaces, sortOrder, currentCenter]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
    setItinerary([]);
  };

  const togglePlace = (place) => {
    setSelectedPlaces(prev =>
      prev.some(p => p.slug === place.slug) ? prev.filter(p => p.slug !== place.slug) : [...prev, place]
    );
    setItinerary([]);
  };

  const generateItinerary = () => {
    setIsGenerating(true);
    if (selectedPlaces.length === 0) {
      setIsGenerating(false);
      return;
    }

    const dist = (p1, p2) => getDistanceKm(p1.geo.lat, p1.geo.lng, p2.geo.lat, p2.geo.lng);

    // 1. Greedy Start
    let remaining = [...selectedPlaces];
    let ordered = [];
    let currentPos = { geo: { lat: currentCenter[0], lng: currentCenter[1] } };

    while (remaining.length > 0) {
      let closestIdx = 0;
      let minDist = dist(currentPos, remaining[0]);
      for (let i = 1; i < remaining.length; i++) {
        const d = dist(currentPos, remaining[i]);
        if (d < minDist) {
          minDist = d;
          closestIdx = i;
        }
      }
      const nextPlace = remaining.splice(closestIdx, 1)[0];
      ordered.push(nextPlace);
      currentPos = nextPlace;
    }

    // 2. Optimization (2-opt)
    if (ordered.length > 2) {
      for (let iter = 0; iter < 50; iter++) { // Safety limit
        let improved = false;
        for (let i = 0; i < ordered.length - 1; i++) {
          for (let j = i + 1; j < ordered.length; j++) {
            const pA = i === 0 ? { geo: { lat: currentCenter[0], lng: currentCenter[1] } } : ordered[i - 1];
            const pB = ordered[i];
            const pC = ordered[j];
            const pD = ordered[j + 1] || null;

            const currentDist = dist(pA, pB) + (pD ? dist(pC, pD) : 0);
            const newDist = dist(pA, pC) + (pD ? dist(pB, pD) : 0);

            if (newDist < currentDist) {
              const sub = ordered.slice(i, j + 1).reverse();
              ordered.splice(i, j - i + 1, ...sub);
              improved = true;
            }
          }
        }
        if (!improved) break;
      }
    }

    // 3. Map Data with Leg Distances
    let totalKm = 0;
    const enhanced = ordered.map((place, idx) => {
      const fromPoint = idx === 0 ? { geo: { lat: currentCenter[0], lng: currentCenter[1] } } : ordered[idx - 1];
      const legKm = dist(fromPoint, place);
      totalKm += legKm;
      return {
        ...place,
        legDistance: `${legKm.toFixed(1)} km`,
        cumulativeDistance: `${totalKm.toFixed(1)} km total`
      };
    });

    setItinerary(enhanced);
    setIsGenerating(false);
    
    // Scroll to results
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getUserLocation = () => {
    setLocationStatus('loading');
    if (!navigator.geolocation) {
      setLocationStatus('Geolocation not supported');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLocationStatus('Location found!');
        setItinerary([]);
      },
      (err) => setLocationStatus('Access denied. Using default center.'),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">

        <div className="relative lg:h-[100vh] h-[94vh] bg-[url('/umed-bhawan-palace-kota-rajasthan-1.avif')] bg-cover bg-center overflow-hidden">

        {/* Soft dark overlay (very light) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white/90 animate-fadeUpSlow">Discover Kota</h1>

          <span className="mt-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/60 animate-fadeUpDelayed">
            Plan your perfect route
          </span>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-[1px] border border-white/20 shadow-lg hover:scale-110 transition-all duration-300">
            <svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7 7m0 0l7-7" />
            </svg>
          </button>
        </div> */}
      </div>

    

      {/* Control Panel */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10 mb-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Location Column */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-400 uppercase">Start Point</label>
            <button 
              onClick={getUserLocation}
              className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${userLocation ? 'bg-orange-50 text-orange-700 ring-1 ring-orange-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              <div className={`p-2 rounded-full ${userLocation ? 'bg-orange-500 text-white' : 'bg-white text-gray-400'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">{locationStatus.includes('found') ? 'My Location' : 'Near Kota Aerodrome'}</p>
                <p className="text-[10px] opacity-70">{locationStatus || 'Click to use GPS'}</p>
              </div>
            </button>
          </div>

          {/* Range Column */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-400 uppercase">Max Distance</label>
            <div className="flex flex-wrap gap-2">
              {DISTANCE_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setDistanceFilter(opt.value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${distanceFilter === opt.value ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interests Column */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-400 uppercase">Interests</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${selectedCategories.includes(cat) ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>




      {/* Grid of Places */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Recommended Places</h2>
            <p className="text-gray-500">{sortedPlaces.length} locations found</p>
          </div>
          <div className="flex bg-white p-1 rounded-xl shadow-sm border">
            {['near', 'far'].map(mode => (
              <button
                key={mode}
                onClick={() => setSortOrder(mode)}
                className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-all ${sortOrder === mode ? 'bg-orange-600 text-white' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                {mode === 'near' ? 'Nearest' : 'Furthest'}
              </button>
            ))}
          </div>
        </div>

        {sortedPlaces.length === 0 ? (
          <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">No places match your criteria. Try widening your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedPlaces.map(place => {
              const dist = getDistanceKm(currentCenter[0], currentCenter[1], place.geo.lat, place.geo.lng);
              const isSelected = selectedPlaces.some(p => p.slug === place.slug);
              return (
                <div
                  key={place.slug}
                  onClick={() => togglePlace(place)}
                  className={`group relative h-80 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border-4 ${isSelected ? 'border-orange-500 ring-4 ring-orange-100' : 'border-transparent hover:border-gray-200'}`}
                >
                  <img src={place.image1 || place.image || '/placeholder.jpg'} alt={place.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 p-5 w-full">
                    <h4 className="text-xl font-bold text-white mb-1">{place.title}</h4>
                    <div className="flex items-center gap-2 text-white/70 text-xs">
                      <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-md">{dist.toFixed(1)} km away</span>
                      <span>•</span>
                      <span>{place.duration || '1 hr'}</span>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white p-2 rounded-full shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Floating Action Bar */}
      {selectedPlaces.length > 0 && (
        <div className="fixed bottom-8 inset-x-0 z-50 flex justify-center px-4">
          <div className="bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-2xl p-2 flex items-center gap-2">
            <button
              onClick={generateItinerary}
              disabled={isGenerating}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold transition-all disabled:opacity-50"
            >
              {isGenerating ? 'Optimizing...' : `Generate Route (${selectedPlaces.length})`}
            </button>
            <button
              onClick={() => { setSelectedPlaces([]); setItinerary([]); }}
              className="p-3 text-gray-400 hover:text-gray-600 transition-colors"
              title="Clear selection"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
          </div>
        </div>
      )}

      {/* Result Section */}
      <div ref={resultsRef}>
        {itinerary.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 py-20 bg-white rounded-t-[3rem] shadow-inner">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Optimized Journey</h2>
              <p className="text-gray-500 text-lg">
                Total distance: <span className="text-orange-600 font-bold">
                  {itinerary[itinerary.length - 1]?.cumulativeDistance}
                </span>
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="h-[600px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-100">
                <DynamicMap places={itinerary} height="100%" />
              </div>

              <div className="space-y-6">
                {itinerary.map((place, idx) => (
                  <div key={place.slug} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                        {idx + 1}
                      </div>
                      {idx !== itinerary.length - 1 && <div className="w-0.5 h-full bg-orange-100 my-2" />}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-gray-50 rounded-2xl p-5 hover:bg-orange-50 transition-colors border border-gray-100 group-hover:border-orange-200">
                        <h3 className="text-xl font-bold text-gray-900">{place.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{place.tag || 'Point of Interest'}</p>
                        <div className="flex items-center gap-4 text-xs font-bold text-orange-600">
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m-6 2l6-3" /></svg>
                            {place.legDistance} from prev
                          </span>
                          <span className="text-gray-300">|</span>
                          <span>{place.cumulativeDistance}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}