// import kotaPlaces from '@/data/posts.json';
// import bundiPlaces from '@/data/bundi.json';
// import baranPlaces from '@/data/baran.json';
// import jhalawarPlaces from '@/data/jhalawar.json';
// const posts = [...kotaPlaces, ...bundiPlaces , ...jhalawarPlaces];
import posts from "@/data/posts.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  // Find nearby places within 5 km
  const nearbyPlaces = posts
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      ...p,
      distance: getDistanceKm(
        post.geo.lat,
        post.geo.lng,
        p.geo.lat,
        p.geo.lng
      ),
    }))
    .filter((p) => p.distance <= 5) // Use 5 km
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 4);

  // Find related places (at least 2 common tags)
  const currentTags = new Set(post.tags);
  const relatedPlaces = posts
    .filter((p) => {
      if (p.slug === slug) return false;
      const commonTags = p.tags.filter((tag) => currentTags.has(tag));
      return commonTags.length >= 2;
    })
    .sort((a, b) => {
      const aCommon = a.tags.filter((tag) => currentTags.has(tag)).length;
      const bCommon = b.tags.filter((tag) => currentTags.has(tag)).length;
      return bCommon - aCommon;
    })
    .slice(0, 4);

  return (
    <>
      {/* Hero – dynamic with post image */}
      <div className="relative lg:h-[80vh] h-[94vh] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${post.image1 || '/placeholder-hero.jpg'})` }}>

        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />

        {/* Hero Text – premium centered layout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 lg:px-12">
          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] text-white/95 animate-fadeIn">
            {post.title}
          </h1>
          <span className="mt-4 text-sm sm:text-base md:text-lg uppercase tracking-[0.4em] text-white/70 animate-fadeInDelayed">
            {post.tags.slice(0, 3).join(' • ')}
          </span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto p-6 md:p-8 lg:p-12 bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl -mt-20 relative z-10 mb-20">

        {/* Image Gallery – premium carousel style */}
       <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {[post.image1, post.image2].filter(Boolean).map((img, i) => (
              <div key={i} className="relative h-64 md:h-80 overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={img}
                  alt={`${post.title} photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
        
        {/* Details Section – clean, premium layout */}
        <section className="mb-12 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600">
            <div className="flex items-center gap-2 capitalize">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Tags : {post.tags.join(", ")}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Approx {post.duration} Hour
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12h1m-5-9v-1m-4 4l.707-.707m11.314 0l.707-.707M17.657 17.657l.707.707M6.343 6.343l.707-.707" />
              </svg>
              Best Time : {post.best_time}
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            {post.content}
          </p>

          {/* Highlights – premium bullet list */}
          {post.highlights?.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Highlights</h3>
              <ul className="space-y-3">
                {post.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Nearby Places – premium cards */}
        {nearbyPlaces.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nearby Places <span className="text-gray-500 font-normal text-2xl">(In 5 Km)</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nearbyPlaces.map((place) => (
                <Link
                  key={place.id}
                  href={`/places/${place.slug}`}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-40">
                    <Image
                      src={place.image1 || '/placeholder-kota.jpg'}
                      alt={place.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{place.title}</h3>
                    <p className="text-sm text-gray-600">{place.distance.toFixed(1)} km away</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Places – premium cards */}
        {relatedPlaces.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Places You May Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPlaces.map((place) => (
                <Link
                  key={place.id}
                  href={`/places/${place.slug}`}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-40">
                    <Image
                      src={place.image1 || '/placeholder-kota.jpg'}
                      alt={place.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{place.title}</h3>
                    <p className="text-sm text-gray-600 capitalize">{place.tags.slice(0, 2).join(", ")}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}