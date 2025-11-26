import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Margaret Thompson',
      role: 'Client Family Member',
      content: 'The care team has been absolutely wonderful with my mother. They treat her with such respect and kindness, and I can see how much happier she is. The consistency and professionalism give our family complete peace of mind.',
      rating: 5,
    },
    {
      name: 'Robert Chen',
      role: 'Personal Care Client',
      content: 'After my surgery, I needed help with daily activities. The compassionate caregivers made me feel comfortable and supported throughout my recovery. Their attention to detail and genuine care made all the difference.',
      rating: 5,
    },
    {
      name: 'Jennifer Williams',
      role: 'Cleaning Services Client',
      content: 'I use their commercial cleaning services for my office, and the results are outstanding. The team is reliable, thorough, and always goes above and beyond. My workspace has never looked better!',
      rating: 5,
    },
    {
      name: 'David Martinez',
      role: 'Respite Care Client',
      content: 'As a full-time caregiver for my wife, their respite care service has been a lifesaver. Knowing she is in capable, caring hands allows me to recharge. The staff is professional, punctual, and truly compassionate.',
      rating: 5,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who have experienced our exceptional care
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 relative"
            >
              <Quote className="text-emerald-200 absolute top-4 right-4" size={48} />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-2xl shadow-xl text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Join Our Family of Satisfied Clients</h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Experience the difference that compassionate, professional care can make in your life or the life of your loved ones.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-emerald-600 px-8 py-3 rounded-full hover:bg-gray-50 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
