"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHadotiOpen, setIsHadotiOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hadotiLinks = [
    { href: "/hadoti", label: "Hadoti" },
    { href: "/explore-kota", label: "Kota" },
    { href: "/baran", label: "Baran" },
    { href: "/bundi", label: "Bundi" },
    { href: "/jhalawar", label: "Jhalawar" },
    // { href: "/hadoti/photogenic", label: "Photogenic Places" },
    // { href: "/hadoti/tourist-places", label: "Tourist Places" },
  ];

  // Helper for consistent styling
  const navLinkClass = "text-sm lg:text-base font-light text-white hover:text-amber-300 transition-colors duration-300 relative after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-px after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header
      className={`
        fixed top-0 w-full z-50 font-montserrat transition-all duration-500 ease-in-out text-white backdrop-blur-[1px]
        ${isScrolled ? "bg-black/60 py-3 md:py-2" : "bg-black/40 py-3 md:py-5"}`}>

      <div className="mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          <Link href="/">
            <Image
              src="/explore-kota-logo-1.png"
              alt="Explore Kota Logo"
              width={100}
              height={48}
              className="w-auto h-10 lg:h-14 object-contain transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className={navLinkClass}>Home</Link>
            <Link href="/explore-kota" className={navLinkClass}>Kota</Link>
            <Link href="/itinerary" className={navLinkClass}>Itinerary</Link>

            {/* Hadoti Dropdown */}
            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setIsHadotiOpen(true)}
              onMouseLeave={() => setIsHadotiOpen(false)}
            >
              <button className={`flex items-center gap-1 cursor-default ${navLinkClass}`}>
                Hadoti 
                <svg 
                  className={`w-3 h-3 transition-transform duration-300 ${isHadotiOpen ? 'rotate-180' : ''}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 w-56 pt-2 transition-all duration-300 w-[170px] ${isHadotiOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="bg-black/60 backdrop-blur-lg border border-white/20 rounded-lg overflow-hidden shadow-2xl py-4 gap-y-4">
                  {hadotiLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-5 py-2.5 text-sm text-white hover:bg-amber-400/20 hover:text-amber-300 transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/map" className={navLinkClass}>Map</Link>
            <Link href="/contact-us" className={navLinkClass}>Contact Us</Link>
          </nav>

          {/* Mobile Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 shadow-2xl transition-all duration-500 ease-in-out ${isScrolled ? "bg-black/60 py-5 md:py-4]" : "bg-black/40 py-5 md:py-6"}`}>
          <nav className="px-8 py-8 space-y-6">
            <Link href="/" onClick={() => setIsOpen(false)} className="block text-lg font-light">Home</Link>
            <Link href="/explore-kota" onClick={() => setIsOpen(false)} className="block text-lg font-light">Kota</Link>
               <Link href="/itinerary" onClick={() => setIsOpen(false)} className="block text-lg font-light">Itinerary</Link>
            <Link href="/map" onClick={() => setIsOpen(false)} className="block text-lg font-light">Map</Link>
            
            <div className="space-y-4">
              <p className="text-amber-400 text-xs uppercase tracking-[0.2em] font-bold">Explore Hadoti</p>
              <div className="grid grid-cols-1 gap-4">
                {hadotiLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block text-base font-light text-white hover:text-amber-300">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

         
          </nav>
        </div>
      )}
    </header>
  );
}