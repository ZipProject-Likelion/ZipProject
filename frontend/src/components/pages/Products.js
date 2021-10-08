import React, {useState, useEffect} from 'react';
import axios from 'axios';

import '../../App.css';
import '../css/Products.css';
import {Tabs,Tab, Dropdown, DropdownButton} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


import ProductCards from '../ProductCards';
import BestCards from '../BestCards';
import ProductAdd from './ProductAdd';
import CardItem from '../CardItem';

// csrf token 설정
// django의 기본 셋팅에 맞추어 axios 통신의 기본 cookiename과 headername설정
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';


const Products=()=> {

  const [search, setSearch]=useState('');
  const [searchData, setSearchData]=useState('');
  const [products, setProducts]=useState('');
  const [rendered, setRendered]=useState('');
  const [cat1, setCat1]=useState('');
  const [cat2, setCat2]=useState('');
  const [cat3, setCat3]=useState('');
  const [cat4, setCat4]=useState('');
  const [cat5, setCat5]=useState('');
  const [cat6, setCat6]=useState('');
  const [selCat, setSelCat]=useState('');
  const [selCatStr, setSelCatStr]=useState('전체');
  const [selFilStr, setSelFilStr]=useState('인기순');

  const products_name='전체';
  const _cat1_name='DIY/공구';
  const _cat2_name='패브릭';
  const _cat3_name='가전';
  const _cat4_name='가구';
  const _cat5_name='수납/정리';
  const _cat6_name='장식/조명';

  const fil1_name='인기순';
  const fil2_name='최신순';

  // product list 가져오기
  const renderProduct = async()=> {

    const response =  await axios.get('/product/productlist/')
    console.log(response.data);
    setProducts(response.data);
    let _cat1=response.data.filter((data)=>data.type==='DIY/공구');
    let _cat2=response.data.filter((data)=>data.type==='패브릭');
    let _cat3=response.data.filter((data)=>data.type==='가전');
    let _cat4=response.data.filter((data)=>data.type==='가구');
    let _cat5=response.data.filter((data)=>data.type==='수납/정리');
    let _cat6=response.data.filter((data)=>data.type==='장식/조명');
    setCat1(_cat1);
    setCat2(_cat2);
    setCat3(_cat3);
    setCat4(_cat4);
    setCat5(_cat5);
    setCat6(_cat6);
  }
  const checkUser = () =>{
    const user = localStorage.getItem('user');
    console.log(user);
    if (!user){
        window.location.href = "/sign-in";
    }
  }
  const handleSearch = (e)=>{
    e.preventDefault();

    if(e.target.value){
      setSearch(e.target.value);
    }
  }
  const submitHandler =(e) =>{
    e.preventDefault();
    axios
    .get(`/product/add/?search=${search}`)
    .then((res)=>{
      setSearchData(res.data);
      setRendered(search);
      setSearch('');
      
    })
    .catch(err=>console.log(err));
  }

  useEffect(()=>{
    renderProduct();
    checkUser();
  },[])



  return(
    <>
      <div className="curation-container">
        {/* <div className="curation-container-header">
          <div className="curation-title-box">Products</div>
          <div className="container-header-search">
            <form noValidate autoComplete="off" onSubmit={submitHandler}>
            <TextField
              id="search-box"
              className="search-box"
              variant="outlined"
              color="secondary"
              placeholder="검색어를 입력하세요"
              inputProps={{ 'aria-label': '검색어를 입력하세요' }}
              value={search}
              onChange={handleSearch}
            />
            <IconButton type="submit" className="search-icon-btn" aria-label="search">
              <SearchIcon />
            </IconButton>
            </form>
          </div>
          <div className="curation-add-box">
            <ProductAdd/>
          </div>
        </div> */}

        {/* 추천 상품 */}
        <div className="recommend">
          <div className="container">
            <h3 id="recommend-title">User 님을 위한 상품들</h3>
            <h5 id="recommend-desc">회원님들은 최근 <span className="recommend-tag"><a>#화이트</a></span> 관련 상품들을 많이 보셨어요 &#128064;</h5>
            <BestCards data={products}/>
          </div>
        </div>
        

        {!searchData? (
        <div className="container">
          <div className="dropdowns">
            {/* 카테고리 */}
            <Dropdown id="category-dropdown">
              <Dropdown.Toggle defaultActiveKey="전체" title="전체">
                {selCatStr}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="전체" title="전체" onClick={()=>{setSelCat(products); setSelCatStr(products_name);}}>
                  {products_name}
                </Dropdown.Item>
                <Dropdown.Item eventKey="DIY/공구" title="DIY/공구" onClick={()=>{setSelCat(cat1); setSelCatStr(_cat1_name);}}>
                  {_cat1_name}
                </Dropdown.Item>
                <Dropdown.Item eventKey="패브릭" title="패브릭" onClick={()=>{setSelCat(cat2); setSelCatStr(_cat2_name);}}>
                  {_cat2_name}
                </Dropdown.Item>
                <Dropdown.Item eventKey="가전" title="가전" onClick={()=>{setSelCat(cat3); setSelCatStr(_cat3_name);}}>
                  {_cat3_name}
                </Dropdown.Item>
                <Dropdown.Item eventKey="가구" title="가구" onClick={()=>{setSelCat(cat4); setSelCatStr(_cat4_name);}}>
                  {_cat4_name}
                </Dropdown.Item>
                <Dropdown.Item eventKey="수납/정리" title="수납/정리" onClick={()=>{setSelCat(cat5); setSelCatStr(_cat5_name);}}>
                  {_cat5_name}
                </Dropdown.Item>
                <Dropdown.Item eventKey="장식/조명" title="장식/조명" onClick={()=>{setSelCat(cat6); setSelCatStr(_cat6_name);}}>
                  {_cat6_name}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            {/* 필터 */}
            <Dropdown id="filter-dropdown">
              <Dropdown.Toggle defaultActiveKey="인기순" title="인기순">
                {selFilStr}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="전체" title="전체" onClick={()=>{setSelFilStr(fil1_name);}}>
                  {fil1_name}
                </Dropdown.Item>
                <Dropdown.Item eventKey="DIY/공구" title="DIY/공구" onClick={()=>{setSelFilStr(fil2_name);}}>
                  {fil2_name}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        
        
        <ProductCards data={selCat?selCat:products}/>
        </div>
        ) :
        (
          <>
          <div className="search-result-container">
          <h3 className="search-result-title"><span className="hightlight"> {rendered} </span> 키워드로 검색한 결과입니다.</h3>
          <ProductCards data={searchData}/>
          </div>

          </>
          
        )}
        
        
      </div>

    </>
  )
}

export default Products;