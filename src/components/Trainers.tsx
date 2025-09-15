import React, { useState } from 'react';
import { Mail, Phone, Instagram, Star } from 'lucide-react';

const Trainers = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const trainers = [
    {
      name: 'Sarah Johnson',
      specialty: 'HIIT & Cardio Specialist',
      experience: '8 years',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Sarah specializes in high-intensity training and has helped hundreds of clients achieve their cardio goals.',
      certifications: ['NASM-CPT', 'HIIT Specialist', 'Nutrition Coach'],
      email: 'sarah@bfit.com',
      phone: '+1 (555) 123-4567',
      instagram: '@sarahfitness'
    },
    {
      name: 'Mike Rodriguez',
      specialty: 'Strength & Powerlifting',
      experience: '12 years',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Mike is a former powerlifting champion who focuses on building strength and proper form.',
      certifications: ['CSCS', 'Powerlifting Coach', 'Sports Nutrition'],
      email: 'mike@bfit.com',
      phone: '+1 (555) 234-5678',
      instagram: '@mikelifts'
    },
    {
      name: 'Emma Chen',
      specialty: 'Yoga & Mindfulness',
      experience: '6 years',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/1552244/pexels-photo-1552244.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Emma combines traditional yoga with modern wellness practices for complete mind-body fitness.',
      certifications: ['RYT-500', 'Meditation Teacher', 'Wellness Coach'],
      email: 'emma@bfit.com',
      phone: '+1 (555) 345-6789',
      instagram: '@emmayoga'
    },
    {
      name: 'David Thompson',
      specialty: 'Personal Training',
      experience: '10 years',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'David creates personalized training programs that deliver results through scientific approach.',
      certifications: ['ACSM-CPT', 'Corrective Exercise', 'TRX Instructor'],
      email: 'david@bfit.com',
      phone: '+1 (555) 456-7890',
      instagram: '@davidtrains'
    }
  ];

  const ContactModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4">Contact {selectedTrainer?.name}</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Mail className="h-5 w-5 text-orange-500" />
            <span>{selectedTrainer?.email}</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Phone className="h-5 w-5 text-orange-500" />
            <span>{selectedTrainer?.phone}</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Instagram className="h-5 w-5 text-orange-500" />
            <span>{selectedTrainer?.instagram}</span>
          </div>
          <form className="space-y-3 mt-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            />
            <textarea
              placeholder="Your Message"
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            ></textarea>
          </form>
          <div className="flex space-x-3 mt-6">
            <button
              onClick={() => setShowContactModal(false)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="trainers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-orange-500">Expert Trainers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our certified trainers are passionate about helping you achieve your fitness goals with personalized guidance and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-bold text-sm">{trainer.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-1">{trainer.name}</h3>
                <p className="text-orange-500 font-medium mb-2">{trainer.specialty}</p>
                <p className="text-gray-600 text-sm mb-4">{trainer.experience} experience</p>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{trainer.bio}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Certifications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setSelectedTrainer(trainer);
                    setShowContactModal(true);
                  }}
                  className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Contact Trainer
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {showContactModal && <ContactModal />}
      </div>
    </section>
  );
};

export default Trainers;