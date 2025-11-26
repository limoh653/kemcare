import { Heart, Users, Coffee, Move, Sparkles, Home, Truck, Shield } from 'lucide-react';

export default function Services() {
  const careServices = [
    {
      icon: Heart,
      title: 'Personal Care Assistance',
      description: 'Professional support with daily activities including bathing, grooming, dressing, and medication reminders to maintain independence and dignity.',
    },
    {
      icon: Users,
      title: 'Companionship',
      description: 'Meaningful social interaction, conversation, and engaging activities to combat loneliness and enhance emotional well-being.',
    },
    {
      icon: Coffee,
      title: 'Respite Care',
      description: 'Temporary relief for family caregivers, providing professional care while you take the break you deserve.',
    },
    {
      icon: Move,
      title: 'Mobility Support',
      description: 'Assistance with safe transfers, walking support, and mobility aids to help maintain physical independence.',
    },
  ];

  const cleaningServices = [
    {
      icon: Sparkles,
      title: 'Professional Cleaning',
      description: 'Commercial and residential cleaning services tailored to your needs, ensuring spotless and sanitized spaces.',
    },
    {
      icon: Home,
      title: 'General Housekeeping',
      description: 'Regular maintenance including dusting, vacuuming, mopping, and organizing to keep your home fresh and tidy.',
    },
    {
      icon: Truck,
      title: 'Move In/Out Cleaning',
      description: 'Comprehensive deep cleaning for property transitions, ensuring spaces are pristine for new occupants.',
    },
    {
      icon: Shield,
      title: 'Sanitation Services',
      description: 'Professional-grade disinfection and sanitization to maintain the highest standards of cleanliness and safety.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive care and cleaning solutions designed to meet your unique needs
          </p>
        </div>

        {/* Personal Care Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Personal Care Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-emerald-600" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cleaning Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cleaning Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cleaningServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-teal-600" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Steps */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 md:p-12 rounded-2xl shadow-xl text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">How to Book Our Services</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Contact Us', desc: 'Call, email, or fill out our contact form' },
              { step: 2, title: 'Free Consultation', desc: 'Discuss your needs and preferences' },
              { step: 3, title: 'Customize Plan', desc: 'We create a tailored service plan' },
              { step: 4, title: 'Schedule Service', desc: 'Begin receiving exceptional care' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-white/90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
