"use client";
import jhalawarPlaces from '@/data/jhalawar.json';
export default function Hadoti() {

  return (
    <main className="min-h-screen bg-gray-50/50">

      <div className="relative lg:h-[100vh] h-[94vh] bg-[url('/jhalawar/garh-palace-jhalawar-rajasthan.jpg')] bg-cover bg-center overflow-hidden">

        {/* Soft dark overlay (very light) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white/90 animate-fadeUpSlow">Discover jhalawar</h1>

          <span className="mt-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/60 animate-fadeUpDelayed">
            The Purple City
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
            Welcome to <span className="text-orange-600">Jhalawar</span>
          </h2>

          <div className="space-y-6 md:space-y-8 text-center max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
              Jhalawar is a lush, fertile district in the Hadoti region of Rajasthan, famously known as the "rice bowl" and "orange city" of the state.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
              It is celebrated for its extensive <strong>orange orchards</strong>, the historic Gagron Fort (UNESCO World Heritage Site), ancient temples, beautiful waterfalls, and the vibrant culture of the Sahariya tribal community.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
              Less explored than Kota or Bundi, Jhalawar offers a peaceful, nature-rich, and culturally authentic experience of Rajasthan — where agriculture, history, spirituality, and natural beauty come together beautifully.
            </p>
          </div>
        </div>
      </section>

      {/* Wildlife & Natural Wonders */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Wildlife & Natural Wonders
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-orange-700">National Chambal Sanctuary (Jhalawar stretch)</h4>
            <p className="text-gray-700 mb-4">
              One of the finest places in India to see critically endangered Gharials, river dolphins, and hundreds of migratory birds along the Chambal River.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Popular for boat safaris and river cruises</li>
              <li>• Home to rare red-crowned roof turtles</li>
              <li>• Scenic gorges, sandbanks, and biodiversity</li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-4 text-orange-700">Gagron Fort & Waterfalls</h4>
            <p className="text-gray-700 mb-4">
              UNESCO World Heritage Site uniquely surrounded by water on three sides. Nearby waterfalls like Bhukhi and Kalisindh enhance the natural charm.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Historic fort with deep spiritual significance</li>
              <li>• Stunning monsoon landscapes</li>
              <li>• Perfect for heritage walks and photography</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Famous Festivals */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Famous Festivals in Jhalawar
        </h3>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Chandrabhaga Fair */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
              <img
                src="/jhalawar/chandrabhaga-mela-jhalawar-rajasthan-1.jpg" // Replace with your actual image
                alt="Chandrabhaga Fair, Jhalawar – one of the largest cattle fairs in Rajasthan"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 bg-orange-600/90 text-white text-sm md:text-base font-semibold px-5 py-2 rounded-full shadow-md">
                Chandrabhaga Fair
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                Chandrabhaga Fair
              </h4>
              <p className="text-gray-700 leading-relaxed">
                One of the largest cattle fairs in Rajasthan, held near Chandrabhaga River in Jhalrapatan. Attracts thousands for animal trading, religious rituals, folk performances, and cultural celebrations.
              </p>
            </div>
          </div>

          {/* Regional Fairs */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
              <img
                src="/jhalawar/The-National-Tribal-Festival-jhalawar-rajasthan.jpg" // Replace with your actual image
                alt="Vibrant regional fairs and tribal gatherings in Jhalawar"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 bg-orange-600/90 text-white text-sm md:text-base font-semibold px-5 py-2 rounded-full shadow-md">
                Hadoti Fairs
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                Regional Hadoti Fairs
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Jhalawar hosts numerous colorful fairs including temple melas, tribal gatherings, and agricultural festivals. Known for processions, folk music, dance, and strong community participation.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-12 text-lg font-medium">
          Jhalawar’s festivals are vibrant celebrations of culture, faith, and rural traditions — a true highlight for visitors.
        </p>
      </section>

      {/* Best Time to Visit */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Best Time to Visit Jhalawar
        </h3>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">October – March</h4>
            <p className="text-gray-700">
              Pleasant weather (15–28°C). Ideal for forts, temples, orange orchards, and wildlife. Peak season — comfortable and vibrant.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">July – September</h4>
            <p className="text-gray-700">
              Monsoon season. Lush orange groves, flowing rivers, and scenic beauty. Great for nature lovers, though some areas may be wet.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">April – June</h4>
            <p className="text-gray-700">
              Hot summer (35–45°C). Good for early morning visits and budget travel. Best for orange harvesting season.
            </p>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-12 text-lg">
          Most visitors prefer <strong>October to March</strong> — pleasant weather, blooming orchards, and perfect conditions for exploring Jhalawar’s heritage and nature.
        </p>
      </section>

      {/* How to Reach Jhalawar */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-orange-50/20 to-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 md:mb-16">
            How to Reach <span className="text-orange-600">Jhalawar</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="group relative bg-white/80 backdrop-blur-lg border border-gray-100/70 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:shadow-orange-200/30 transition-all duration-500 hover:-translate-y-2">
              <div className="pt-2 text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  By Air
                </h4>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Nearest airport: <strong>Kota Airport</strong> (~90 km) or <strong>Jaipur</strong> (~300 km). Taxis and buses available.
                </p>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-lg border border-gray-100/70 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:shadow-orange-200/30 transition-all duration-500 hover:-translate-y-2">
              <div className="pt-2 text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  By Train
                </h4>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Jhalawar Road and Jhalawar City Railway Stations connect to Kota (2–3 hr), Jaipur, Delhi, and Mumbai.
                </p>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-lg border border-gray-100/70 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:shadow-orange-200/30 transition-all duration-500 hover:-translate-y-2">
              <div className="pt-2 text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  By Road
                </h4>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Well-connected by buses from Kota (2–3 hr), Bundi, and Baran. Self-drive via NH-52 is scenic and comfortable.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12 md:mt-16 text-lg md:text-xl font-medium">
            Kota remains the most convenient gateway — just 2–3 hours away by road or rail.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 md:py-10 bg-white/40">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Must-Visit Places in  <span className="font-bold text-orange-500">jhalawar</span>
        </h3>

        <div className="space-y-16 md:space-y-24 hidden md:block">
          {jhalawarPlaces.map((place, index) => {
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
          {jhalawarPlaces.map((place, index) => {

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