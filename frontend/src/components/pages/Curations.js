import React, {useState, useEffect} from 'react';
import '../../App.css';
import CurationCards from '../CurationCards';
import axios from 'axios';
import CurationAdd2 from './CurationAdd2';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import CurationAdd3 from './CurationAdd3';


// csrf token 설정
// django의 기본 셋팅에 맞추어 axios 통신의 기본 cookiename과 headername설정
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Curations=()=> {
  const [curations, setCurations]=useState();

  // curation list 가져오기
  const renderCuration = async()=> {
    const response =  await axios.get('/api/curation/curation-list/')
    setCurations(response.data);
  }


  useEffect(()=>{
    renderCuration();
  },[curations])



  return(
    <>
      <div className="curation-container">
        <Link to='curation-add'>
        <Button variant="primary">큐레이션 만들기</Button>
        </Link>
        <CurationCards title="인기 큐레이션" data={curations}/>
      </div>

    </>
  )
}

export default Curations;