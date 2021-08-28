import React, {useState, useEffect} from 'react';

import '../../App.css';
import '../css/Curations.css';

import CurationCards from '../CurationCards';
import axios from 'axios';
import CurationAdd from '../component/CurationAdd';



// csrf token 설정
// django의 기본 셋팅에 맞추어 axios 통신의 기본 cookiename과 headername설정
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Curations=()=> {
  const [curations, setCurations]=useState();

  // curation list 가져오기
  const renderCuration = async()=> {
    const response =  await axios.get('/api/curationlist/')
    setCurations(response.data);
    console.log(response.data);
  }


  useEffect(()=>{
    renderCuration();
  },[])



  return(
    <>
      <div className="curation-container">
        <div className="curation-container-header">
          <div className="curation-title-box">큐레이션</div>
          <div className="curation-add-box">  
          <CurationAdd />
          </div>
        </div>
        <CurationCards data={curations}/>
      </div>

    </>
  )
}

export default Curations;