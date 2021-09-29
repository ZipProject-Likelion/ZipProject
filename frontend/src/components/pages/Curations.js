import React, {useState, useEffect} from 'react';
import axios from 'axios';

import '../../App.css';
import '../css/Curations.css';
import {Tabs,Tab} from 'react-bootstrap';

import CurationCards from '../CurationCards';
import CurationAdd from '../component/CurationAdd';



// csrf token 설정
// django의 기본 셋팅에 맞추어 axios 통신의 기본 cookiename과 headername설정
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Curations=()=> {
  const [curations, setCurations]=useState();
  const [shared, setShared]=useState();
  const [privated, setPrivated]=useState();
  const checkUser = () =>{
    const user = localStorage.getItem('user');
    console.log(user);
    if (!user){
        window.location.href = "/sign-in";
    }
}

  // curation list 가져오기
  const renderCuration = async()=> {
    const response =  await axios.get('/curation/add/')
    setCurations(response.data);
    let sh=response.data.filter((data)=>data.share===true);
    let pr=response.data.filter((data)=>data.private===true);
    setShared(sh);
    setPrivated(pr);
    console.log(response.data);
    console.log(sh);
    console.log(pr);
  }


  useEffect(()=>{
    renderCuration();
    checkUser();
  },[])



  return(
    <>
      <div className="curation-container">
        <div className="curation-container-header">
          <div className="curation-title-box">Curations</div>
          <div className="curation-add-box">  
          <CurationAdd />
          </div>
        </div>
        <Tabs
          defaultActiveKey="전체"
          id="curation-tab"
          className="curation-tab"
        >
          <Tab eventKey="전체" title="전체">
            <CurationCards data={curations}/>
          </Tab>
          <Tab eventKey="공유" title="공유">
            <CurationCards data={shared}/>
          </Tab>
          <Tab eventKey="개인" title="개인">
          <CurationCards data={privated}/>
            
          </Tab>
        </Tabs>
      </div>

    </>
  )
}

export default Curations;