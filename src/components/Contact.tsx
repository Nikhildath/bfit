import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Fitness Street', 'Downtown District', 'City, State 12345']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-BFIT', '+1 (555) 123-2348']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@bfit.com', 'support@bfit.com']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Monday - Friday: 5:00 AM - 11:00 PM', 'Saturday - Sunday: 6:00 AM - 10:00 PM', '24/7 Member Access Available']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your fitness journey? Contact us today and let's discuss how B FIT can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <info.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="font-bold text-gray-900">{info.title}</h3>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-gray-500 text-sm">Click to view directions</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                    />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="">Select Subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="group-classes">Group Classes</option>
                      <option value="corporate">Corporate Wellness</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  ></textarea>
                  
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm mb-2">Prefer to call directly?</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Call Now
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;