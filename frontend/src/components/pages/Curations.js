import React ,{useState, useEffect} from 'react';
import '../../App.css';
import Cards from '../Cards';
import axios from 'axios';


// csrf token 설정
// django의 기본 셋팅에 맞추어 axios 통신의 기본 cookiename과 headername설정
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export default function Curations() {
  const [curationList, setCurationList]= useState([]);

  useEffect(()=>{
    renderCurations();
  },[]);

  const renderCurations = async () =>{
    await axios
      .get('/api/curation/curation-list/')
      .then((res)=>
      {
        setCurationList([...res.data])
        console.log(res.data);
      })
      .catch((err)=>console.log(err));
    console.log(curationList);
    console.log('success');
  };

  return(
    <>
    <h1 className='curations'>CURATIONS</h1>;
    <Cards title="인기 큐레이션"/>
    </>
  )
}
