import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Star } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Modern gym equipment',
      category: 'Equipment'
    },
    {
      src: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'HIIT training session',
      category: 'Classes'
    },
    {
      src: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Strength training area',
      category: 'Strength'
    },
    {
      src: 'https://images.pexels.com/photos/1552244/pexels-photo-1552244.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Group fitness class',
      category: 'Group Classes'
    },
    {
      src: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Personal training',
      category: 'Personal Training'
    },
    {
      src: 'https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Yoga studio',
      category: 'Yoga'
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Miller',
      role: 'Marketing Executive',
      content: 'B FIT has completely transformed my approach to fitness. The trainers are incredible and the community is so supportive!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Robert Chen',
      role: 'Software Engineer',
      content: 'The 24/7 access is perfect for my schedule. Great equipment and the personal training sessions have been game-changing.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Amanda Foster',
      role: 'Teacher',
      content: 'I love the variety of classes offered. From HIIT to yoga, there\'s something for every mood and fitness level.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1552244/pexels-photo-1552244.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const ImageModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <X className="h-8 w-8" />
        </button>
        <img
          src={selectedImage?.src}
          alt={selectedImage?.alt}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
          <h3 className="font-bold text-lg">{selectedImage?.alt}</h3>
          <p className="text-orange-400">{selectedImage?.category}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at our state-of-the-art facilities and vibrant community in action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="font-bold text-lg mb-1">{image.alt}</h3>
                  <p className="text-orange-400">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our <span className="text-orange-500">Members Say</span>
            </h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div>
                <div className="font-bold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-orange-500">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        {selectedImage && <ImageModal />}
      </div>
    </section>
  );
};

export default Gallery;