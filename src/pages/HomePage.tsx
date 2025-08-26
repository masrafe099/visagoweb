import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ImageSlider from '../components/home/ImageSlider';
import VisaCategories from '../components/home/VisaCategories';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessTimeline from '../components/home/ProcessTimeline';
import CountriesSection from '../components/home/CountriesSection';
import Testimonials from '../components/home/Testimonials';
import SpecialOffers from '../components/home/SpecialOffers';
import FAQ from '../components/home/FAQ';
import ContactForm from '../components/home/ContactForm';
import TrustSignals from '../components/home/TrustSignals';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ImageSlider />
      <VisaCategories />
      <WhyChooseUs />
      <ProcessTimeline />
      <CountriesSection />
      <Testimonials />
      <SpecialOffers />
      <FAQ />
      <ContactForm />
      <TrustSignals />
    </div>
  );
};

export default HomePage;