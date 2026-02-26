import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ruth Malonga',
    role: 'Etudiante',
    content: 'Un cadre de travail exceptionnel ! L\'ambiance est propice à la concentration et les rencontres sont enrichissantes.',
    rating: 5
  },
  {
    name: 'Martin Kalolo',
    role: 'Startup founder',
    content: 'Depuis que j\'ai installé mon équipe ici, la productivité a explosé. Les services sont top.',
    rating: 5
  },
  {
    name: 'Marie Makaya',
    role: 'Architecte',
    content: 'Les espaces sont magnifiques et parfaitement adaptés à mon métier. Je recommande vivement !',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-violet-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
            Découvrez ce que nos membres disent de leur expérience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-fuchsia-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-fuchsia-600 font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};