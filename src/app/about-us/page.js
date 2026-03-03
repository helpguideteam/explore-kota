"use client";

import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      {/* Hero – Exact same structure & classes as home page */}
      <div className="relative lg:h-[100vh] h-[94vh] bg-[url('/garh-palace-kota-rajasthan-1.jpg')] bg-cover bg-center overflow-hidden">
        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white/90 animate-fadeUpSlow">
            About Us
          </h1>

          <span className="mt-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/70 animate-fadeUpDelayed">
            Discovering the Soul of Kota
          </span>
        </div>

        {/* Scroll Indicator – identical */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-[1px] border border-white/20 shadow-lg hover:scale-110 transition-all duration-300"
          >
            <svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7 7m0 0l7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content – same container style */}
      <div className="mx-auto px-5 md:px-20 max-w-7xl py-16 md:py-24">
        {/* 1. Welcome / Our Story */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <span className="inline-block px-6 py-2 bg-orange-100 text-orange-700 font-bold uppercase tracking-wider rounded-full border border-orange-200 mb-6">
            Our Story
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8">
            We Bring <span className="text-orange-500">Kota Closer</span> to You
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
            We are a passionate team from Kota & Jaipur who love exploring and sharing the real beauty of our city — beyond the usual tourist spots. 
            From the calm ghats of Chambal Riverfront, ancient temples with divine energy, historic palaces whispering royal stories, to peaceful parks and hidden nature escapes — 
            we visit every place ourselves to bring you honest, detailed and heartfelt guides.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our goal is simple: help you experience Kota like a local — at your own pace, with love for its heritage, spirituality, nature and calm vibes.
          </p>
        </div>

        {/* 2. Our Journey – Timeline Cards (horizontal scroll on mobile) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-orange-100 text-orange-700 font-bold uppercase tracking-wider rounded-full border border-orange-200 mb-4">
              Our Journey
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              From Local Walks to Your Trusted Guide
            </h3>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 md:grid md:grid-cols-4 md:overflow-visible scrollbar-hide">
            {[
              { year: "2018", text: "Started exploring hidden corners of Kota on weekends – Chambal walks, old temples, forgotten ghats." },
              { year: "2021", text: "Began sharing real photos and honest tips on social media – people loved the local perspective." },
              { year: "2023", text: "Launched this guide with detailed listings, geo locations, durations and best times – all from real visits." },
              { year: "2026", text: "Now helping thousands discover Kota's true soul – heritage, spirituality, nature and calm." },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative min-w-[260px] md:min-w-0 bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
              >
                <div className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                  {item.year}
                </div>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Why Choose Us – Premium Cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-24">
          <div className="group relative bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">🗺️</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Real Exploration
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Every location is personally visited, photographed and reviewed. We share timings, best season, duration and practical tips.
            </p>
          </div>

          <div className="group relative bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">❤️</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Love for Kota
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Born and raised around Chambal, we celebrate the city’s heritage, spirituality, nature and calm — not just as tourists, but as locals.
            </p>
          </div>

          <div className="group relative bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">📸</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Beautiful & Honest
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              High-quality real photos, clear descriptions, useful filters and no fake reviews — everything to help you plan a meaningful trip.
            </p>
          </div>
        </div>

        {/* 4. What We Offer – Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-orange-100 text-orange-700 font-bold uppercase tracking-wider rounded-full border border-orange-200 mb-4">
              What We Offer
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your Complete Kota Companion
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Detailed Guides", desc: "Best time, duration, geo location, highlights and real photos for every place." },
              { title: "Smart Filters", desc: "Search by tags, distance from city center, family-friendly or spiritual focus." },
              { title: "Local Insights", desc: "Tips only locals know – best aarti times, quiet spots, monsoon magic." },
              { title: "Inspiration & Stories", desc: "Festival calendars, photogenic spots, hidden gems and seasonal vibes." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-orange-600 mb-3">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Call to Action Banner – Gradient + subtle bg image */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-200/50 p-10 md:p-16 text-center mb-20">
          <div className="absolute inset-0 bg-[url('/chambal-riverfront-kota-rajasthan-2.jpg')] bg-cover opacity-10" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Explore Kota?
            </h3>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Dive into handpicked places — riverfront evenings, ancient temples, royal heritage, peaceful parks and hidden gems.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/places"
                className="inline-block px-10 py-4 rounded-full bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-700 hover:scale-105 transition-all duration-300"
              >
                Browse All Places
              </Link>

              <Link
                href="/temple-and-spiritual-places-kota"
                className="inline-block px-10 py-4 rounded-full bg-white border-2 border-orange-600 text-orange-700 font-semibold hover:bg-orange-50 hover:scale-105 transition-all duration-300"
              >
                Spiritual Places →
              </Link>
            </div>
          </div>
        </div>

        {/* 6. Meet the Creator – Personal section */}
        <div className="mb-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Meet the Creator
          </h3>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-gray-100 shadow-lg">
              <div className="w-32 h-32 rounded-full bg-orange-100 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                {/* You can replace with real photo later */}
                <span className="text-5xl">🧑‍💻</span>
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Madhusudan
              </h4>

              <p className="text-lg text-gray-700 mb-6">
                A Jaipur-based explorer with deep roots in Rajasthan. I started this guide to share the Kota I love – its calm evenings by the Chambal, powerful temples, royal heritage and quiet nature spots. Every word and photo here comes from real visits and genuine passion.
              </p>

              <p className="text-gray-600 italic">
                "Kota isn't just a city – it's a feeling of peace, history and spirituality. Let's discover it together."
              </p>
            </div>
          </div>
        </div>

        {/* 7. Final Promise */}
        <div className="text-center">
          <span className="inline-block px-6 py-2 bg-orange-100 text-orange-700 font-bold uppercase tracking-wider rounded-full border border-orange-200 mb-6">
            Our Promise
          </span>

          <p className="text-xl md:text-2xl text-gray-800 font-medium max-w-4xl mx-auto leading-relaxed">
            We don’t just list places — we share stories, vibes, and memories of Kota with the same love and care we have for our own city.
          </p>
        </div>
      </div>
    </>
  );
}