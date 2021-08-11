import React, {useState, useEffect} from 'react';
import '../../App.css';
import Cards from '../Cards';
import axios from 'axios';
import CurationAdd2 from './CurationAdd2';
import { Link } from 'react-router-dom';

// csrf token 설정
// django의 기본 셋팅에 맞추어 axios 통신의 기본 cookiename과 headername설정
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Curations=()=> {
  const [curations, setCurations]=useState();
  const [popup, setPopup]=useState(false);

  // curation list 가져오기
  const renderCuration = async()=> {
    const response =  await axios.get('/api/curation/curation-list/')
    setCurations(response.data);
  }
  function openPopup() {
    setPopup(true)
    console.log(popup);
    console.log('팝업창이 켜집니다');
  }
  function closePopup() {
    setPopup(false)
    console.log(popup);
    console.log('팝업창이 꺼집니다');

  }


  useEffect(()=>{
    renderCuration();
  },[])



  return(
    <>
    {!popup?(
      <>
        <h1 className='curations'>CURATIONS</h1>
        <div className="curation-container">
          <Link to ='/curation-add2'>
          <button onClick={openPopup} className="curation-add-btn">큐레이션 만들기</button>
          </Link>
          <Cards title="인기 큐레이션" data={curations}/>
        </div>
      </>
    ):(
      <CurationAdd2 closePopup={closePopup}/>
    )}
    </>
  )
}

export default Curations;