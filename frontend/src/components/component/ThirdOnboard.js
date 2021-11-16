/* eslint-disable no-fallthrough */
import React, {useState, useEffect} from 'react';
import { Button, ImageList, ImageListItem, ImageListItemBar , Checkbox ,FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import {AiOutlineArrowLeft, AiFillCheckCircle} from "react-icons/ai";
import axios from 'axios';


const ThirdOnboard =({prevStage}) =>{
  const[items, setItems]=useState([]);
  const[products, setProducts]=useState([]);
  const[curations,setCurations]=useState([]);
  const[productsTag, setproductsTag]=useState([]);
  const[curationsTag, setcurationsTag]=useState([]);
  const [likedCurations, setLikedCurations]=useState([]);
  const [likedProducts, setLikedProducts]=useState([]);
  const [likedCurationTags, setLikedCurationTag]=useState([]);
  const [likedProductsTags, setLikedProductsTag]=useState([]);
  const [request, setRequest]=useState([]);
  const selectItem=(e)=>{
    e.preventDefault();
    const {name, id}=e.target;
    e.target.classList.add('selected-item');
    document.getElementById(`check-box-${name}`).style.display = "block";
    setLikedCurations(likedCurations=>[...likedCurations, parseInt(name)]);
    console.log(likedCurations);
  }

  const selectItem2=(e)=>{
    e.preventDefault();
    const {name, id}=e.target;
    e.target.classList.add('selected-item');
    document.getElementById(`check-box2-${name}`).style.display = "block";
    setLikedProducts(likedProducts=>[...likedProducts, parseInt(name)]);
    console.log(likedProducts);
  }
  
  const checkBoxhandle1=(e)=>{
    e.preventDefault();
    const {name}=e.target;
    if(name!==NaN){
      setLikedCurationTag(likedCurationTags=>[...likedCurationTags, parseInt(name)]);
    }
    console.log(likedCurationTags);
  }
  const checkBoxhandle2=(e)=>{
    e.preventDefault();
    const {name}=e.target;
    if(name!==NaN){
      setLikedProductsTag(likedProductsTags=>[...likedProductsTags, parseInt(name)]);
    }  
    console.log(likedProductsTags);
  }

  const renderData1=async()=>{
    axios.get('http://localhost/api/product/productlist/')
    .then((res)=>{
      const response=res.data;
      getrandomInt(response,1);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const renderData2=async()=>{
    axios.get('http://localhost/api/curation/curationlist/')
    .then((res)=>{
        const response=res.data;
        getrandomInt(response,2);
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  const renderData3=async()=>{
    axios.get('http://localhost/api/curation/taglist/')
    .then((res)=>{
      const response=res.data;
      getrandomInt3(response);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

   const renderData4=async()=>{
    axios.get('http://localhost/api/product/taglist/')
    .then((res)=>{
      const response=res.data;
      getrandomInt2(response);
    })
    .catch((err)=>{
      console.log(err);
    })
   }

  useEffect(()=>{
    renderData1();
    renderData2();
    renderData3();
    renderData4();
    checkData();

  },[])
  
  const handleTestBtn=()=>{
    const testBtn=document.getElementById('api-test-btn');
    testBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      handleAxios();
    })
  }

  useEffect(()=>{
    const user="test1234";

    const request_data={
      target_user:user,
      products:likedProducts,
      product_tags:likedProductsTags,
      curations:likedCurations,
      curation_tags:likedCurationTags
    }
    setRequest(request_data);
  },[likedCurationTags, likedCurations, likedProducts, likedProductsTags])


  const getrandomInt=(data, option)=>{
    let allnum=[]
    // allnum 데이터 숫자만큼 채우기
    let newarray=[];
    for(let i=0; i<data.length; i++){
      allnum.push(i);
    }
    while(newarray.length <5){
      var movenum = allnum.splice(Math.floor(Math.random() * allnum.length),1)[0]
      newarray.push(data[movenum])
    }
    switch(option){
      case 1: setProducts(newarray);
      case 2: setCurations(newarray);
      default:  ;
    }
  }

  const getrandomInt2=(data)=>{
    let allnum=[]
    // allnum 데이터 숫자만큼 채우기
    let newarray=[];
    for(let i=0; i<data.length; i++){
      allnum.push(i);
    }
    while(newarray.length <5){
      var movenum = allnum.splice(Math.floor(Math.random() * allnum.length),1)[0]
      newarray.push(data[movenum])
    }
    setproductsTag(newarray);
  }

  const getrandomInt3=(data)=>{
    let allnum=[]
    // allnum 데이터 숫자만큼 채우기
    let newarray=[];
    for(let i=0; i<data.length; i++){
      allnum.push(i);
    }
    while(newarray.length <5){
      var movenum = allnum.splice(Math.floor(Math.random() * allnum.length),1)[0]
      newarray.push(data[movenum])
    }
    setcurationsTag(newarray);
  }


  const handleAxios=async (e)=>{

    const request_data={
      target_user:request.target_user,
      curations:request.curations,
      curation_tags:request.curation_tags,
      products:request.products,
      product_tags:request.product_tags
    }
    console.log(request_data);
    axios
    .post('http://localhost/api/recommender/add/',JSON.stringify(request_data),{
      headers:{
        'content-type':'application/json',
      }
    })
    .then((res)=>{
      alert('성공했습니다.');
    })
    .catch((err)=>{
      alert('실패했습니다.')
    })
  }

  const checkData=()=>{
    console.log(products);
    console.log(curations);
    console.log(productsTag);
    console.log(curationsTag);
  }

    return (
        <>
        <div className="second-onboard-container third-onboard-container">
          <div className="prev-icon">
            <AiOutlineArrowLeft onClick={()=>{prevStage()}}/>
          </div>
            <div className="onboard-title">관심사를 5개 이상 선택해 보세요</div>
            <ImageList sx={{ width: 600, height: 50}} cols={5} rowHeight={120} className="onboard-imagelist">
            {curations.map((item,i) => (
                <ImageListItem key={item.image}>
                <div className="onboard-image-item"  >
                    <img
                        src={`${item.image}?w=100&h=100&fit=crop&auto=format`}
                        srcSet={`${item.image}?w=100&h=100&fit=crop&auto=format&dpr=2 3x`}
                        alt={item.title}
                        loading="lazy"
                        id={item.title}
                        name={item.id}
                        onClick={selectItem}
                    />
                </div>
                <div className="check-box" id={`check-box-${item.id}`}><AiFillCheckCircle className="check-icon"/></div>
                <ImageListItemBar
                title={item.title}
                position="bottom"
                />
                </ImageListItem>
            ))}
            </ImageList>
            <ImageList sx={{ width: 600, height: 50}} cols={5} rowHeight={120} className="onboard-imagelist">
            {products.map((item,i) => (
                <ImageListItem key={item.image}>
                <div className="onboard-image-item"  >
                    <img
                        src={`${item.image}?w=100&h=100&fit=crop&auto=format`}
                        srcSet={`${item.image}?w=100&h=100&fit=crop&auto=format&dpr=2 6x`}
                        alt={item.title}
                        loading="lazy"
                        id={item.title}
                        name={item.id}
                        onClick={selectItem2}
                        className="third-onboard-image"
                    />
                </div>
                <div className="check-box" id={`check-box2-${item.id}`}><AiFillCheckCircle className="check-icon"/></div>
                <ImageListItemBar
                title={item.title}
                position="bottom"
                />
                </ImageListItem>
            ))}
            </ImageList>
            <FormControl component="fieldset" className="third-onboard-radiogroup">
              {curationsTag.map((item)=>(
                  <FormControlLabel value={item.name} control={<Checkbox />} onClick={checkBoxhandle1} label={item.name} name={item.id}/>
               ))}
            </FormControl>
              <FormControl component="fieldset" className="third-onboard-radiogroup">
              {productsTag.map((item)=>(
                  <FormControlLabel value={item.name} control={<Checkbox />} onClick={checkBoxhandle2} label={item.name} name={item.id}/>
               ))}
            </FormControl>
            <div><a id="api-test-btn" onClick={handleTestBtn}>API TEST BUTTON</a></div>
        </div>
        </>
    )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    }

  ];
export default ThirdOnboard;
