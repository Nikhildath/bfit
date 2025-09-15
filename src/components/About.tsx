import React from 'react';
import { Target, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Goal-Oriented Training',
      description: 'Personalized workout plans tailored to achieve your specific fitness goals.'
    },
    {
      icon: Award,
      title: 'Certified Trainers',
      description: 'Work with experienced, certified professionals who care about your success.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a motivating community of like-minded individuals on their fitness journey.'
    },
    {
      icon: Clock,
      title: '24/7 Access',
      description: 'Train on your schedule with round-the-clock access to our premium facilities.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="block text-orange-500">B FIT?</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At B FIT, we believe fitness is more than just physical exercise – it's about building confidence, 
              creating healthy habits, and transforming your entire lifestyle. Our mission is to provide you with 
              the tools, support, and motivation you need to achieve lasting results.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors">
              Learn More About Us
            </button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gym interior"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">5+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;