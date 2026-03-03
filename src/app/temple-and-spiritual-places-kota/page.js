import Link from "next/link";
// import posts from "@/data/kota.json";       // ← if you want to use full data later

export const metadata = {
  title: "Temples & Spiritual Places in Kota | Divine & Peaceful Destinations",
  description:
    "Discover the most sacred and peaceful temples in Kota, Rajasthan. Ancient shrines, powerful deities, river-side temples, hilltop views, and modern devotional centres.",
};

export default function SpiritualPlacesKota() {
  // You can keep this array or later replace it with filtered data from kota.json
  const spiritualPlaces = [
    {
      title: "Garadia Mahadev Temple",
      description:
        "One of the most beautiful and famous temples in Kota. Situated on a high cliff with breathtaking panoramic view of Chambal River gorge. Very powerful Shiva temple and extremely popular photography + sunset spot.",
      image: "/garadiya-mahadev-temple-kota-rajasthan-1.png",
      tags: ["shiva", "hilltop", "viewpoint", "sunset", "powerful"],
      slug: "garadia-mahadev",
      bestTime: "Sunrise or Sunset",
      highlight: "Most scenic & powerful Shiva temple",
    },

    {
      title: "Khade Ganesh Ji Temple",
      description:
        "Very famous and ancient Ganesh temple of Kota where Lord Ganesha is in standing posture (very rare). Considered extremely auspicious. Huge number of devotees visit daily.",
      image: "/temple-khade-ganesh-mandir-kota-rajasthan-2.png",
      tags: ["ganesh", "ancient", "auspicious", "standing-ganesh"],
      slug: "khade-ganesh-ji",
      bestTime: "Morning",
      highlight: "Most visited Ganesh temple in Kota",
    },

    {
      title: "Godavari Dham (Balaji Temple)",
      description:
        "Beautiful white marble Hanuman temple situated on the banks of Chambal River. Very peaceful location with multiple small temples inside the complex. Very crowded on Tuesdays and Saturdays.",
      image: "/godawari-dham-kota-rajasthan.jpeg",
      tags: ["hanuman", "balaji", "riverside", "white-marble"],
      slug: "godavari-dham-kota",
      bestTime: "Early morning or Tuesday/Saturday",
      highlight: "Most beautiful riverside Hanuman temple",
    },

    {
      title: "Maa Trikuta Temple",
      description:
        "Modern beautiful cave-style temple inspired by Vaishno Devi. Features artificial hills, long walking paths and caves. Very peaceful and increasingly popular spiritual destination in Kota.",
      image: "/maa-trikuta-kota-rajasthan-1.png",
      tags: ["devi", "vaishno-devi-style", "cave-temple", "modern"],
      slug: "maa-trikuta-kota",
      bestTime: "Morning or Evening",
      highlight: "Vaishno Devi feel in Kota",
    },
    {
    title: "Gurudwara Sri Agamgarh Sahib",
    description:
      "One of the largest and most prominent Sikh shrines in Kota, located in Badgaon area. Offers langar (community kitchen) and a peaceful place for reflection, prayer and seva.",
    image: "/gurudwara-agam-garh-sahib-kota-rajasthan-2.avif",
    tags: ["gurudwara", "sikh", "langar", "spiritual"],
    slug: "gurudwara-sri-agamgarh-sahib-kota",
    bestTime: "Morning or evening",
    highlight: "Largest Gurudwara in Kota with langar",
  },

    {
      title: "Dadh Devi Mata Temple",
      description:
        "Very ancient and powerful temple of Goddess Durga (kuldevi of Kota royal family). Located ~18 km from city in dense forest area. Very peaceful and spiritually strong place.",
      image: "/dadh-dev-mata-temple-kota-rajasthan-1.jpg",
      tags: ["durga", "royal-kuldevi", "ancient", "forest"],
      slug: "dadh-devi-mata-temple-kota",
      bestTime: "Morning",
      highlight: "Most powerful royal family deity temple",
    },
    {
    title: "Adhar Shila (Dargah)",
    description:
      "Revered dargah located right on the banks of the Chambal River. A significant spiritual site for the Muslim community and visitors seeking peace, with beautiful river views and serene atmosphere.",
    image: "/adharshila-dargah-kota-rajasthan-1.avif",
    tags: ["dargah", "spiritual", "riverside", "peaceful"],
    slug: "adhar-shila-kota",
    bestTime: "Morning or evening",
    highlight: "Serene riverside dargah",
  },

    {
      title: "Hare Krishna Temple (ISKCON Kota)",
      description:
        "Beautiful and vibrant ISKCON temple dedicated to Radha-Krishna. Known for excellent kirtan, aarti, prasadam and very peaceful environment. Very active during all major festivals.",
      image: "/iskcon-hare-krishna-mandir-kota-rajasthan-1.webp",
      tags: ["krishna", "iskcon", "kirtan", "prasadam"],
      slug: "hare-krishna-temple-kota",
      bestTime: "Evening aarti / Janmashtami",
      highlight: "Best place for Krishna devotees",
    },

    {
      title: "Karai Ke Balaji Temple",
      description:
        "Popular and very powerful Hanuman temple located near Chambal Garden area. Very crowded on Tuesdays & Saturdays. Huge number of devotees come especially on Hanuman Janmotsav.",
      image: "/karai-ke-balaji-kota-rajasthan-1.avif",
      tags: ["hanuman", "powerful", "tuesday", "janmotsav"],
      slug: "karai-ke-balaji-kota",
      bestTime: "Tuesday & Saturday",
      highlight: "Most famous local Hanuman temple",
    },

    {
      title: "Chandresal Math (Old Shiv Temple)",
      description:
        "Very old and historic Shiva math/temple located on the outskirts. Peaceful, quiet and less crowded. Perfect place for people who love very old spiritual & heritage places.",
      image: "/chandrasel_math-kota-rajasthan-1.webp",
      tags: ["shiva", "ancient", "math", "heritage", "quiet"],
      slug: "chandresal-math-kota",
      bestTime: "Morning",
      highlight: "Ancient & peaceful heritage Shiva place",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 via-white to-amber-50/20">
      {/* Hero ─ Temple Theme */}
      <div className="relative lg:h-[100vh] h-[90vh] bg-[url('/godawari-dham-kota-rajasthan.jpeg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.18em] text-white/90 animate-fadeUpSlow">
            Temples & Spiritual Places
          </h1>
          <span className="mt-5 text-sm sm:text-base uppercase tracking-[0.4em] text-orange-300/90 animate-fadeUpDelayed">
            Sacred Destinations of Kota
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-5 md:px-12 lg:px-20 max-w-7xl py-16 md:py-24">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block px-7 py-2 bg-orange-100 text-orange-700 font-bold uppercase tracking-wider rounded-full border border-orange-200 mb-6">
            Divine Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Most Sacred & Peaceful Temples in Kota
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Ancient powerful shrines, river-side temples, hilltop deities, modern devotional centres — experience deep spirituality and divine energy in the city of Chambal.
          </p>
        </div>

        {/* Alternating Cards */}
        {spiritualPlaces.map((place, index) => (
          <div
            key={place.slug}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } gap-10 lg:gap-20 items-center py-16 md:py-24 border-b border-gray-200 last:border-b-0`}
          >
            <div className="w-full lg:w-5/12">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-auto aspect-[4/3] md:aspect-[5/4] object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
            </div>

            <div className="w-full lg:w-7/12 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                {place.title}
              </h2>

              {place.highlight && (
                <div className="inline-block px-5 py-2 bg-orange-100 text-orange-700 font-medium rounded-full">
                  {place.highlight}
                </div>
              )}

              <p className="text-xl leading-relaxed text-gray-700">
                {place.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {place.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 bg-orange-50 text-orange-700 text-sm rounded-full capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            

              <Link
                href={`/places/${place.slug}`}
                className="inline-block mt-6 px-9 py-4 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                View Temple Details →
              </Link>
            </div>
          </div>
        ))}

        {/* Closing Advice Box */}
        <div className="mt-20 md:mt-32 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-14 border border-orange-100/60 shadow-sm">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Tips for Temple Visitors in Kota
          </h3>

          <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-orange-600 text-3xl mr-4">•</span>
                <span>Wear modest clothes (especially at temples)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 text-3xl mr-4">•</span>
                <span>Best time — early morning (very peaceful)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 text-3xl mr-4">•</span>
                <span>Tuesdays & Saturdays are very crowded</span>
              </li>
            </ul>

            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-orange-600 text-3xl mr-4">•</span>
                <span>Carry your own water bottle</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 text-3xl mr-4">•</span>
                <span>Respect temple customs and photography rules</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 text-3xl mr-4">•</span>
                <span>Most temples have free parking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}