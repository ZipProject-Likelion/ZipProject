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

const ProductCategory=({match})=> {
  const [products, setProducts]=useState('');

  // product list 가져오기
  const renderProduct = async()=> {
    const response =  await axios.get('/product/product-list/')
    let result=[]
    response.data.map((data)=>{
      if(data.type.includes(match.params.category)){
        console.log('데이터 가구',data)
        result.push(data)
      }
    })
    console.log('필터링 결과입니다', result)
    setProducts(result);
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
        <ProdDropdown title={match.params.category}/>
        <ProductCards title="인기 상품" data={products}/>
      </div>

    </>
  )
}

export default ProductCategory;