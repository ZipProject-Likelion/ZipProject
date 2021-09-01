import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='top-container'>
        <div className='title-section'>
          <h1>🛌 ZIP에서 🛋 당신의 🏠을 꾸며봐요 🛌</h1>
        </div>
        <div id='serach' class='serach_area'>
              <input
                className='serach-input'
                placeholder='원하는 상품과 큐레이션을 검색해보세요!'
              />
              <Button buttonStyle='btn--primary'>검색</Button>
          </div>
        <div className='hero-btns'>
          <Link to='/curation-add2'>
            <Button
              buttonStyle='btn--primary'
              buttonSize='btn--large'
            >
            새 큐레이션 만들기
            </Button>
          </Link>
          <Link to='/item-add'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
          새 상품 추가하기
          </Button>
          </Link>
          </div>
      </div>
      {/* <div className='mid-container'></div>
      <div className='bottom-container'></div> */}
    </div>
  );
}

export default HeroSection;
