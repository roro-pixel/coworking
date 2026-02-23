import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { HomeSpaces } from '../components/home/HomeSpaces';
import { Testimonials } from '../components/home/Testimonials';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <HomeSpaces />  {/* Maintenant c'est HomeSpaces, pas Spaces */}
      <Testimonials />
    </>
  );
};