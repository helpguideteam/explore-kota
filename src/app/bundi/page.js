"use client";
import Link from "next/link";
import bundiPlaces from '@/data/bundi.json';
const featuredPlaces = [
  { id: 1, title: "Taragarh Fort", slug: "taragarh-fort", image1: "bundi/tara-garh-fort-bundi-rajasthan.avif", tags: ["Fort", "Panoramic Views"] },
  { id: 2, title: "Garh Palace", slug: "garh-palace", image1: "bundi/bundi-5.webp", tags: ["Palace", "Murals"] },
  { id: 3, title: "Raniji Ki Baori", slug: "raniji-ki-baori", image1: "/bundi/raniji-ki-baori-queen-stepwell-bundi.jpg", tags: ["Stepwell", "Architecture"] },
  { id: 4, title: "Sukh Mahal", slug: "sukh-mahal", image1: "bundi/Sukh-Niwas-Mahal-bundi-rajasthan.jpg", tags: ["Palace", "Lake View"] },
  { id: 5, title: "84 Pillared Cenotaph", slug: "84-pillared-cenotaph", image1: "/bundi/84-pillared-cenotaph-bundi-rajasthan.jpg", tags: ["Cenotaph", "Carvings"] },
  { id: 6, title: "Nawal Sagar Lake", slug: "nawal-sagar-lake", image1: "bundi/nawal-sagar-bundi-rajasthan.jpg", tags: ["Lake", "Temple"] },
];
export default function Bundi() {

  return (
    <main className="min-h-screen bg-gray-50/50">

      <div className="relative lg:h-[100vh] h-[94vh] bg-[url('/bundi/bundi-1.webp')] bg-cover bg-center overflow-hidden">

        {/* Soft dark overlay (very light) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white/90 animate-fadeUpSlow">Bundi Region</h1>

          <span className="mt-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/60 animate-fadeUpDelayed">
            Choti kashi
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


      {/* must visit in bundi */}
      <section className="w-full py-10 md:py-20 bg-white/40">
        <div className="mx-auto px-5 md:px-20">

          {/* Heading */}
          <div className="mb-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Must Visit in<span className="text-orange-500"> Bundi</span>
            </h2>

            <p className="text-gray-600">
              Handpicked places that define Bundi from ancient stepwells and majestic forts to serene lakes and royal palaces.
            </p>
          </div>

          {/* Cards */}
          <div className="
      flex gap-6 overflow-x-auto pb-6
      md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible
      scrollbar-hide">

            {featuredPlaces.map((place) => (
              <div
                key={place.id}
                // Change this path if your route is different
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
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="relative w-full py-10 md:py-32 bg-black/10 overflow-hidden mx-auto px-5 md:px-20">
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
                <span className="font-bold text-orange-500"> Experience Bundi</span>
              </h2>
            </div>
            <div className="pb-2">
              <p className="text-lg text-gray-500 leading-relaxed border-l-2 border-orange-200 pl-6">
                Whether you're exploring ancient stepwells or panoramic fort views, timing defines your journey through this timeless town.
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
                  <span className="text-orange-600 font-semibold">Peak Season.</span> Ideal for exploring forts, palaces, and stepwells in pleasant weather.
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
                  <span className="text-blue-600 font-semibold">Nature's Best.</span> Lush greenery surrounds lakes and stepwells; dramatic monsoon views at Taragarh Fort.
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
                  <span className="text-amber-600 font-semibold">Budget Days.</span> Hot days; best for early morning or evening visits to lakes and shaded palaces.
                </p>
              </div>
              <div className="mt-8 pt-8 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-amber-500 transition-colors">35°C - 45°C</span>
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              </div>
            </div>

          </div>


        </div>
      </section>

      <section className="w-full py-10 md:py-20 bg-white mx-auto px-5 md:px-20">
        <div className="">

          {/* Section Header */}
          <div className="mb-16">
            <span className="text-orange-600 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Cultural Calendar
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              Famous <span className="text-orange-500">Festivals of Bundi</span>
            </h2>
          </div>

          {/* Festivals Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">

            {/* 1. Bundi Utsav - Text Focused */}
            <div className="relative p-10 rounded-3xl bg-black/10 border border-orange-100 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">November</span>
                <h3 className="text-3xl font-bold text-gray-900">Bundi Utsav</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A vibrant cultural festival showcasing Rajasthan's heritage with processions, folk music, dance, arts & crafts fairs, and traditional performances.
              </p>
              <div className="pt-4">
                <div className="flex gap-4">
                  <span className="text-xs font-black uppercase tracking-tighter text-orange-500">3 Day Celebration</span>
                </div>
              </div>
            </div>

            {/* 2. Kajli Teej - Image Focused */}
            <div className="group relative h-[450px] lg:h-auto rounded-3xl overflow-hidden shadow-lg">
              <img
                src="bundi/kajli-teej-bundi-rajasthan.jpg"
                alt="Kajli Teej in Bundi"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-2 block">July - August</span>
                <h3 className="text-2xl font-bold text-white mb-2">Kajli Teej</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Women pray for marital bliss; grand processions and fairs celebrate the monsoon with devotion to Goddess Teej.
                </p>
              </div>
            </div>

            {/* 3. Gangaur - Image Focused */}
            <div className="group relative h-[450px] lg:h-auto rounded-3xl overflow-hidden shadow-lg">
              <img
                src="bundi/gangaur-festival-in-bundi-rajasthan.jpg"
                alt="Gangaur Festival Bundi"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-2 block">March - April</span>
                <h3 className="text-2xl font-bold text-white mb-2">Gangaur</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Vibrant processions honoring Goddess Gauri, celebrating spring, harvest, and marital harmony.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative w-full py-10 md:py-32 bg-white overflow-hidden mx-auto px-5 md:px-20">
        <div className="">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Content: Text & Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="inline-block px-4 py-1 text-xs font-bold tracking-[0.3em] uppercase text-orange-600 bg-orange-50 border-l-4 border-orange-500 mb-6">
                  Cultural Landmark
                </span>
                <h2 className="text-4xl md:text-6xl font-extralight text-gray-900 leading-tight">
                  Timeless Charm of <br />
                  <span className="font-bold text-orange-500">Bundi's Heritage</span>
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Bundi, nestled in the Aravalli hills, is famed for its forts, intricate murals, stepwells, and palaces. Often called a "hidden gem," it offers a glimpse into Rajasthan's royal past with stunning architecture and serene lakes.
              </p>

              <div className="flex flex-wrap gap-12 pt-8">
                <div className="relative">
                  <h4 className="text-4xl font-light text-gray-900 leading-none">
                    1350<span className="text-orange-500 font-bold ml-1">AD</span>
                  </h4>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Taragarh Fort Established
                  </p>
                </div>

                {/* Elegant Vertical Divider */}
                <div className="w-[1px] h-12 bg-gray-200 hidden sm:block"></div>

                <div className="relative">
                  <h4 className="text-4xl font-light text-gray-900 leading-none">
                    50+<span className="text-orange-500 font-bold ml-1"></span>
                  </h4>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Ancient Stepwells
                  </p>
                </div>
              </div>

            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="bundi/tara-garh-fort-bundi-rajasthan.avif"
                  alt="Taragarh Fort Bundi"
                  className="w-full h-[260px] sm:h-[350px] md:h-[450px] lg:h-[520px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 md:py-10 bg-white/40">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Must-Visit Places in  <span className="font-bold text-orange-500">Bundi</span>
        </h3>

        <div className="space-y-16 md:space-y-24 hidden md:block">
          {bundiPlaces.map((place, index) => {
            const isEven = index % 2 === 0;

            return isEven ? (
              <div
                key={place.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Image first on mobile & when isEven; text first when odd on desktop */}
                <div
                  className={` overflow-hidden rounded-xl shadow-2xl`}
                >
                  <img
                    src={place.image1}
                    alt={place.title}
                    className="w-full h-auto object-cover aspect-[4/3] md:aspect-auto"
                    loading="lazy"
                  />
                </div>

                <div
                  className={` px-4 md:px-8 py-4 md:py-0`}
                >
                  <h4 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">
                    {place.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {place.content}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={place.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Image first on mobile & when isEven; text first when odd on desktop */}


                <div
                  className={`px-4 md:px-8 py-4 md:py-0`}
                >
                  <h4 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">
                    {place.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {place.content}
                  </p>
                </div>

                <div
                  className={` overflow-hidden rounded-xl shadow-2xl`}
                >
                  <img
                    src={place.image1}
                    alt={place.title}
                    className="w-full h-auto object-cover aspect-[4/3] md:aspect-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className='space-y-16 md:space-y-24 md:hidden '>
          {bundiPlaces.map((place, index) => {

            return (
              <div
                key={place.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 "
              >
                {/* Image first on mobile & when isEven; text first when odd on desktop */}
                <div
                  className={` overflow-hidden rounded-xl shadow-2xl`}
                >
                  <img
                    src={place.image1}
                    alt={place.title}
                    className="w-full h-auto object-cover aspect-[4/3] md:aspect-auto"
                    loading="lazy"
                  />
                </div>
                <div
                  className={` `}
                >
                  <h4 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">
                    {place.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {place.content}
                  </p>
                </div>


              </div>
            )
          })}
        </div>
      </section>

    </main>
  );
}