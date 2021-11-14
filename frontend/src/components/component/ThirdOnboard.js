import React, {useState, useEffect} from 'react';
import {  ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';
import {AiOutlineArrowLeft, AiFillCheckCircle} from "react-icons/ai";
import axios from 'axios';


const ThirdOnboard =({prevStage}) =>{
  const[items, setItems]=useState([]);
  const[products, setProducts]=useState([]);
  const[curations,setCurations]=useState([]);
  const[productsTag, setProductsTag]=useState([]);
  const[curationsTag, setCurationsTag]=useState([]);


  const selectItem=(e)=>{
    e.preventDefault();
    console.log(e.target.id);
    e.target.classList.add('selected-item');
    document.getElementById(`check-box-${e.target.name}`).style.display = "block";

  }

  const renderData=async()=>{
    axios.get('/product/productlist/')
    .then((res)=>{
      const response=res.data;
      console.log(response);
      setProducts(response);
    })
    .catch((err)=>{
      console.log(err);
    })

    axios.get('/curation/curationlist/')
    .then((res)=>{
      const response=res.data;
      setCurations(response);
    })
    .catch((err)=>{
      console.log(err);
    })

    axios.get('/curation/taglist/')
    .then((res)=>{
      const response=res.data;
      setCurationsTag(response);
    })
    .catch((err)=>{
      console.log(err);
    })

    axios.get('/product/taglist/')
    .then((res)=>{
      const response=res.data;
      setProductsTag(response);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    renderData();
    checkData();
  },[])

  // const getrandomInt=()=>{
  //   let allnum=[]
  //   let newnum=[];
  //   while(newnum.length <5){
  //     var movenum = allnum.splice(Math.floor(Math.random() * allnum.length),1)[0]
  //     newnum.push(movenum)
  //   }
  //   console.log(newnum);
  // }


  const checkData=()=>{
    // getrandomInt();
    // let chosen_id=[];
    // for(let i=0; i<=5; i++){
    //   var random= Math.floor(Math.random() *20) % 5;
    //   if(chosen_id.indexOf(random)===-1){
    //     chosen_id.push(random);
    //   }
    //   else{
    //     i--;
    //   }
    // }
    // console.log(chosen_id);

    // let tmp=[];
    // for(let i=0;chosen_id.length; i++){
    //   tmp.push(products[chosen_id[i]]);
    // }
    // console.log(tmp);
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
            <ImageList sx={{ width: 600, height: 50}} cols={5} rowHeight={100} className="onboard-imagelist">
            {curations.map((item,i) => (
                <ImageListItem key={item.img}>
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
