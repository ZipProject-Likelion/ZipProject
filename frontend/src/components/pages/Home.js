import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards title="인기 큐레이터"/>
      <Cards title="인기 상품"/>
      <Footer />
    </>
  );
}

export default Home;
