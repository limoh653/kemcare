import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

// Use environment variable for backend URL, fallback to localhost
const API_URL = process.env.REACT_APP_API_URL || 'https://kem-care-fd8v.onrender.com/contact';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {/* Phone */}
              <a
                href="tel:+15551234567"
                className="flex items-start p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="bg-emerald-100 p-3 rounded-lg group-hover:bg-emerald-200 transition-colors">
                  <Phone className="text-emerald-600" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-emerald-600 font-semibold text-lg">(204) 333-4090</p>
                  <p className="text-gray-600 text-sm">Click to call</p>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-start p-4 bg-white rounded-xl shadow-md">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Mail className="text-teal-600" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-700">jeronokemboi99@gmail.com</p>
                  <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              {/* Service Area */}
              <div className="flex items-start p-4 bg-white rounded-xl shadow-md">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <MapPin className="text-cyan-600" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Service Area</h4>
                  <p className="text-gray-700">Serving the Greater Metro Area</p>
                  <p className="text-gray-600 text-sm">Contact us to confirm coverage</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start p-4 bg-white rounded-xl shadow-md">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Clock className="text-emerald-600" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Hours of Operation</h4>
                  <div className="text-gray-700">
                    <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                    <p>Saturday: 8:00 AM - 6:00 PM</p>
                    <p>Sunday: 9:00 AM - 5:00 PM</p>
                  </div>
                  <p className="text-emerald-600 text-sm mt-1">24/7 Emergency Support Available</p>
                </div>
              </div>
            </div>

            {/* Immediate Assistance */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 rounded-xl text-white">
              <h4 className="font-bold text-xl mb-2">Need Immediate Assistance?</h4>
              <p className="mb-4">Our team is ready to help you right away.</p>
              <a
                href="tel:+15551234567"
                className="inline-block bg-white text-emerald-600 px-6 py-3 rounded-full hover:bg-gray-50 transition-all font-semibold"
              >
                Call Now: (555) 123-4567
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700">
                  Thank you for reaching out! We'll get back to you shortly.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="personal-care">Personal Care Assistance</option>
                    <option value="companionship">Companionship</option>
                    <option value="respite-care">Respite Care</option>
                    <option value="mobility-support">Mobility Support</option>
                    <option value="commercial-cleaning">Commercial Cleaning</option>
                    <option value="residential-cleaning">Residential Cleaning</option>
                    <option value="deep-cleaning">Deep Cleaning</option>
                    <option value="move-cleaning">Move In/Out Cleaning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 font-semibold text-lg flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
