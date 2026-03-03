"use client";

export default function Hadoti() {
  const hadotiPlaces = [
    {
      title: "Chambal Riverfront, Kota",
      image: "/chambal-riverfront-kota-rajasthan-8.jpg",
      description: "Serene river ghats, evening boat rides, and stunning sunset views.",
      district: "Kota",
      link: "/places/chambal-riverfront"
    },
    {
      title: "Garh Palace & City Museum, Bundi",
      image: "/garh-city-palace-kota-rajasthan-2.jpg",
      description: "Step-painted walls, stepwells, and royal heritage of the Hada Rajputs.",
      district: "Bundi",
      link: "/places/garh-palace-bundi"
    },
    {
      title: "Raniji ki Baori, Bundi",
      image: "/raniji-ki-baori-bundi-rajasthan.jpg",
      description: "One of the most beautiful stepwells in Rajasthan — architectural masterpiece.",
      district: "Bundi",
      link: "/places/raniji-ki-baori"
    },
    {
      title: "Kakrain Mata Temple, Baran",
      image: "/kakrain-mata-temple-baran.jpg",
      description: "Ancient Shakti Peeth with peaceful surroundings and spiritual significance.",
      district: "Baran",
      link: "/places/kakrain-mata"
    },
    {
      title: "Gagron Fort, Jhalawar",
      image: "/gagron-fort-jhalawar-rajasthan.jpg",
      description: "UNESCO World Heritage Site — hilltop fort surrounded by water on three sides.",
      district: "Jhalawar",
      link: "/places/gagron-fort"
    },
    {
      title: "Chandrabhaga Temple, Jhalawar",
      image: "/chandrabhaga-temple-jhalawar.jpg",
      description: "Beautiful riverside temple complex with intricate carvings.",
      district: "Jhalawar",
      link: "/places/chandrabhaga-temple"
    },
    {
      title: "Abheda Biological Park, Kota",
      image: "/abheda-biological-park-kota.jpg",
      description: "Wildlife sanctuary with deer, birds, and lush greenery — family favorite.",
      district: "Kota",
      link: "/places/abheda-biological-park"
    },
    {
      title: "Kalisindh Dam, Jhalawar",
      image: "/kalisindh-dam-jhalawar.jpg",
      description: "Scenic dam site with panoramic views and picnic spots.",
      district: "Jhalawar",
      link: "/places/kalisindh-dam"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50/50">

      <div className="relative lg:h-[100vh] h-[94vh] bg-[url('/bundi/bundi-3.jpg')] bg-cover bg-center overflow-hidden">

        {/* Soft dark overlay (very light) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white/90 animate-fadeUpSlow"> Hadoti Region</h1>

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

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore Hadoti Region</h2>
          <p className="text-gray-500 mt-2">Select a city to see its hidden gems and local sub-locations</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Kota", img: "/chambal-riverfront-kota-rajasthan-8.jpg", count: "25+ Places", slug: "/explore-kota" },
            { name: "Bundi", img: "/bundi/bundi-1.webp", count: "15+ Places", slug: "/bundi" },
            { name: "Baran", img: "/baran/shergarh-fort-baran-rajasthan.jpg", count: "10+ Places", slug: "/baran" },
            { name: "Jhalawar", img: "/jhalawar/garh-palace-jhalawar-rajasthan.jpg", count: "12+ Places", slug: "/jhalawar" },
          ].map((city) => (
            <a
              key={city.name}
              href={city.slug}
              className="group relative h-64 rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={city.img}
                alt={city.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white tracking-tight">{city.name}</h3>
                <p className="text-orange-400 text-sm font-medium">{city.count}</p>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              A Land Carved by Rivers <br /> and Royalty.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Hadoti isn't your typical desert Rajasthan. Here, the landscape is defined by the deep gorges of the
              Chambal River, lush teak forests, and the rugged Vindhya range. It is home to India's only
              "Water Fort" and the world-famous Bundi School of painting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Mural Art", desc: "The 'Chitrashala' style of Bundi." },
                { title: "Wildlife", desc: "Mukundara Hills Tiger Reserve." },
                { title: "Spirituality", desc: "Ancient temples of Jhalrapatan." },
                { title: "Architecture", desc: "Intricate stepwells and water-palaces." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
              <img src="/jhalawar/garh-palace-jhalawar-rajasthan.jpg" className="w-full h-full object-cover" alt="Hadoti Culture" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square rounded-[2rem] overflow-hidden -rotate-6 border-8 border-white shadow-2xl">
              <img src="/bundi/bundi-6.jpg" className="w-full h-full object-cover" alt="Hadoti Heritage" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-orange-600 rounded-[3rem] p-10 md:p-16 text-white grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold leading-tight">Did You Know?</h2>
            <p className="text-orange-100 mt-4 text-lg">Hadoti holds some of the most unique records in India.</p>
          </div>
          <div className="space-y-8">
            {[
              { title: "Only Water Fort", desc: "Gagron Fort in Jhalawar is India's only fort surrounded by water on three sides with no foundation." },
              { title: "The Education Hub", desc: "Kota is globally recognized as the coaching capital of India, producing thousands of engineers and doctors." },
              { title: "Stepwell Capital", desc: "Bundi is known as the 'City of Stepwells' with over 50 ancient water structures still standing." }
            ].map((fact, i) => (
              <div key={i} className="flex gap-6 border-l-2 border-orange-400 pl-6">
                <div>
                  <h4 className="text-xl font-bold">{fact.title}</h4>
                  <p className="text-sm text-orange-100 mt-1">{fact.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Visual Side */}
          <div className="relative">
            {/* Decorative Background Element */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />

            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
              <img
                src="/bundi/bundi-5.webp"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                alt="Hadoti Heritage"
              />
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-8 -right-4 md:-right-12 bg-white z-12 p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-sm hidden md:block border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[2px] bg-orange-600"></div>
                <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs">The Hada Lineage</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Descending from the <span className="text-gray-900 font-semibold">Chauhan Agnivanshi</span> clan, the Hada Rajputs established their sovereignty in the 12th century, crafting a legacy defined by defensive architecture and sophisticated fresco art.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="relative">
            <header className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                </span>
                <span className="text-orange-700 font-bold tracking-widest text-[10px] uppercase">Heritage Deep-Dive</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                What makes <span className="font-bold text-orange-600">Hadoti</span> truly unique?
              </h2>
            </header>

            <div className="space-y-10">
              {/* Item 1: Art */}
              <div className="group flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">The Bundi School of Mural Art</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Distinguished by its <span className="text-gray-700 font-medium">Turquoise palette</span> and intricate wildlife detail, Hadoti frescoes represent the pinnacle of Rajasthani wall painting—moving beyond simple portraiture into complex natural narratives.
                  </p>
                </div>
              </div>

              {/* Item 2: Topography */}
              <div className="group flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343a7.99 7.99 0 012.344 5.657c0 1.573-.453 3.038-1.243 4.282z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.642 12.742a3.812 3.812 0 10-5.389-5.389 3.812 3.812 0 005.389 5.389z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Vindhyan Geological Plateau</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Defying the 'desert' stereotype of Rajasthan, Hadoti is a fertile plateau of <span className="text-gray-700 font-medium">Sandstone Gorges</span> and perennial rivers. This geography fostered a culture of 'Water-Forts' and lush teak forests.
                  </p>
                </div>
              </div>

              {/* Item 3: Architecture */}
              <div className="group flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Indo-Islamic Fusion Architecture</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    The region served as a stylistic bridge. The stone carvings of <span className="text-gray-700 font-medium">Jhalrapatan</span> and the palatial balconies of Kota demonstrate a rare synergy between Rajput courage and Mughal aesthetics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Header with High Contrast */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-orange-600"></div>
              <span className="text-orange-600 font-black tracking-widest text-xs uppercase">The Essence of Hadoti</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-none">
              What makes this region <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">extraordinary?</span>
            </h2>
          </div>

          {/* Info Grid - High Readability */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">

            {[
              {
                id: "01",
                title: "The Perennial Riverfront",
                desc: "The Chambal River is the heart of Hadoti. It is the only perennial river in Rajasthan, carved into massive sandstone gorges and home to world-class riverfront developments in Kota.",
                icon: <path d="M8 18h8M8 12h8M12 2v20m-9-4h18" strokeWidth="2" strokeLinecap="round" />
              },
              {
                id: "02",
                title: "Fortified Heritage",
                desc: "From the UNESCO-listed Gagron 'Water Fort' to the mural-laden Garh Palace of Bundi, the region hosts some of India's most strategically unique military architecture.",
                icon: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" strokeWidth="2" strokeLinecap="round" />
              },
              {
                id: "03",
                title: "City of Stepwells",
                desc: "Bundi alone houses over 50 ancient 'Baoris' (stepwells). These are not just water sources; they are subterranean social temples featuring world-renowned stone carvings.",
                icon: <path d="M4 6h16M7 10h13M10 14h10M13 18h7" strokeWidth="2" strokeLinecap="round" />
              },
              {
                id: "04",
                title: "Spiritual Canyons",
                desc: "Sites like Garadia Mahadev offer a rare confluence of spirituality and raw nature, perched on the edge of a 500-foot gorge where the Chambal river curves in a horseshoe.",
                icon: <path d="M12 2L2 20h20L12 2z" strokeWidth="2" strokeLinejoin="round" />
              },
              {
                id: "05",
                title: "The Wild Teak Belt",
                desc: "The Mukundara Hills Tiger Reserve and Darrah sanctuary protect a lush ecosystem far removed from the desert, supporting leopards, tigers, and diverse avian life.",
                icon: <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M12 8v4l3 3" strokeWidth="2" strokeLinecap="round" />
              },
              {
                id: "06",
                title: "Artisanal Mastery",
                desc: "The region is the birthplace of 'Kota Doria' handloom weaving and the 'Bundi School' of painting, famous for its turquoise-blue palettes and botanical detail.",
                icon: <path d="M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" strokeWidth="2" strokeLinecap="round" />
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Large Background Number for Visibility */}
                <span className="absolute -top-6 -left-4 text-8xl font-black text-gray-50 z-0 select-none group-hover:text-orange-50 transition-colors duration-500">
                  {item.id}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 text-orange-600 mb-6 bg-orange-50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}