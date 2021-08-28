import React, {useState, useEffect} from 'react';
import '../../App.css';
import ProductCards from '../ProductCards';
import ProdDropdown from '../component/ProdDropdown';
import axios from 'axios';
import ProductAdd from './ProductAdd';
import { Link } from 'react-router-dom';

// csrf token 설정
// django의 기본 셋팅에 맞추어 axios 통신의 기본 cookiename과 headername설정
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Products=()=> {
  const [products, setProducts]=useState('');

  // product list 가져오기
  const renderProduct = async()=> {
    const response =  await axios.get('/product/productlist/')
    setProducts(response.data);
  }
  const checkUser = () =>{
    const user = localStorage.getItem('user');
    console.log(user);
    if (!user){
        window.location.href = "/sign-in";
    }
}

  useEffect(()=>{
    renderProduct();
    checkUser();
  },[])



  return(
    <>
      <div className="curation-container">
        <ProductAdd/>
        <ProdDropdown title='카테고리' />
        <ProductCards title="인기 상품" data={products}/>
      </div>

    </>
  )
}

export default Products;