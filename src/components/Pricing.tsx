import React from 'react';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const Pricing = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+1 (555) 123-BFIT',
      secondary: '+1 (555) 123-2348',
      description: 'Speak directly with our team',
      action: 'Call Now',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'info@bfit.com',
      secondary: 'support@bfit.com',
      description: 'Get detailed information via email',
      action: 'Send Email',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      primary: '+1 (555) 123-BFIT',
      secondary: 'Quick responses',
      description: 'Chat with us instantly',
      action: 'Message Us',
      color: 'from-green-400 to-green-500'
    }
  ];

  const handleContact = (method, primary) => {
    switch (method) {
      case 'Call Now':
        window.open(`tel:${primary}`, '_self');
        break;
      case 'Send Email':
        window.open(`mailto:${primary}`, '_self');
        break;
      case 'Message Us':
        window.open(`https://wa.me/${primary.replace(/\D/g, '')}`, '_blank');
        break;
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-orange-500">B FIT</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your fitness journey? Get in touch with us today and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
            >
              <div className={`bg-gradient-to-r ${method.color} p-6 text-white text-center`}>
                <method.icon className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                <p className="opacity-90">{method.description}</p>
              </div>
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="text-lg font-bold text-gray-900 mb-1">{method.primary}</div>
                  <div className="text-gray-600">{method.secondary}</div>
                </div>
                
                <button
                  onClick={() => handleContact(method.action, method.primary)}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  {method.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Business Hours */}
        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Hours</h3>
            <p className="text-gray-600">We're here to help you achieve your fitness goals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Regular Hours</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">5:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span className="font-medium">6:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Member Access</h4>
              <div className="bg-orange-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                <div className="text-orange-700 font-medium">Premium Members</div>
                <div className="text-sm text-orange-600 mt-1">Round-the-clock access</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Quick Contact Form</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500"
              />
              <select className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500">
                <option>I'm interested in...</option>
                <option>Membership Information</option>
                <option>Personal Training</option>
                <option>Group Classes</option>
                <option>Corporate Wellness</option>
                <option>Facility Tour</option>
              </select>
              <textarea
                placeholder="Tell us about your fitness goals..."
                rows="3"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;