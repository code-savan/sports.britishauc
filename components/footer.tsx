import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand/Intro */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">British AUC Sports</h3>
            <p className="text-sm text-gray-600">
              Bridging the gap between education and sports, providing exceptional opportunities for aspiring athletes.
            </p>
          </div>
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-gray-600 hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="https://britishauc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  British AUC
                </a>
              </li>
            </ul>
          </div>
          {/* Contact & Address */}
          <div className="md:col-span-5">
            <h3 className="text-lg font-semibold mb-4">Contact &amp; Offices</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Contact Details */}
              <div className="space-y-3">
                <div>
                  <span className="block text-sm text-gray-600 font-medium">Phone</span>
                  <a href="tel:+447840782759" className="block text-sm text-gray-600 hover:text-primary">+44 7840 782759</a>
                  <a href="tel:+447375654996" className="block text-sm text-gray-600 hover:text-primary">+44 7375 654996</a>
                </div>
                <div>
                  <span className="block text-sm text-gray-600 font-medium">Email</span>
                  <a href="mailto:sports@britishauc.com" className="block text-sm text-gray-600 hover:text-primary">sports@britishauc.com</a>
                </div>
                <div>
                  <span className="block text-sm text-gray-600 font-medium">Website</span>
                  <a href="http://www.sports.britishauc.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-primary">
                    www.sports.britishauc.com
                  </a>
                </div>
              </div>
              {/* Office Addresses */}
              <div className="space-y-3">
                <div>
                  <span className="block text-sm text-gray-600 font-medium">London Office</span>
                  <span className="block text-sm text-gray-600">
                    128 City Road, London, EC1V 2NX United Kingdom
                  </span>
                  <div className="mt-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19858.10829900693!2d-0.088244!3d51.526726000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca671d5df0b%3A0x368e18d29207f698!2s128%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e0!3m2!1sen!2sng!4v1747032924279!5m2!1sen!2sng"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-24 rounded"
                      title="London Office Map"
                    ></iframe>
                  </div>
                </div>
                <div>
                  <span className="block text-sm text-gray-600 font-medium">Manchester Office</span>
                  <span className="block text-sm text-gray-600">
                    19 Bandyfield&apos;s Place, Salford, Manchester M7 2ZT, United Kingdom
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-gray-700">
                    Company No. 15500197 | Registered in England and Wales as BAUC International Ltd
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-center text-gray-600">
            © {new Date().getFullYear()} British AUC Sports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
