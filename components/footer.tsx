import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-3">
            <div className="bg-white p-2 inline-block mb-4">
              <Image
                src="/logo.png"
                alt="British AUC Sport"
                width={140}
                height={42}
                className="block"
              />
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Bridging the gap between education and sports, providing exceptional opportunities for aspiring athletes worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-medium text-white/50 tracking-[0.1em] uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-xs text-white/40 hover:text-white/80 transition-colors">About Us</Link></li>
              <li><Link href="/events" className="text-xs text-white/40 hover:text-white/80 transition-colors">Events</Link></li>
              <li><Link href="/contact" className="text-xs text-white/40 hover:text-white/80 transition-colors">Contact</Link></li>
              <li><Link href="/applynow" className="text-xs text-white/40 hover:text-white/80 transition-colors">Apply Now</Link></li>
            </ul>

            <h4 className="text-xs font-medium text-white/50 tracking-[0.1em] uppercase mb-4 mt-6">Forms</h4>
            <ul className="space-y-2.5">
              <li><Link href="/forms/medical-profile" className="text-xs text-white/40 hover:text-white/80 transition-colors">Medical Profile</Link></li>
              <li><Link href="/forms/refund-request" className="text-xs text-white/40 hover:text-white/80 transition-colors">Refund Request</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-medium text-white/50 tracking-[0.1em] uppercase mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><Link href="/privacy" className="text-xs text-white/40 hover:text-white/80 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-xs text-white/40 hover:text-white/80 transition-colors">Terms of Service</Link></li>
              <li>
                <a href="https://britishauc.com" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white/80 transition-colors">
                  British AUC
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-5">
            <h4 className="text-xs font-medium text-white/50 tracking-[0.1em] uppercase mb-4">Contact &amp; Offices</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-[11px] font-medium text-white/30 uppercase tracking-[0.1em] mb-1">Phone</p>
                  <a href="tel:+447840782759" className="block text-xs text-white/40 hover:text-white/80 transition-colors">+44 7840 782759</a>
                  <a href="tel:+447375654996" className="block text-xs text-white/40 hover:text-white/80 transition-colors">+44 7375 654996</a>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-white/30 uppercase tracking-[0.1em] mb-1">Email</p>
                  <a href="mailto:sports@britishauc.com" className="block text-xs text-white/40 hover:text-white/80 transition-colors">sports@britishauc.com</a>
                </div>
              </div>
              <div className="space-y-4">
                
                <div>
                  <p className="text-[11px] font-medium text-white/30 uppercase tracking-[0.1em] mb-1">London Office</p>
                  <p className="text-xs text-white/40 leading-relaxed">
                    128 City Road, London, EC1V 2NX, United Kingdom
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-white/30 uppercase tracking-[0.1em] mb-1">Manchester Office</p>
                  <p className="text-xs text-white/40 leading-relaxed">
                    19 Bandyfield&apos;s Place, Salford, Manchester M7 2ZT, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} British AUC Sport. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Company No. 15500197 | BAUC International Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
