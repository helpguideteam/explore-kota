"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import posts from "@/data/posts.json";

export default function Home() {

  const thingsToDo = [
    {
      title: "Seven Wonders Park",
      image: "/seven-wonders-park-kota-rajasthan-1.png",
      description:
        "A unique park featuring replicas of the world’s seven wonders, perfect for evening walks and photography.",
      href: "seven-wonders-park",
    },
    {
      title: "Oxyzen City Park",
      image: "/oxyzen-city-park-kota-rajsthan-4.jpg",
      description:
        "A scenic spot offering stunning sunset views and a relaxing atmosphere near flowing waters.",
      href: "city-park-kota",
    },
    {
      title: "Garadia Mahadev Temple",
      image: "/garadiya-mahadev-temple-kota-rajasthan-1.png",
      description:
        "A cliffside temple with breathtaking views of the Chambal River curve below abcd efgh.",
      href: "/garadia-mahadev",
    },
    {
      title: "City Palace & Museum",
      image: "/garh-city-palace-kota-rajasthan-2.jpg",
      description:
        "Explore Kota’s royal heritage through ancient weapons, paintings, and Rajput architecture.",
      href: "/garh-palace-kota",
    },
    {
      title: "Kishore Sagar Talab",
      image: "/kishor-sagar-talab-kota-rajasthan-3.jpg",
      description:
        "A calm lakeside destination ideal for evening strolls and cityscape views dfdfgdg dgg dfgfd .",
      href: "/kishore-sagar-talab",
    },
    {
      title: "River Front",
      image: "/chambal-riverfront-kota-rajasthan-8.jpg",
      description:
        "A calm lakeside destination ideal for evening strolls and cityscape views dfdfgdg dgg dfgfd .",
      href: "/chambal-riverfront",
    },
  ];

  const images = [
    { id: 1, src: "/chambal-riverfront-kota-rajasthan-1.png", aspect: "aspect-[4/5]", alt: "Chambal sunset" },
    { id: 2, src: "/chambal-riverfront-kota-rajasthan-2.png", aspect: "aspect-[3/4]", alt: "Boat ride" },
    { id: 3, src: "/chambal-riverfront-kota-rajasthan-3.png", aspect: "aspect-[3/5]", alt: "Night riverfront" },
    { id: 4, src: "/garh-city-palace-kota-rajasthan-1.jpg", aspect: "aspect-[3/4]", alt: "Iconic bridge" },
    { id: 5, src: "/chambal-riverfront-kota-rajasthan-5.jpg", aspect: "aspect-[7/6]", alt: "Wildlife moment" },
    { id: 6, src: "/oxyzen-city-park-kota-rajsthan-4.jpg", aspect: "aspect-[3/4]", alt: "Evening ghat vibes" },
    { id: 7, src: "/oxyzen-city-park-kota-rajsthan-1.png", aspect: "aspect-[10/7]", alt: "Aerial view" },
    { id: 8, src: "/kishor-sagar-talab-kota-rajasthan-3.jpg", aspect: "aspect-square", alt: "Local food" },
    { id: 9, src: "/chambal-riverfront-kota-rajasthan-1.png", aspect: "aspect-[4/5]", alt: "Chambal sunset" },
    { id: 11, src: "/garadiya-mahadev-temple-kota-rajasthan-1.png", aspect: "aspect-[3/5]", alt: "Night riverfront" },
    { id: 10, src: "/kishor-sagar-talab-kota-rajasthan-1.jpeg", aspect: "aspect-[3/4]", alt: "Boat ride" },
    { id: 12, src: "/garh-city-palace-kota-rajasthan-1.jpg", aspect: "aspect-[2/3]", alt: "Iconic bridge" },
    { id: 13, src: "/chambal-riverfront-kota-rajasthan-5.jpg", aspect: "aspect-[4/5]", alt: "Wildlife moment" },
    { id: 14, src: "/chambal-riverfront-kota-rajasthan-6.jpg", aspect: "aspect-[3/5]", alt: "Evening ghat vibes" },
    { id: 15, src: "/oxyzen-city-park-kota-rajsthan-1.png", aspect: "aspect-[10/15]", alt: "Aerial view" },
    { id: 16, src: "/oxyzen-city-park-kota-rajsthan-8.jpg", aspect: "aspect-square", alt: "Local food" },
  ];

  const activity = [
    "adventure-activity-kota-rajasthan-2.avif",
    "adventure-activity-kota-rajasthan-3.webp",
    "adventure-activity-kota-rajasthan-5.webp",
    "adventure-activity-kota-rajasthan-4.webp",
  ];

  const ImageCard = ({ src, className = "", large = false }) => (
    <div
      className={`absolute ${large ? "w-[240px] h-[360px]" : "w-[200px] h-[300px]"} rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-[1.05] hover:z-50 ${className}`}>
      <Image src={src} alt="Guide" fill className="object-cover" />
    </div>
  );

  const DynamicMap = dynamic(() => import('@/components/map'), {
    ssr: false,
    loading: () => <p className="text-center py-10">Loading map...</p>,
  });

  const placesWithGeo = posts.filter(place => place.geo?.lat && place.geo?.lng);

  return (
    <main >

      {/* hero */}
      {/* <div className="lg:h-[100vh] h-[94vh] bg-[url('/chambal-riverfront-kota-rajasthan-8.jpg')] bg-cover bg-center flex items-end justify-center text-white">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="flex h-10 w-10 items-center justify-center rounded-full hover:cursor-pointer bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-[1px] border border-white/25 shadow-xl hover:scale-120 transition-all duration-400">
            <svg
              className="h-5 w-8 text-white/80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 10l7 7m0 0l7-7m-7 7V3"
              />
            </svg>
          </button>
        </div>
      </div> */}

      {/* hero */}
      <div className="relative lg:h-[100vh] h-[94vh] bg-[url('/chambal-riverfront-kota-rajasthan-8.jpg')] bg-cover bg-center overflow-hidden">

        {/* Soft dark overlay (very light) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white/90 animate-fadeUpSlow">RIVER FRONT KOTA</h1>

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

      {/* map of kota */}
      <section className="w-full md:py-20 py-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">About
                <span className="text-orange-500"> Kota</span>
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kota is the third largest city in Rajasthan and a significant destination for
                travelers seeking a mix of history, culture, and natural surroundings. Located
                along the Chambal River, the city is known for its peaceful riverbanks, expansive
                gardens, and notable heritage structures.
              </p>

              <p className="text-gray-600 mb-8 text-lg">
                The origins of Kota can be traced back to the 12th century with the establishment
                of the Hadoti region by Rao Deva. In 1631, Kota emerged as an independent Rajput
                state, distinct from Bundi. Throughout its history, the city witnessed political
                struggles involving Mughal rulers, Rajput kingdoms, and Maratha leaders. The
                legacy of this era is reflected in Kota’s palaces, temples, museums, and historic
                architecture, which continue to attract visitors from across the country.
              </p>

              <Link href="/explore-kota" className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 transition">
                Explore Kota
              </Link>
            </div>

            <div className="flex justify-center perspective-[1200px]">
              <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px]
                  rounded-3xl p-6
                  transition-transform duration-500 ease-out
                  hover:rotate-x-20 hover:-rotate-y-20 hover:scale-130
                  transform-gpu">
                <Image
                  src="/kota-rajasthan-map-2.png"
                  alt="Colorful Map of Kota Rajasthan"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* kota bucket list */}
      <section className="w-full md:py-20 py-10 bg-white/30">
        <div className="mx-auto md:px-20 px-5">

          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              <span className="text-orange-500">Kota </span>
              bucket list
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Discover the best attractions in Kota, Rajasthan from scenic
              river views to cultural landmarks.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {thingsToDo.map((item, index) => (
              <Link
                key={index}
                href={`/places/${item.href}`}
                className="group relative min-w-[280px] 2xl:min-w-[320px] 2xl:h-[420px] md:h-[350px] h-[380px] rounded-3xl shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-100 opacity-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white transition-all duration-300 group-hover:-translate-y-12">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm mt-2 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-90">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* hadoti region */}
      <section className="w-full py-10 sm:py-20 lg:py-20">
        <div className="mx-auto px-5 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="overflow-hidden flex items-center justify-center">
            <img
              src="hadoti-map-4.png"
              alt="Chambal River and Hadoti Region"
              className="h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pr-20">
            <span className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-[0.3em]
                       uppercase text-orange-600 bg-orange-50 border-l-4 border-orange-500">
              Hadoti Region
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 my-2">Where Culture Lives<span className="text-orange-500"> Hadoti</span></h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              The Hadoti region of south-eastern Rajasthan is shaped by the life-giving
              waters of the Chambal River and its many tributaries. Carving deep gorges
              through the plateau, these turquoise streams nourish lush forests,
              fertile farmlands, and vibrant ecosystems.
            </p>

            <p className="text-slate-600 leading-relaxed mb-4">
              Ruled for centuries by the Hada Rajputs—descendants of the Chahaman clan—
              Hadoti has witnessed a rare continuity of civilization. From prehistoric
              cave shelters and ancient artefacts to majestic forts, palaces, and temples,
              the region preserves layers of human history.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Today, the Chambal valley stands as a living museum—where nature, culture,
              and heritage flow together through time.
            </p>
          </div>

        </div>
      </section>

      {/* adventure activities in kota */}
      <section className="w-full py-16 mx-auto px-5 md:px-20 bg-white/40">

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Adventrue & Activites in<span className="text-orange-500"> Kota</span></h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {[
            "adventure-activity-kota-rajasthan-2.avif",
            "adventure-activity-kota-rajasthan-4.webp",
            "adventure-activity-kota-rajasthan-5.webp",
          ].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={img} alt="Kota education & adventure" className="w-full h-[280px] md:h-[320px] lg:h-[360px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="mx-auto px-5 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Image - smaller & balanced */}
          <div className="overflow-hidden rounded-3xl shadow-xl group relative order-1 lg:order-1">
            <div className="aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3] max-h-[350px] lg:max-h-[450px]">
              <img
                src="/bageshwar-sarkar-dhirendra-krishna-shastri-in-kota-2.png" // Replace with your actual image path
                alt="Dhirendra Shastri (Bageshwar Dham Sarkar) during his visit to Kota"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Subtle overlay gradient + badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 bg-black/30 backdrop-blur-[1px] text-white text-sm font-medium px-4 py-2 rounded-full shadow-md">
              Bageshwar Dham Sarkar in Kota
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5 lg:space-y-7 order-2 lg:order-2 lg:pr-8 md:px-8">
            <span className="inline-block px-4 py-1 text-xs font-bold tracking-[0.3em]
                     uppercase text-orange-600 bg-orange-50 border-l-4 border-orange-500">
              Spiritual Visit
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Dhirendra Shastri's <span className="text-orange-500">Divine Visit</span> to Kota
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Renowned spiritual leader <strong className="text-orange-700">Dhirendra Krishna Shastri</strong> (Bageshwar Dham Sarkar) visited Kota, bringing waves of devotion and blessings to thousands of followers.
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              His satsang and divine discourses filled the city with spiritual energy. Devotees experienced peace, guidance, and inspiration during this memorable visit.
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              The presence of Bageshwar Dham Sarkar continues to resonate in the hearts of Kota’s people.
            </p>

          </div>
        </div>
      </section>

      {/* call to action */}
      <section className="relative w-full py-20 overflow-hidden bg-white">

        <div className="relative mx-auto px-5 md:px-20 max-w-5xl text-center">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            Plan Your <span className="text-orange-500">Kota Journey</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            From historic landmarks and riverfront views to cultural heritage and
            outdoor adventures, Kota offers experiences for every traveler.
            Start planning your journey and explore the city your way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">

            {/* Primary */}
            <Link
              href="/explore-kota"
              className="px-8 py-4 rounded-full
                   bg-orange-500 text-white
                   font-semibold
                   sm:shadow-[0_12px_30px_rgba(249,115,22,0.45)]
                   hover:bg-orange-600 hover:scale-105
                   transition-all duration-300"
            >
              Explore Places
            </Link>

            {/* Secondary */}
            <Link
              href="/itinerary"
              className="px-8 py-4 rounded-full
                   bg-white text-orange-600
                   border border-orange-200
                   font-semibold
                   sm:shadow-[0_10px_25px_rgba(249,115,22,0.25)]
                   hover:bg-orange-50 hover:scale-105
                   transition-all duration-300"
            >
              Create Route
            </Link>

            <Link
              href="/map"
              className="px-8 py-4 rounded-full
                   bg-white text-orange-600
                   border border-orange-200
                   font-semibold
                   sm:shadow-[0_10px_25px_rgba(249,115,22,0.25)]
                   hover:bg-orange-50 hover:scale-105
                   transition-all duration-300"
            >
              View Kota Map
            </Link>

            {/* Subtle */}
            <Link
              href="/hadoti"
              className="px-8 py-4 rounded-full
                   bg-white text-orange-700
                   border border-orange-200
                   font-semibold
                   sm:shadow-[0_8px_20px_rgba(249,115,22,0.2)]
                   hover:bg-orange-100 hover:scale-105
                   transition-all duration-300"
            >
              Hadoti
            </Link>
          </div>
        </div>
      </section>

      {/* discover kota instagram posts */}
      <section className="py-16 md:py-18">
        <div className=" mx-auto px-4 sm:px-6 lg:px-20">
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Discover
              <span className="text-orange-500"> #Kota</span>
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Discover the best attractions in Kota, Rajasthan from scenic
              river views to cultural landmarks.
            </p>
          </div>
          <div
            className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4 md:gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="mb-4 md:mb-6 break-inside-avoid group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`relative w-full ${image.aspect}`}>
                  <img src={image.src} alt={image.alt} className=" w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">IG</div>
                    <span className="text-white text-sm font-medium">{image.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12 md:mt-16">
            <button className="px-10 py-4 bg-black/40 backdrop-blur-[1px] hover:bg-amber-500 text-white font-medium rounded-full shadow-lg transition-colors duration-00">
              Load More Moments
            </button>
          </div> */}
        </div>
      </section>

      {/* pictures cards */}
      <section className="overflow-hidden bg-orange-500 mx-auto flex justify-center">

        <div className="relative px-5 md:px-20 py-16 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

            {/* Left Content */}
            <div className="lg:col-span-5 text-white space-y-6">
              <span className="inline-block text-xs font-bold tracking-widest uppercase bg-white/20 px-4 py-1 rounded-full">
                Free Resources
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Free Travel Guides <br />
                <span className="text-white/90">& City Maps</span>
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-md">
                Plan your Kota journey with beautifully designed guides and
                easy-to-read maps covering iconic attractions, hidden gems,
                scenic routes, and local experiences.
              </p>

              <Link
                href="#"
                className="group inline-flex items-center gap-3 font-semibold text-white"
              >
                <span className="border-b border-white/50 group-hover:border-white transition">
                  Contact Us
                </span>
              </Link>
            </div>

            {/* Right Image Stack */}
            <div className="lg:col-span-7 relative">

              {/* MOBILE / TABLET */}
              <div className="flex lg:hidden gap-4 overflow-x-auto pb-4 px-2 snap-x snap-mandatory">
                {[
                  "/chambal-riverfront-kota-rajasthan-4.png",
                  "/chambal-mata-statue-kaithooni-pole-kota-rajasthan-1.jpg",
                  "/oxyzen-city-park-kota-rajsthan-8.jpg",
                  "/chambal-riverfront-kota-rajasthan-11.jpeg",
                  "/chambal-riverfront-kota-rajasthan-4.png"
                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative flex-shrink-0
                   w-[200px] h-[300px]
                   rounded-xl overflow-hidden
                   shadow-xl snap-center"
                  >
                    <Image
                      src={src}
                      alt="Guide"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* DESKTOP */}
              <div className="hidden lg:block relative h-[520px]">
                <div className="absolute inset-0 flex items-center justify-center">

                  {/* Image 1 */}
                  <ImageCard
                    src="/chambal-riverfront-kota-rajasthan-4.png"
                    className="left-10 top-32 rotate-[-6deg]"
                  />

                  {/* Image 2 */}
                  {/* <ImageCard
                    src="/chambal-mata-statue-kaithooni-pole-kota-rajasthan-1.jpg"
                    className="left-48 top-10 rotate-[-2deg] z-10"
                  /> */}

                  {/* Center */}
                  <ImageCard
                    src="/oxyzen-city-park-kota-rajsthan-8.jpg"
                    className="z-20 scale-110"
                    large
                  />

                  {/* Image 4 */}
                  {/* <ImageCard
                    src="/chambal-riverfront-kota-rajasthan-11.jpeg"
                    className="right-48 top-12 rotate-[3deg] z-10"
                  /> */}

                  {/* Image 5 */}
                  <ImageCard
                    src="/chambal-riverfront-kota-rajasthan-11.jpeg"
                    className="right-10 top-36 rotate-[6deg]"
                  />

                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1>explorekota.com</h1>
        <h1>kotaguide.com</h1>
        <h1>Along the Chambal</h1>
        <h1>things to do in kota</h1>
        <h1>kota bucket list top places of kota in this section</h1>
        <h1>discover #kota in these section we place many instagram images with #kota  </h1>
        <h1 className="font-montserrat text-8xl font-extrabold text-gray-600/70">FUN in any season</h1>
        the 5 most essential things to do on your first visit to kota
        <h1>see kota history in a whole new light</h1>
        <h1>plan your oregon gateway </h1>
        <h1>kota's hiddem gems : 25 places you didn't know about</h1>
        <h1>oxyzen park : a look inside kota's newest attraction</h1>
        <h1>41 great day trips near kota</h1>
        Iconic Destinations
        <h1>events in kota city season wise</h1>
        <h1>adventrue activites in kota</h1>
      </div> */}

    </main>
  );
}