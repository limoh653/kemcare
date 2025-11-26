import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-900/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Compassionate Care<br />When You Need It Most
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Providing exceptional in-home care and professional cleaning services with dignity, respect, and personalized attention to every client we serve.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('services')}
            className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 font-semibold text-lg flex items-center gap-2 shadow-xl"
          >
            Explore Our Services
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-emerald-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all transform hover:scale-105 font-semibold text-lg shadow-xl"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
