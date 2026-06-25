import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero Section with Background */}
      <section className="relative h-[50vh] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Football field"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-[2]" />
        </div>

        <div className="relative z-10 container max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-8xl md:text-9xl font-bold mb-2 text-white/90">404</h1>
          <p className="text-xl md:text-2xl font-semibold mb-8 text-white/80">Page not found</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">Looks like you&apos;ve gone off the pitch</h2>
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mb-10">
                The page you are looking for might have been moved, deleted, or perhaps never existed.
                Let&apos;s get you back in the game.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <Link href="/" className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 inline-block text-center">
                  Return to Homepage
                </Link>
                <Link href="/contact" className="border border-gray-300 text-gray-700 text-sm font-medium px-5 py-2.5 inline-block text-center hover:bg-gray-50">
                  Contact Support
                </Link>
              </div>
            </div>

            {/* Featured academies */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-8">Explore our academies</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Manchester Academy', image: '/manchesterhero.jpg', link: '/academy/manchester' },
                  { name: 'London Academy', image: '/training-ground.jpg', link: '/academy/london' },
                  { name: 'Alicante Academy', image: '/atr1.jpeg', link: '/academy/alicante' }
                ].map((academy, i) => (
                  <Link href={academy.link} key={i} className="group block relative h-[200px] overflow-hidden">
                    <Image
                      src={academy.image}
                      alt={academy.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-sm font-semibold text-white">{academy.name}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
