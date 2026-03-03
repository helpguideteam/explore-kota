// pages/explore-kota/photogenic-places.jsx  (or app/explore-kota/photogenic-places/page.jsx)

import Link from "next/link";
import posts from "@/data/posts.json";

export const metadata = {
    title: "Photogenic Places in Kota | Best Photography Spots & Instagram Locations",
    description:
        "Discover the most beautiful and photogenic places in Kota, Rajasthan – perfect for Instagram, pre-wedding shoots, nature photography, and scenic views.",
};

export default function PhotogenicPlaces() {
    // Filter logic (same as before)
    const photogenicPosts = posts.filter((post) =>
        post.tags?.some((tag) =>
            [
                "photography-spot",
                "nature",
                "park",
                "riverfront",
                "temple",
                "viewpoint",
                "sunset",
                "scenic",
                "instagram",
            ].includes(tag.toLowerCase())
        ) ||
        post.title.toLowerCase().includes("river") ||
        post.title.toLowerCase().includes("garadia") ||
        post.title.toLowerCase().includes("chambal")
    );

    // Featured places with rich descriptions (you can expand this list)
    const featuredPhotogenic = [
        {
            title: "Garadia Mahadev Temple",
            description:
                "Often called the 'Grand Canyon of India', this spot offers breathtaking panoramic views of the Chambal River gorge. The dramatic cliffs, deep valleys, and seasonal waterfalls create some of the most cinematic frames in Rajasthan. Sunrise turns the sky golden-pink, while sunset paints everything in warm orange hues — perfect for landscape and drone photography.",
            image: "/garadiya-mahadev-temple-kota-rajasthan-1.png",
            tags: ["viewpoint", "nature", "temple", "sunset", "drone-friendly"],
            slug: "garadia-mahadev",
            bestTime: "Sunrise or Sunset",
            highlight: "Most dramatic viewpoint in Kota",
        },
        {
            title: "Chambal Riverfront",
            description:
                "The beautifully lit promenade along the Chambal River is one of the most photogenic urban spots in Kota. Golden hour reflections on the water, colorful evening lights, wide river views, and people enjoying the evening atmosphere make it ideal for cityscape, lifestyle, and portrait photography. The long stretch gives you plenty of angles to play with.",
            image: "/chambal-riverfront-kota-rajasthan-8.jpg",
            tags: ["riverfront", "evening", "cityscape", "lifestyle"],
            slug: "chambal-riverfront",
            bestTime: "Golden hour & Evening",
            highlight: "Best urban-river combination",
        },
        {
            title: "Seven Wonders Park",
            description:
                "This unique park features miniature replicas of the world’s seven wonders set against the Chambal River backdrop. The symmetry, creative compositions, vibrant colors, and river reflections offer endless opportunities for architectural, creative, and family photography. Early morning or late afternoon light works best for soft shadows and rich colors.",
            image: "/seven-wonders-park-kota-rajasthan-1.png",
            tags: ["landmark", "architecture", "family", "miniature"],
            slug: "seven-wonders-park",
            bestTime: "Morning or Late Afternoon",
            highlight: "World wonders in one frame",
        },
        {
            title: "Kishore Sagar Lake & Jagmandir Palace",
            description:
                "A serene lake with the historic Jagmandir Palace sitting in the center creates mirror-like reflections — especially magical during sunrise, sunset, and blue hour. The calm water, royal architecture, and surrounding greenery make it one of the most romantic and photogenic heritage locations in Kota.",
            image: "/kishor-sagar-talab-kota-rajasthan-3.jpg",
            tags: ["lake", "heritage", "reflection", "sunset"],
            slug: "kishore-sagar-talab",
            bestTime: "Sunrise, Sunset, Blue hour",
            highlight: "Perfect symmetry & reflections",
        },
        {
            title: "Oxyzone City Park ",
            description:
                "Lush green lawns, colorful flowers, peacocks roaming freely, river views, and gharial sightings make this park a peaceful nature escape. Ideal for nature close-ups, bird photography, portrait sessions, and relaxed lifestyle shots. The greenery is especially vibrant during and after monsoon.",
            image: "/oxyzen-city-park-kota-rajsthan-1.png",
            tags: ["park", "nature", "wildlife", "green"],
            slug: "city-park-kota",
            bestTime: "Morning or Monsoon",
            highlight: "Best green & wildlife spot",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50/20 via-white to-amber-50/10">
            {/* Hero */}
            <div className="relative lg:h-[100vh] h-[94vh] bg-[url('/umed-bhawan-palace-kota-rajasthan-1.avif')] bg-cover bg-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-white/90 animate-fadeUpSlow">
                        Photogenic Places in Kota
                    </h1>
                    <span className="mt-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/70 animate-fadeUpDelayed">
                        Capture the Beauty of the Chambal City
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-auto px-5 md:px-12 lg:px-20 max-w-7xl py-16 md:py-24">
                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <span className="inline-block px-6 py-2 bg-orange-100 text-orange-700 font-bold uppercase tracking-wider rounded-full border border-orange-200 mb-6">
                        Photography Guide
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Most Photogenic Locations in Kota
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        From dramatic river gorges and golden sunsets to serene lakes and heritage reflections — these are the spots that photographers, couples, influencers, and travellers love the most.
                    </p>
                </div>

                {/* Alternating Sections */}
                {featuredPhotogenic.map((place, index) => (
                    <div
                        key={place.slug}
                        className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-12 lg:gap-20 items-center py-16 md:py-24 border-b border-gray-200 last:border-b-0`}
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

                            <p className="text-xl text-gray-700 leading-relaxed">
                                {place.description}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {place.tags.map(tag => (
                                    <span key={tag} className="px-4 py-1 bg-gray-50 text-gray-600 text-sm rounded-full">
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
                        Photography Tips for Kota
                    </h3>
                    <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <span className="text-orange-600 text-2xl mr-4">•</span>
                                <span>Golden hour (sunrise & sunset) gives the most dramatic lighting</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-600 text-2xl mr-4">•</span>
                                <span>Monsoon season brings lush green landscapes and flowing waterfalls</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-600 text-2xl mr-4">•</span>
                                <span>Evening lights at riverfront create beautiful long-exposure opportunities</span>
                            </li>
                        </ul>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <span className="text-orange-600 text-2xl mr-4">•</span>
                                <span>Use wide-angle lenses for gorges, lakes and panoramic views</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-600 text-2xl mr-4">•</span>
                                <span>Drone photography is allowed in open areas — check local rules</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-600 text-2xl mr-4">•</span>
                                <span>Respect nature and heritage sites — leave no trace</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}