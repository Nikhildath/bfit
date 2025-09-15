import React, { useState } from 'react';
import { Zap, Dumbbell, Heart, Users, User, Calendar } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Zap,
      title: 'HIIT Training',
      description: 'High-intensity interval training for maximum calorie burn and fitness gains.',
      features: ['30-45 minute sessions', 'Small group classes', 'Equipment provided', 'All fitness levels welcome'],
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle, increase strength, and improve your overall physique.',
      features: ['Free weights & machines', 'Progressive programs', 'Proper form instruction', 'Track your progress'],
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Heart,
      title: 'Cardio Programs',
      description: 'Improve cardiovascular health with varied and engaging cardio workouts.',
      features: ['Treadmills & bikes', 'Group cardio classes', 'Heart rate monitoring', 'Custom playlists'],
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: 'Group Fitness',
      description: 'Join energetic group classes that make fitness fun and social.',
      features: ['Varied class schedule', 'Experienced instructors', 'All skill levels', 'Community atmosphere'],
      image: 'https://images.pexels.com/photos/1552244/pexels-photo-1552244.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: User,
      title: 'Personal Training',
      description: 'One-on-one coaching tailored specifically to your goals and needs.',
      features: ['Certified trainers', 'Custom workout plans', 'Nutritional guidance', 'Flexible scheduling'],
      image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Calendar,
      title: 'Yoga & Flexibility',
      description: 'Improve flexibility, balance, and mindfulness through yoga practice.',
      features: ['Multiple yoga styles', 'Beginner to advanced', 'Meditation sessions', 'Stress relief focus'],
      image: 'https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of fitness programs designed to help you reach your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeService === index
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <service.icon className="h-6 w-6" />
                    <span className="font-bold">{service.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    {React.createElement(services[activeService].icon, {
                      className: "h-8 w-8 text-orange-500"
                    })}
                    <h3 className="text-2xl font-bold text-gray-900">
                      {services[activeService].title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {services[activeService].description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {services[activeService].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors">
                    Book This Service
                  </button>
                </div>
                
                <div>
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;