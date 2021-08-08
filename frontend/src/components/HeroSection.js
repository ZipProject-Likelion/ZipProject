import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/interior_home.mp4' autoPlay loop muted />
      <h1>ZIP 서비스 시작하기</h1>
      <p>Zipper들과 당신의 취향을 공유해보세요</p>
      <div className='hero-btns'>
        <Link to='/curation-add'>
          <Button
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
          큐레이션 만들기
          </Button>
        </Link>
        <Link to='/item-add'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          상품 등록하기
        </Button>
        </Link>

      </div>
    </div>
  );
}

export default HeroSection;
