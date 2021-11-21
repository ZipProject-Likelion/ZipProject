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
    .get('/api/recommender/top_tag_list/')
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
    .get('/api/recommender/recommended_products/')
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
    .get('/api/recommender/recommended_curations/')
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
        <div>
          <CurationCards data={recommendcurations}/>
        </div>
        <div>
          <ProductCards data={recommendproducts}/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
