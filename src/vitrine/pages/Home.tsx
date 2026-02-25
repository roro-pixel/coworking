import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { Location } from '../components/home/Location';
import { MembershipPlans } from '../components/home/MembershipPlans';
import { HomeSpaces } from '../components/home/HomeSpaces';
import { Testimonials } from '../components/home/Testimonials';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Location />               
      <MembershipPlans />         
      <HomeSpaces />              
      <Testimonials />
    </>
  );
};