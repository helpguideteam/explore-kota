import Link from "next/link";
import posts from "@/data/posts.json";

export const metadata = {
  title: "Tourist Places in Kota | Top Attractions & Must-Visit Spots",
  description:
    "Explore the top tourist attractions in Kota, Rajasthan – from historical palaces and gardens to scenic riverfronts, temples, and family-friendly destinations.",
};

export default function TouristPlaces() {
  // Optional: filter posts that are marked as tourist attractions
  const touristPosts = posts.filter((post) =>
    post.tags?.some((tag) =>
      ["tourist", "attraction", "must-visit", "family-friendly", "landmark"].includes(tag.toLowerCase())
    )
  );

  // Featured tourist places – now with more locations
  const featuredTouristPlaces = [
    {
      title: "Chambal Riverfront",
      description:
        "One of the most popular evening hangout spots in Kota. The well-maintained promenade, musical fountain shows, colorful lights, food stalls, and beautiful river views make it a perfect place for families, couples, and tourists to relax and enjoy the city vibe.",
      image: "/chambal-riverfront-kota-rajasthan-8.jpg",
      tags: ["riverfront", "evening", "family", "food"],
      slug: "chambal-riverfront",
      bestTime: "Evening (after 6 PM)",
      highlight: "Most visited spot in Kota",
    },
    {
      title: "Seven Wonders Park",
      description:
        "A beautiful park featuring miniature models of the Seven Wonders of the World along with Indian monuments. Ideal for families, school trips, and photography lovers. The park also has a musical fountain and good greenery — a great place to spend 2–3 hours.",
      image: "/seven-wonders-park-kota-rajasthan-1.png",
      tags: ["park", "family", "miniature", "landmark"],
      slug: "seven-wonders-park",
      bestTime: "Morning or Evening",
      highlight: "Perfect for kids & families",
    },
    {
      title: "Garadia Mahadev Temple",
      description:
        "Famous for its stunning view of the Chambal River gorge. The temple is situated on a hilltop offering panoramic views of the valley. A very popular spot among tourists, especially during sunrise and sunset when the scenery becomes breathtaking.",
      image: "/garadiya-mahadev-temple-kota-rajasthan-1.png",
      tags: ["temple", "viewpoint", "nature", "sunset"],
      slug: "garadia-mahadev",
      bestTime: "Sunrise or Sunset",
      highlight: "Most scenic temple viewpoint",
    },
    {
      title: "Kishore Sagar Lake & Jagmandir Palace",
      description:
        "A historic lake with the beautiful Jagmandir Palace in the center. The calm water, old architecture, and surrounding greenery make it a peaceful tourist destination. Boating is available and the place looks especially beautiful in the evening.",
      image: "/kishor-sagar-talab-kota-rajasthan-3.jpg",
      tags: ["lake", "heritage", "palace", "boating"],
      slug: "jagmandir-palace-kota",
      bestTime: "Evening",
      highlight: "Heritage + Nature combo",
    },
    {
      title: "Abheda Biological Park",
      description:
        "A large garden and biological park with lush greenery, animals, birds, and beautiful walking paths. Very popular among families, morning walkers, and nature lovers. Children enjoy seeing deer, peacocks, and other birds in a natural setting.",
      image: "/abheda-biological-park-kota-rajasthan-2.png",
      tags: ["park", "zoo", "family", "nature"],
      slug: "abheda-biological-park-kota",
      bestTime: "Morning",
      highlight: "Best family picnic spot",
    },

    // Newly added places
    {
      title: "Garh Palace (Kota City Palace)",
      description:
        "The historic Garh Palace is the royal residence of the Kota rulers. This grand palace complex features beautiful architecture, courtyards, gardens, and the famous Rao Madho Singh Museum with rare paintings, weapons, and artifacts. A must-visit for history and architecture lovers.",
      image: "/garh-city-palace-kota-rajasthan-2.jpg",
      tags: ["palace", "heritage", "museum", "history"],
      slug: "garh-palace-kota",
      bestTime: "Morning to Afternoon",
      highlight: "Royal heritage landmark",
    },
    {
      title: "Oxyzone City Park",
      description:
        "A modern and well-maintained city park known for its oxygen-rich environment, beautiful landscaping, walking tracks, kids' play areas, and scenic views of the Chambal River. It’s a favorite spot for morning walks, family outings, and photography.",
      image: "/oxyzen-city-park-kota-rajsthan-1.png",
      tags: ["park", "family", "morning-walk", "green-space"],
      slug: "city-park-kota",
      bestTime: "Early Morning or Evening",
      highlight: "Best urban green escape",
    },
    {
      title: "Maa Trikuta Temple",
      description:
        "Maa Trikuta Temple (also known as Trikuta Mandir) is a modern cave-style temple in Kunhadi/Naya Khera area of Kota, replicating the Vaishno Devi shrine. It features artificial hills, caves, and devotional paths, making it a unique spiritual attraction.",
      image: "/maa-trikuta-kota-rajasthan-1.png",
      tags: ["temple", "spiritual", "peaceful", "hanuman"],
      slug: "maa-trikuta-kota",
      bestTime: "Morning or Evening",
      highlight: "Popular spiritual destination",
    },
    {
      title: "Hare Krishna Temple (ISKCON Kota)",
      description:
        "A vibrant temple dedicated to Lord Krishna, run by ISKCON. Known for its beautiful architecture, daily aartis, prasadam, and peaceful environment. It’s a great place for spiritual experience, bhajans, and vegetarian food.",
      image: "/iskcon-hare-krishna-mandir-kota-rajasthan-1.webp",
      tags: ["temple", "iskcon", "krishna", "spiritual"],
      slug: "hare-krishna-temple-kota",
      bestTime: "Morning or Evening Aarti",
      highlight: "Peaceful & devotional spot",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/20 via-white to-amber-50/10">
      {/* Hero */}
      <div className="relative lg:h-[100vh] h-[94vh] bg-[url('/chambal-riverfront-kota-rajasthan-8.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white/90 animate-fadeUpSlow">
            Tourist Places in Kota
          </h1>
          <span className="mt-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/70 animate-fadeUpDelayed">
            Top Attractions of the Chambal City
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-5 md:px-12 lg:px-20 max-w-7xl py-16 md:py-24">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block px-6 py-2 bg-orange-100 text-orange-700 font-bold uppercase tracking-wider rounded-full border border-orange-200 mb-6">
            Tourist Guide
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Most Popular Tourist Destinations in Kota
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            From scenic riverfronts and heritage sites to family parks and stunning viewpoints — these are the top places every visitor should explore in Kota.
          </p>
        </div>

        {/* Alternating Sections */}
        {featuredTouristPlaces.map((place, index) => (
          <div
            key={place.slug}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } gap-12 lg:gap-20 items-center py-16 md:py-24 border-b border-gray-200 last:border-b-0`}
          >
            <div className="w-full lg:w-5/12">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-auto aspect-[4/3] md:aspect-[5/4] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="w-full lg:w-7/12 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                {place.title}
              </h2>

              {place.highlight && (
                <div className="inline-block px-5 py-2 bg-orange-100 text-orange-700 font-medium rounded-full text-base">
                  {place.highlight}
                </div>
              )}

              <p className="text-xl text-gray-700 leading-relaxed">
                {place.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {place.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 bg-gray-50 text-gray-600 text-sm rounded-full capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>

             

              <Link
                href={`/places/${place.slug}`}
                className="inline-block mt-6 px-8 py-3.5 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition"
              >
                View full details →
              </Link>
            </div>
          </div>
        ))}

        {/* Tips Section */}
        <div className="mt-20 md:mt-32 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-orange-100/50">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Tips for Tourists Visiting Kota
          </h3>
          <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-orange-600 text-2xl mr-4">•</span>
                <span>Best time to visit: October to March (pleasant weather)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 text-2xl mr-4">•</span>
                <span>Most places are family-friendly and safe in the evening</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 text-2xl mr-4">•</span>
                <span>Carry water and wear comfortable shoes for walking</span>
              </li>
            </ul>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-orange-600 text-2xl mr-4">•</span>
                <span>Local food stalls near Chambal Riverfront are very popular</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 text-2xl mr-4">•</span>
                <span>Auto-rickshaws and cabs are easily available</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 text-2xl mr-4">•</span>
                <span>Respect local customs at temples and heritage sites</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}