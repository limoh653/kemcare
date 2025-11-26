import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">ComfortCare</h3>
            <p className="text-gray-400 leading-relaxed">
              Providing compassionate care and professional cleaning services with dedication, respect, and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+15551234567" className="hover:text-emerald-400 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@comfortcare.com" className="hover:text-emerald-400 transition-colors">
                  info@comfortcare.com
                </a>
              </li>
              <li>Greater Metro Area</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="text-red-500 fill-red-500" size={16} /> for those we care about
          </p>
          <p className="text-gray-500 text-sm mt-2">
            &copy; {new Date().getFullYear()} ComfortCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
