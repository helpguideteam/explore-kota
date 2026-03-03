// components/Footer.tsx
import Link from 'next/link';
export default function Footer() {
  return (
      <footer className="relative overflow-hidden">

      <div className="absolute inset-0 bg-[url('/chambal-riverfront-kota-rajasthan-3.png')] bg-cover bg-center bg-fixed" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 py-24">

        {/* hero message */}
        <div className="mb-24 max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Your journey through Kota<span className="block text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.25)]">begins here.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-4xl">
            Thoughtfully curated places, experiences, and stories designed for explorers, dreamers, and locals alike.
          </p>
        </div>

        {/* link sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-t border-white/15 pt-16">

          {/* brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Explore<span className="text-amber-400"> Kota</span>
            </h3>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              A premium travel journal uncovering Kota’s riverfronts,
              heritage, culture, and hidden gems.
            </p>
          </div>

          {/* plan trip */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-6">
              Plan Your Trip
            </h4>
            <ul className="space-y-4 text-white text-sm">
                <li >
                  <Link href="/photogenic-places-kota" className="group inline-flex items-center gap-3">
                    <span className="h-px w-6 bg-amber-400/60 group-hover:w-10 transition-all" />
                    <span className="group-hover:text-amber-400 transition">
                     Photogenic places of Kota
                    </span>
                  </Link>
                </li>

                 <li >
                  <Link href="/tourist-places-kota" className="group inline-flex items-center gap-3">
                    <span className="h-px w-6 bg-amber-400/60 group-hover:w-10 transition-all" />
                    <span className="group-hover:text-amber-400 transition">
               Tourist places of Kota
                    </span>
                  </Link>
                </li>
                   <li >
                  <Link href="/explore-kota" className="group inline-flex items-center gap-3">
                    <span className="h-px w-6 bg-amber-400/60 group-hover:w-10 transition-all" />
                    <span className="group-hover:text-amber-400 transition">
            Explore hadoti
                    </span>
                  </Link>
                </li>
                
           
            </ul>
          </div>

          {/* experiences */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-6">
              Hadoti
            </h4>
            <ul className="space-y-4 text-white text-sm">
                 <li >
                  <Link href="/hadoti" className="group inline-flex items-center gap-3">
                    <span className="h-px w-6 bg-amber-400/60 group-hover:w-10 transition-all" />
                    <span className="group-hover:text-amber-400 transition">
            Explore hadoti
                    </span>
                  </Link>
                </li>
                     <li >
                  <Link href="/explore-kota" className="group inline-flex items-center gap-3">
                    <span className="h-px w-6 bg-amber-400/60 group-hover:w-10 transition-all" />
                    <span className="group-hover:text-amber-400 transition">
            Explore kota
                    </span>
                  </Link>
                </li>

                     <li >
                  <Link href="/bundi" className="group inline-flex items-center gap-3">
                    <span className="h-px w-6 bg-amber-400/60 group-hover:w-10 transition-all" />
                    <span className="group-hover:text-amber-400 transition">
            Explore bundi
                    </span>
                  </Link>
                </li>

                      <li >
                  <Link href="/jhalawar" className="group inline-flex items-center gap-3">
                    <span className="h-px w-6 bg-amber-400/60 group-hover:w-10 transition-all" />
                    <span className="group-hover:text-amber-400 transition">
            Explore jhalawar
                    </span>
                  </Link>
                </li>
            </ul>
          </div>

          {/* city insights */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-6">
              Quick links
            </h4>
            <ul className="space-y-4 text-white text-sm">
               <li >
                  <Link href="/" className="group inline-flex items-center gap-3">
                    <span className="h-px w-6 bg-amber-400/60 group-hover:w-10 transition-all" />
                    <span className="group-hover:text-amber-400 transition">
           Home
                    </span>
                  </Link>
                </li>
                <li >
                  <Link href="/contact-us" className="group inline-flex items-center gap-3">
                    <span className="h-px w-6 bg-amber-400/60 group-hover:w-10 transition-all" />
                    <span className="group-hover:text-amber-400 transition">
           Contact us
                    </span>
                  </Link>
                </li>
                 <li >
                  <Link href="/map" className="group inline-flex items-center gap-3">
                    <span className="h-px w-6 bg-amber-400/60 group-hover:w-10 transition-all" />
                    <span className="group-hover:text-amber-400 transition">
           Kota map
                    </span>
                  </Link>
                </li>
            </ul>
          </div>
        </div>

        {/* secondary links */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-400">
          
              <Link href="contact-us"className="hover:text-amber-400 transition">Contact Us</Link>
          
          </div>

          <div className="flex gap-4 md:justify-end">
            {["Instagram", "YouTube", "Facebook"].map((item) => (
              <div
                key={item}
                className="
                  px-6 py-3 rounded-full
                  bg-white/5 backdrop-blur-md
                  border border-white/15
                  text-sm text-white
                  hover:bg-amber-400 hover:text-black
                  transition-all cursor-pointer
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* copyright */}
        <div className="mt-16 text-center text-xs text-gray-500">
          © 2026 ExploreKota.com · Designed as a love letter to Kota
        </div>

      </div>

    </footer>
  );
}