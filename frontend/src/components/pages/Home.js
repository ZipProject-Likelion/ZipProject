import React, {useState, useEffect} from 'react';
import '../../App.css';
import CurationCards from '../CurationCards';
import ProductCards from '../ProductCards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import axios from 'axios';



function Home() {
  const [user, setUser]=useState([]);
  const [recommendtags,setRecommendtags]=useState([]);
  const [recommendcurations, setRecommendcurations]=useState([]);
  const [recommendproducts, setRecommendproducts]=useState([]);

  const checkuser=()=>{
    const user=localStorage.getItem('user');
    setUser(user);
    console.log(user);
    if(user){
      setUser(user);
      handleAxios();
    }
  }
  const handleAxios=()=>{
    handleTagsAxios();
    handleCurationsAxios();
    handleProductsAxios();
  }
  const handleTagsAxios=async()=>{
    axios
    .get('http://localhost:8000/api/recommender/top_tag_list/')
    .then((res)=>{
      console.log(res);
      setRecommendtags(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const handleCurationsAxios=async()=>{
    axios
    .get('http://localhost:8000/api/recommender/recommended_curations/')
    .then((res)=>{
      console.log(res);
      setRecommendcurations(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })

  }
  const handleProductsAxios=async()=>{
    axios
    .get('http://localhost:8000/api/recommender/recommended_products/')
    .then((res)=>{
      console.log(res);
      setRecommendproducts(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    checkuser();
  },[]);

  return (
    <>
      <HeroSection />
      <div className="home-body">
        <h3 className="home-section-title">{user} 님을 위한 <span className="user-highlight">추천 큐레이션 리스트</span></h3>
        <hr></hr>
        <div>
          <CurationCards data={recommendcurations}/>
        </div>
         <h3 className="home-section-title">{user} 님을 위한 <span className="user-highlight">추천 상품 리스트</span></h3>
        <hr></hr>
        <div>
          <ProductCards data={recommendproducts}/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
