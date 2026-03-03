"use client";
import { useState, useEffect, useRef } from "react";
import posts from "@/data/posts.json";
import Link from "next/link";
import dynamic from 'next/dynamic';

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLon / 2) ** 2;
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

export default function Home() {
  const [tagFilter, setTagFilter] = useState("all");
  const [distanceFilter, setDistanceFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const suggestions = posts
    .filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    )
    .slice(0, 8);

  useEffect(() => {
    const handleClickOutside = (event) => {   // ← remove : MouseEvent
      if (searchRef.current && !searchRef.current.contains(event.target)) {   // ← remove as Node
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredPosts = posts.filter((post) => {
    const tagMatch = tagFilter === "all" || post.tags.includes(tagFilter);

    let distanceMatch = true;

    if (distanceFilter !== "all") {
      const currentLat = 25.16809;
      const currentLng = 75.85167;  // This is location of arodram where from loactions calculates

      const dist = getDistanceKm(
        currentLat,
        currentLng,
        post.geo.lat,
        post.geo.lng
      );

      distanceMatch = dist <= Number(distanceFilter);
    }

    return tagMatch && distanceMatch;
  });

  const featuredTitles = [
    "Chambal Riverfront",
    "Seven Wonders Park",
    "Oxyzone City Park",
    "Garadia Mahadev Temple",
    "Abheda Biological Park"
  ];

  const featuredPlaces = posts.filter(place =>
    featuredTitles.includes(place.title)
  );

  const DynamicMap = dynamic(() => import('@/components/map'), {
    ssr: false,
    loading: () => <p className="text-center py-10">Loading map...</p>,
  });

  const placesWithGeo = posts.filter(place => place.geo?.lat && place.geo?.lng);

  return (

    <>
      {/* hero */}
      <div className="relative lg:h-[100vh] h-[94vh] bg-[url('/oxyzen-city-park-kota-rajsthan-6.jpg')] bg-cover bg-center overflow-hidden">

        {/* Soft dark overlay (very light) */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white/90 animate-fadeUpSlow">Explore Kota</h1>

          <span className="mt-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/60 animate-fadeUpDelayed">
            Chambal • Heritage • Calm
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

      {/* <div className="max-w-3xl mx-auto px-5 -mt-16 z-20" ref={searchRef}>
        <div className="relative">
          <input
            type="text" value={searchQuery} onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search places in Kota (e.g. Chambal Riverfront, Garadia Mahadev...)"
            className="w-full px-6 py-4 pr-12 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/70 
                       shadow-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 
                       focus:ring-orange-400/60 focus:border-orange-400 transition-all duration-300"
          />
          <svg
            className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>


          {showSuggestions && searchQuery.trim().length > 1 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200/70 overflow-hidden z-50 max-h-96 overflow-y-auto">
              {suggestions.length > 0 ? (
                suggestions.map((post) => (
                  <Link
                    key={post.id}
                    href={`/places/${post.slug}`}
                    className="flex items-center gap-4 px-5 py-4 hover:bg-orange-50/70 transition-colors"
                    onClick={() => {
                      setSearchQuery("");
                      setShowSuggestions(false);
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={post.image1 || "/placeholder-kota.jpg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{post.title}</p>
                      <p className="text-xs text-gray-500">
                        {post.tags.slice(0, 3).join(" • ")}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="px-5 py-6 text-center text-gray-500">
                  No places found matching "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>
      </div> */}

      {/* must visit in kota */}
      <section className="w-full py-16 md:py-20 bg-white/40">
        <div className="mx-auto px-5 md:px-20">

          {/* Heading */}
          <div className="mb-10 max-w-2xl">

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Must Visit in<span className="text-orange-500"> Kota</span>
            </h2>

            <p className="text-gray-600">
              Handpicked places that define Kota from riverfront serenity
              to heritage landmarks and nature escapes.
            </p>
          </div>

          {/* Cards */}
          <div className="
  flex gap-6 overflow-x-auto pb-6
  md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible
  scrollbar-hide">

            {featuredPlaces.map((place) => (
              <Link
                key={place.id}
                href={`/places/${place.slug}`}  // Change this path if your route is different
                className="group relative min-w-[260px] md:min-w-0
        h-[360px] rounded-3xl overflow-hidden
        shadow-lg hover:shadow-2xl transition-all duration-500
        block"  // block makes the entire card clickable
              >
                {/* Image */}
                <img
                  src={place.image1}
                  alt={place.title}
                  className="absolute inset-0 w-full h-full object-cover
          transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t
        from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">
                    {place.title}
                  </h3>
                  <p className="text-sm text-white/80 capitalize">
                    {place.tags.slice(0, 2).join(" • ")}
                  </p>
                </div>

                {/* Hover CTA */}
                <div className="absolute top-4 right-4
        opacity-0 group-hover:opacity-100 transition">
                  <span className="px-3 py-1 text-xs rounded-full
          bg-white/60 text-black font-semibold shadow">
                    Explore
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <section className="relative w-full py-24 md:py-32 bg-black/10 overflow-hidden mx-auto px-5 md:px-20">
        {/* Sophisticated Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />

        <div className="">
          {/* Header - Editorial Style */}
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-20">
            <div>
              <span className="text-orange-600 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
                Seasonal Guide
              </span>
              <h2 className="text-5xl md:text-7xl  text-gray-900 leading-[1.1] font-bold">
                When to
                <span className="font-bold text-orange-500"> Experience Kota</span>
              </h2>
            </div>
            <div className="pb-2">
              <p className="text-lg text-gray-500 leading-relaxed border-l-2 border-orange-200 pl-6">
                Whether you're seeking the misty greens of the Chambal gorge or the
                golden hues of heritage palaces, timing defines your journey.
              </p>
            </div>
          </div>

          {/* Season Grid - Interactive Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Winter Card */}
            <div className="group relative bg-white/60 p-10 rounded-2xl border border-transparent hover:border-amber-100 hover:bg-white transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(245,158,11,0.1)]">
              <div className="mb-10 w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Oct - March</h3>
                <p className="text-gray-500 leading-relaxed">
                  <span className="text-orange-600 font-semibold">Peak Season.</span> Perfect for Chambal River Safaris and the historic Dussehra Mela. The air is crisp, and the sun is gentle.
                </p>
              </div>
              <div className="mt-8 pt-8  flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-orange-500 transition-colors">15°C - 28°C</span>
              </div>
            </div>

            {/* Monsoon Card */}
            <div className="group relative bg-white/60 p-10 rounded-2xl border border-transparent hover:border-amber-100 hover:bg-white transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(245,158,11,0.1)]">
              <div className="mb-10 w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">July - Sept</h3>
                <p className="text-gray-500 leading-relaxed">
                  <span className="text-blue-600 font-semibold">Nature's Best.</span> The landscape turns emerald. Best time to witness the dramatic views at <strong>Garadia Mahadev</strong>.
                </p>
              </div>
              <div className="mt-8 pt-8  flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-blue-500 transition-colors">Lush & Rainy</span>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              </div>
            </div>

            {/* Summer Card */}
            <div className="group relative bg-white/60 p-10 rounded-2xl border border-transparent hover:border-amber-100 hover:bg-white transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(245,158,11,0.1)]">
              <div className="mb-10 w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">April - June</h3>
                <p className="text-gray-500 leading-relaxed">
                  <span className="text-amber-600 font-semibold">Budget Days.</span> Hot afternoons are best spent exploring Seven Wonders Park in the breezy evenings near the lake.
                </p>
              </div>
              <div className="mt-8 pt-8 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-amber-500 transition-colors">35°C - 45°C</span>
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              </div>
            </div>

          </div>

          {/* Recommendation Bar */}
          <div className="mt-20 p-1 bg-gray-100/50 rounded-full max-w-2xl mx-auto">
            <div className="bg-white/80 rounded-full px-8 py-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 rounded-full bg-orange-500 animate-ping"></span>
                <p className="text-sm font-medium text-gray-800">Explore places
                  <span className="text-gray-300"></span> and generate your own<span className="text-orange-500"> route</span>
                </p>
              </div>
              <Link href="/itinerary" className="text-xs font-bold text-orange-600 uppercase tracking-tighter hover:tracking-widest transition-all">
                Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-24 bg-white mx-auto px-5 md:px-20">
        <div className="">

          {/* Section Header */}
          <div className="mb-16">
            <span className="text-orange-600 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Cultural Calendar
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              Famous <span className="text-orange-500">Festivals of Kota</span>
            </h2>
          </div>

          {/* Festivals Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">

            {/* 1. Dussehra - Text Focused */}
            <div className="relative p-10 rounded-3xl bg-black/10 border border-orange-100 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">October</span>
                <h3 className="text-3xl font-bold text-gray-900">Dussehra Mela</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The crown jewel of Kota's heritage. Since 1723, this 25-day carnival marks the victory of good over evil with India's tallest 75ft effigies and a massive rural fair that draws millions.
              </p>
              <div className="pt-4">
                <div className="flex gap-4">
                  <span className="text-xs font-black uppercase tracking-tighter text-orange-500">25 Day Celebration</span>
                </div>
              </div>
            </div>

            {/* 2. Ganesh Chaturthi - Image Focused */}
            <div className="group relative h-[450px] lg:h-auto rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/ganesh-chaturthi-kota-rajasthan-2.jpeg"
                alt="Ganesh Chaturthi in Kota"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-2 block">September</span>
                <h3 className="text-2xl font-bold text-white mb-2">Ganesh Chaturthi</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Witness grand processions as massive idols travel through the historic streets to the Chambal river.
                </p>
              </div>
            </div>

            {/* 3. Gangaur - Image Focused */}
            <div className="group relative h-[450px] lg:h-auto rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/ganguar-festival-kota-rajasthan-1.jpg"
                alt="Gangaur Festival Kota"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-2 block">March - April</span>
                <h3 className="text-2xl font-bold text-white mb-2">Gangaur</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  A celebration of spring and marital bliss, featuring vibrant processions of Goddess Gauri across the city.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative w-full py-10 bg-white overflow-hidden px-5 md:px-16 lg:px-20">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8">

              {/* <span className="inline-block px-4 py-1 text-xs font-bold tracking-[0.3em] uppercase text-orange-600 bg-orange-50 border-l-4 border-orange-500">
          Cultural Landmark
        </span> */}

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 leading-tight">
                India's Most Unique Celebration <br />
                <span className="font-bold text-orange-500">
                  Kota Dussehra
                </span>
              </h2>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                Dating back to 1723 AD, the Kota Dussehra Mela is not just a festival;
                it's a 25-day spectacle. While the world celebrates for a day, Kota
                transforms into a vibrant hub of trade, folk art, and spirituality.
              </p>

              {/* STATS */}
              <div className="flex items-center gap-8 pt-6">
                <div>
                  <h4 className="text-3xl md:text-4xl font-light text-gray-900 leading-none">
                    75<span className="text-orange-500 font-bold ml-1">feet</span>
                  </h4>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Height of Ravana
                  </p>
                </div>

                <div className="hidden sm:block w-[1px] h-10 bg-gray-200"></div>

                <div>
                  <h4 className="text-3xl md:text-4xl font-light text-gray-900 leading-none">
                    25<span className="text-orange-500 font-bold ml-1">day</span>
                  </h4>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Festival Duration
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/famous-dussehra-mela-kota-rajasthan.png"
                  alt="Kota Dussehra Celebration"
                  className="w-full h-[260px] sm:h-[350px] md:h-[450px] lg:h-[520px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-24 bg-white mx-auto px-5 md:px-20">
        <div className="">

          <div className="mb-16">
            <span className="text-orange-600 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Explore Kota By Theme
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              Discover the Best of <span className="text-orange-500">Kota</span>
            </h2>
          </div>

          {/* 3 Large Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Photogenic Places */}
            <Link
              href="/photogenic-places-kota"
              className="group relative h-80 md:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 focus:outline-none focus:ring-4 focus:ring-orange-400/40"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/photographic-places-kota-rajasthan.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg group-hover:text-orange-300 transition-colors">
                  Photogenic Places
                </h3>
                <p className="text-lg md:text-xl opacity-90 mb-6 drop-shadow-md">
                  Capture the most beautiful & Instagram-worthy spots in Kota
                </p>
                <div className="flex items-center gap-3 text-orange-300 font-medium text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span>Explore Collection</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card 2 - Tourist Places */}
            <Link
              href="/tourist-places-kota"
              className="group relative h-80 md:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 focus:outline-none focus:ring-4 focus:ring-orange-400/40"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/chambal-riverfront-kota-rajasthan-7.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg group-hover:text-orange-300 transition-colors">
                  Tourist Places
                </h3>
                <p className="text-lg md:text-xl opacity-90 mb-6 drop-shadow-md">
                  Most popular attractions every visitor should see
                </p>
                <div className="flex items-center gap-3 text-orange-300 font-medium text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span>Explore Collection</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card 3 - Temples */}
            <Link
              href="/temple-and-spiritual-places-kota"
              className="group relative h-80 md:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 focus:outline-none focus:ring-4 focus:ring-orange-400/40"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/godawari-dham-kota-rajasthan.jpeg')" }}
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg group-hover:text-orange-300 transition-colors">
                  Temples & Spiritual
                </h3>
                <p className="text-lg md:text-xl opacity-90 mb-6 drop-shadow-md">
                  Peaceful & sacred places of worship in Kota
                </p>
                <div className="flex items-center gap-3 text-orange-300 font-medium text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span>Explore Collection</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* plan your own trip */}
      <section className="w-full py-10 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-20">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">

              <span className="inline-block px-4 py-1 text-xs font-bold tracking-[0.3em]
          uppercase text-orange-600 bg-orange-50 border-l-4 border-orange-500">
                Trip Planner
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Plan Your
                <span className="text-orange-500"> Own Trip</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Whether you have a few hours or a full day, create a Kota itinerary
                that matches your interests culture, nature, food, or history.
                Explore at your own pace with smart suggestions.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-6">

                <Link
                  href="/itinerary"
                  className="px-8 py-4 rounded-full bg-orange-500 text-white
            font-semibold shadow-lg shadow-orange-500/30
            hover:bg-orange-600 hover:scale-105
            transition-all duration-300"
                >
                  Start Planning
                </Link>

                <Link
                  href="/map"
                  className="px-8 py-4 rounded-full bg-white
            border border-orange-200 text-orange-600
            font-semibold shadow-sm
            hover:bg-orange-50 hover:scale-105
            transition-all duration-300"
                >
                  View Kota Map
                </Link>

              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-6 relative">

              <div className="relative h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl">

                <img
                  src="/oxyzen-city-park-kota-rajsthan-2.jpg"
                  alt="Plan Your Kota Trip"
                  className="w-full h-full object-cover"
                />

                {/* Soft Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr
            from-black/30 via-transparent to-transparent" />

                {/* Floating Card */}
                <div className="absolute bottom-6 left-6
            bg-white/90 backdrop-blur-md
            rounded-2xl px-5 py-4 shadow-lg max-w-[220px]">

                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Suggested for you
                  </p>
                  <p className="text-xs text-gray-600">
                    6 places • 4 hours • Riverfront + Heritage
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <div className="bg-black/20">
        <main className="max-w-7xl mx-auto px-5 md:px-20 py-16 ">

          {/* Filters */}
          <div className="mb-10 md:mb-12 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 lg:gap-8">

            {/* <button onClick={() => setTagFilter("tourist")} className={`cursor-pointer  flex items-center gap-2 px-6 py-3 rounded-full ... ${tagFilter === "tourist" ? "bg-white text-orange-500" : "..."}`}>Tourist</button>

            <button onClick={() => setTagFilter("temple")} className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full ... ${tagFilter === "temple" ? "bg-white text-orange-500" : "..."}`}>Temples</button>

             <button onClick={() => setTagFilter("nature")} className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full ... ${tagFilter === "nature" ? "bg-white/80 text-orange-500" : "..."}`}>Nature</button> */}

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative w-full sm:w-72">

                <select
                  value={tagFilter}
                  onChange={(e) => setTagFilter(e.target.value)}
                  className="w-full appearance-none rounded-full px-6 py-3.5 pr-11
                   bg-white border border-gray-200/70 shadow-sm text-gray-800 font-medium text-base focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 hover:shadow-md hover:border-orange-300/70 transition-all duration-300 cursor-pointer">
                  <option value="all">All Experiences</option>
                  <option value="temple">Temples & Spiritual Sites</option>
                  <option value="tourist">Tourist Attractions</option>
                  <option value="nature">Nature & Parks</option>
                  <option value="family-friendly">Family Friendly</option>
                  <option value="heritage">Heritage & Historical</option>
                  <option value="historical">Historical Places</option>
                  <option value="photography-spot">Photography Spots</option>
                  <option value="leisure">Leisure & Relaxation</option>
                  <option value="cultural">Cultural Experiences</option>
                  <option value="park">Parks & Gardens</option>
                  <option value="boating">Boating & Water Activities</option>
                  <option value="picnic-spot">Picnic Spots</option>
                  <option value="off-the-beaten-path">Off the Beaten Path</option>
                  <option value="architecture">Architecture & Palaces</option>
                </select>

                {/* Custom dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                  <svg className="h-5 w-5 text-gray-500 transition-colors group-hover:text-orange-600"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative w-full sm:w-64">
                <select
                  value={distanceFilter}
                  onChange={(e) => setDistanceFilter(e.target.value)}
                  className="w-full appearance-none rounded-full px-6 py-3.5 pr-11
                   bg-white border border-gray-200/70 shadow-sm
                   text-gray-800 font-medium text-base
                   focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400
                   hover:shadow-md hover:border-orange-300/70
                   transition-all duration-300 cursor-pointer"
                >
                  <option value="all">Any Distance</option>
                  <option value="1">Within 1 km</option>
                  <option value="2">Within 2 km</option>
                  <option value="5">Within 5 km</option>
                  <option value="10">Within 10 km</option>
                  <option value="20">Within 20 km</option>
                </select>

                {/* Custom arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                  <svg className="h-5 w-5 text-gray-500 transition-colors group-hover:text-orange-600"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>


            </div>

            <div className="flex items-center justify-center lg:justify-end w-full lg:w-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/50 
                    border border-white rounded-full shadow-md text-base font-medium text-gray-800">
                <span className="text-orange-600 font-bold text-lg">{filteredPosts.length}</span>
                <span>Places found</span>
              </div>
            </div>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ">

            {filteredPosts.map((post) => {
              // Convert decimal hours to nice format
              const hours = Math.floor(post.duration);
              const minutes = Math.round((post.duration - hours) * 60);
              const timeDisplay = hours >= 1
                ? `${hours} hr${minutes > 0 ? ` ${minutes} min` : ''}`
                : `${minutes} min`;

              return (
                <Link
                  key={post.id}
                  href={`/places/${post.slug}`}
                  className="group block bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2" aria-label={`View details for ${post.title}`}>

                  {/* Image Container */}
                  <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-2xl md:rounded-3xl m-3 shadow-xl">
                    <img
                      src={post.image1 || "/placeholder-kota.jpg"}
                      alt={`Photo of ${post.title} in Kota`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110 " />

                    {/* Duration Badge – top right */}
                    <div className="absolute top-4 right-4 z-10 bg-white/85 backdrop-blur-md
                    text-gray-800 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-full
                    shadow-lg flex items-center gap-2">
                      <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {timeDisplay}
                    </div>

                    {/* Highlight Badge – bottom left (if exists) */}
                    {post.highlights?.[0] && (
                      <div className="absolute bottom-4 left-4 z-10 bg-white/20 text-white text-xs sm:text-sm
                      font-medium px-4 py-2 rounded-full shadow-lg">
                        {post.highlights[0]}
                      </div>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="p-5 sm:p-6 md:p-7 space-y-4">

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-orange-600
                   transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Short description */}
                    {/* <p className="text-sm sm:text-base text-gray-600 line-clamp-3 leading-relaxed">
                      {post.content}
                    </p> */}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-white text-orange-700
                     border border-orange-200/70 capitalize"
                        >
                          {tag}
                        </span>
                      ))}
                      {/* {post.tags.length > 5 && (
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-white text-gray-600">
                          +{post.tags.length - 5}
                        </span>
                      )} */}
                    </div>

                    {/* CTA row */}
                    <div className="flex items-center justify-between pt-2 text-sm">
                      {/* <span className="font-semibold text-orange-600 group-hover:text-orange-700 transition-colors flex items-center gap-1.5">
                        Explore
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span> */}

                      {post.best_time && (
                        <span className="text-gray-500">
                          Best : {post.best_time}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Empty State - make it prettier */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-24 bg-gray-50/50 rounded-2xl border border-gray-200">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">No places found</h3>
              <p className="mt-2 text-gray-600">
                Try adjusting your filters — maybe more time or different interests?
              </p>
            </div>
          )}
        </main>

      </div>
    </>
  );
}