import React, {useState} from 'react';
import {  ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';
import {AiOutlineArrowLeft, AiFillCheckCircle} from "react-icons/ai";


const ThirdOnboard =({prevStage}) =>{
  const[items, setItems]=useState([]);
  const selectItem=(e)=>{
    e.preventDefault();
    console.log(e.target.id);
    e.target.classList.add('selected-item');
    document.getElementById(`check-box-${e.target.name}`).style.display = "block";

  }
    return (
        <>
        <div className="second-onboard-container third-onboard-container">
          <div className="prev-icon">
            <AiOutlineArrowLeft onClick={()=>{prevStage()}}/>
          </div>
            <div className="onboard-title">관심사를 5개 이상 선택해 보세요</div>
            <ImageList sx={{ width: 600, height: 300 }} cols={4} rowHeight={164} className="onboard-imagelist">
            {itemData.map((item,i) => (
                <ImageListItem key={item.img}>
                <div className="onboard-image-item"  >
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        id={item.title}
                        name={i}
                        onClick={selectItem}
                    />
                </div>
                <div className="check-box" id={`check-box-${i}`}><AiFillCheckCircle className="check-icon"/></div>
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
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },

  ];
export default ThirdOnboard;
