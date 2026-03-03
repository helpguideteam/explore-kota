"use client";
import baranPlaces from '@/data/baran.json';

export default function Baran() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* Hero */}
      <div className="relative lg:h-[100vh] h-[94vh] bg-[url('/baran/shergarh-fort-baran-rajasthan.jpg')] bg-cover bg-center overflow-hidden">

        {/* Soft dark overlay (very light) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white/90 animate-fadeUpSlow">  Discover Baran</h1>

          <span className="mt-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/60 animate-fadeUpDelayed">
            Hidden Gem of Hadoti
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

      {/* Introduction */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-orange-50/20 to-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-10 md:mb-14 tracking-tight">
            Welcome to <span className="text-orange-600">Baran</span>
          </h2>

          <div className="space-y-6 md:space-y-8 text-center max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
              Baran is a peaceful and culturally rich district in the Hadoti region of Rajasthan.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
              It is renowned for its magnificent <strong>ancient temples</strong> built in the Khajuraho style, historic forts, abundant wildlife sanctuaries, rare geological wonders like meteorite craters, and vibrant tribal fairs of the Sahariya community.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
              Far less touristy than Kota or Bundi, Baran offers an authentic, soulful experience of Rajasthan — where centuries-old history, untouched nature, spirituality, and tribal traditions blend together seamlessly.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Wildlife & Natural Wonders
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-orange-700">Shergarh Wildlife Sanctuary</h4>
            <p className="text-gray-700 mb-4">
              Home to leopards, sloth bears, chinkara, hyena, and over 150 bird species. Best visited in winter.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Ideal for jungle safari and bird watching</li>
              <li>• Ancient rock shelters with prehistoric paintings</li>
              <li>• Scenic lakes and forested hills</li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-4 text-orange-700">Ramgarh Vishdhari Tiger Reserve (part)</h4>
            <p className="text-gray-700 mb-4">
              Emerging tiger corridor connecting Ranthambore and Mukundra Hills. Rich biodiversity.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Potential tiger sightings in future</li>
              <li>• Sahariya tribal villages nearby</li>
              <li>• Great for nature photography</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Famous Festivals in Baran
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Dol Mela */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
              <img
                src="/baran/dol-mela-baran-rajasthan-1.webp"
                alt="Dol Mela at Dol Talab, Baran – grand Shobha Yatra and communal harmony"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 bg-orange-600/90 text-white text-sm md:text-base font-semibold px-5 py-2 rounded-full shadow-md">
                Dol Mela
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                Dol Mela
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Organized at Dol Talab in Baran city from Jaljhulni Ekadashi. Features grand Shobha Yatra with 54 Dev Viman from major temples. A beautiful symbol of communal harmony. Visitors from Madhya Pradesh and nearby regions attend in large numbers.
              </p>
            </div>
          </div>

          {/* Sitabari Mela */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
              <img
                src="/baran/sitabari-mela-baran-rajasthan-2.jpg"
                alt="Sitabari Mela – grand tribal fair of Sahariya community in Baran"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 bg-orange-600/90 text-white text-sm md:text-base font-semibold px-5 py-2 rounded-full shadow-md">
                Sitabari Mela
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                Sitabari Mela
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Held at Sitabari on Jyeshtha Amavasya (~45 km from Baran). A major tribal fair considered the Kumbh of Sahariya tribes. Lakhs of people attend. Features animal trading, holy dips in kunds, and vibrant cultural celebrations.
              </p>
            </div>
          </div>
        </div>

        {/* Optional note at bottom */}
        <p className="text-center text-gray-600 mt-12 text-lg font-medium">
          These festivals showcase Baran’s rich cultural harmony and tribal traditions — a must-experience for visitors.
        </p>
      </section>

      <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-orange-50/20 to-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 md:mb-16">
            How to Reach <span className="text-orange-600">Baran</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* By Air */}
            <div className="group relative bg-white/80 backdrop-blur-lg border border-gray-100/70 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:shadow-orange-200/30 transition-all duration-500 hover:-translate-y-2">
              <div className="pt-2 text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  By Air
                </h4>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Nearest airport: <strong>Kota Airport</strong> (~80 km) or <strong>Jaipur</strong> (~280 km).
                  Taxis, cabs, and buses are readily available from both airports.
                </p>
              </div>
            </div>

            {/* By Train */}
            <div className="group relative bg-white/80 backdrop-blur-lg border border-gray-100/70 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:shadow-orange-200/30 transition-all duration-500 hover:-translate-y-2">
              <div className="pt-2 text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  By Train
                </h4>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  <strong>Baran Railway Station</strong> is well-connected with major cities.
                  Frequent trains from <strong>Kota</strong> (1–2 hours), Jaipur, Delhi, Mumbai, and beyond.
                </p>
              </div>
            </div>

            {/* By Road */}
            <div className="group relative bg-white/80 backdrop-blur-lg border border-gray-100/70 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:shadow-orange-200/30 transition-all duration-500 hover:-translate-y-2">
              <div className="pt-2 text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  By Road
                </h4>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Regular RSRTC buses from <strong>Kota</strong> (1.5–2 hours), Bundi, and Jhalawar.
                  Self-drive via <strong>NH-27</strong> offers scenic views of the Hadoti region.
                </p>
              </div>
            </div>
          </div>

          {/* Helpful note at bottom */}
          <p className="text-center text-gray-600 mt-12 md:mt-16 text-lg md:text-xl font-medium">
            Most travelers use <strong>Kota</strong> as the convenient base — just 1–2 hours away.
          </p>
        </div>
      </section>



      <section className="max-w-7xl mx-auto px-6 py-10 md:py-10 bg-white/40">
              <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Must-Visit Places in  <span className="font-bold text-orange-500">Baran</span>
              </h3>
      
              <div className="space-y-16 md:space-y-24 hidden md:block">
                {baranPlaces.map((place, index) => {
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
                {baranPlaces.map((place, index) => {
      
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

      {/* Best Time to Visit */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Best Time to Visit Baran
        </h3>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="text-5xl mb-6">🌞</div>
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">October – March</h4>
            <p className="text-gray-700">
              Pleasant weather (15–28°C). Ideal for forts, temples, wildlife, and outdoor exploration. Peak season — comfortable days, cool nights.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="text-5xl mb-6">🌧️</div>
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">July – September</h4>
            <p className="text-gray-700">
              Monsoon season. Lush greenery, flowing waterfalls (Kapil Dhara), and scenic beauty. Best for nature lovers, but some roads may be slippery.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="text-5xl mb-6">☀️</div>
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">April – June</h4>
            <p className="text-gray-700">
              Hot summer (35–45°C). Good for budget travel and early morning visits to forts/temples. Avoid midday heat.
            </p>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-12 text-lg">
          Most visitors prefer <strong>October to March</strong> — comfortable weather, festivals, and perfect for exploring Baran’s heritage and nature.
        </p>
      </section>

    </main>
  );
}