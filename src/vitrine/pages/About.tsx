import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const About: React.FC = () => {
  const stats = [
    { label: 'Espaces', value: '10+' },
    { label: 'Membres actifs', value: '500+' },
    { label: 'Salles de réunion', value: '50+' },
    { label: 'Satisfaction', value: '4.9/5' }
  ];

  const values = [
    {
      icon: Users,
      title: 'Communauté',
      description: 'Nous croyons en la force du collectif et favorisons les échanges entre nos membres'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Nos espaces évoluent constamment pour offrir le meilleur environnement de travail'
    },
    {
      icon: Heart,
      title: 'Bien-être',
      description: 'Le confort et l\'équilibre de nos membres sont au cœur de nos préoccupations'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chacun de nos services'
    }
  ];

  const team = [
    {
      name: 'Hervé Matoka',
      role: 'Fondateur & CEO',
      bio: 'Ancien freelance, il a créé CoWorkSpace pour répondre aux besoins des travailleurs indépendants.'
    },
    {
      name: 'Clarisse Imoni',
      role: 'Directrice des opérations',
      bio: '10 ans d\'expérience dans la gestion d\'espaces de coworking.'
    },
    {
      name: 'Bernard Teki',
      role: 'Responsable communauté',
      bio: 'Passionné par le networking et les événements professionnels.'
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]">
            À propos de nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
            Découvrez l'histoire de CoWorkSpace et notre vision du travail de demain
          </p>
        </div>

        {/* Histoire */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
            <p className="text-gray-600 mb-4">
              Fondé en 2024, CoWorkSpace est né d'une simple observation : les professionnels 
              d'aujourd'hui recherchent plus qu'un simple bureau. Ils veulent un lieu qui 
              inspire, connecte et propulse leur activité.
            </p>
            <p className="text-gray-600 mb-4">
              Notre fondateur a lui-même expérimenté l'isolement du travail en freelance 
              et la rigidité des espaces de bureau traditionnels. Il a imaginé CoWorkSpace 
              comme une solution hybride.
            </p>
            <p className="text-gray-600">
              Aujourd'hui, nous sommes fiers d'accueillir plus de 500 membres dans nos 
              10 espaces à travers Pointe-Noire.
            </p>
          </div>
          <div className="relative opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.4s' }}>
            <div className="absolute -inset-4 bg-fuchsia-100 rounded-2xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Notre équipe"
              className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="bg-fuchsia-50 rounded-3xl p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <div className="text-4xl font-bold text-fuchsia-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Valeurs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nos valeurs</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                  <div className="bg-fuchsia-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-fuchsia-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Équipe */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Notre équipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                <div className="w-32 h-32 bg-fuchsia-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-fuchsia-600" size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-fuchsia-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Rejoignez notre communauté</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Prêt à transformer votre façon de travailler ? Venez visiter nos espaces.
          </p>
          <Button variant="primary" size="lg">
            Planifier une visite
          </Button>
        </div>
      </div>
    </div>
  );
};