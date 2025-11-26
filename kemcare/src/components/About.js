import { Heart, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To enhance the quality of life for our clients by providing compassionate, reliable, and personalized care services that promote independence, dignity, and well-being in the comfort of their own homes.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted and respected care provider in our community, recognized for our unwavering commitment to excellence, innovation in care delivery, and the positive impact we make in the lives of those we serve.
            </p>
          </div>

          {/* Values */}
          <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-2">•</span>
                <span><strong>Compassion:</strong> Treating every client with empathy and kindness</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-2">•</span>
                <span><strong>Integrity:</strong> Honest and ethical in all we do</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-2">•</span>
                <span><strong>Excellence:</strong> Delivering the highest quality care</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-2">•</span>
                <span><strong>Respect:</strong> Honoring dignity and individuality</span>
              </li>
            </ul>
          </div>
        </div>

        {/* About Description */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
          <p className="text-lg text-gray-700 text-center leading-relaxed max-w-4xl mx-auto">
            With years of experience in both personal care and professional cleaning services, our dedicated team understands the unique needs of each client. We pride ourselves on building lasting relationships based on trust, reliability, and exceptional service. Our carefully selected and trained staff members are committed to making a meaningful difference in the lives of those we serve, one day at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
