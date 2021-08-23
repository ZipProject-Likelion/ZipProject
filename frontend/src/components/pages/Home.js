import React from 'react';
import '../../App.css';
import CurationCards from '../CurationCards';
import ProductCards from '../ProductCards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <CurationCards title="인기 큐레이터"/>
      <ProductCards title="인기 상품"/>
      <Footer />
    </>
  );
}

export default Home;
