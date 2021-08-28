import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ProductCards({title, data}) {
  let remain=[]

  const rendering = () =>{
    let result=[];
    let render=[];
    for (let i=0; i<data.length; i++){
      if (i%3===2){
        result.push(data[i])
        console.log('첫번째 데이터', result[0])
        console.log('두번째 데이터', result[1])
        console.log('세번쨰 데이터', result[2])

        render.push(
          <ul className='cards__items'>
          <CardItem
                key={result[0].id}
                id={result[0].id}
                src={result[0].image}
                text= {result[0].title}
                label={result[0].type}
                user={result[0].user}
                path= {`/product-detail/${result[0].id}`}
          />
          <CardItem
                key={result[1].id}
                id={result[1].id}
                src={result[1].image}
                text= {result[1].title}
                label={result[1].type}
                user={result[0].user}
                path= {`/product-detail/${result[1].id}`}
          />
          <CardItem
                key={result[2].id}
                id={result[2].id}
                src={result[2].image}
                text= {result[2].title}
                label={result[2].type}
                user={result[0].user}
                path= {`/product-detail/${result[2].id}`}
          />
        </ul>
        )
        result=[];
      }
      else{
        result.push(data[i])
      }
    }

    result.map((data)=>{
      remain.push(data)
    })
    return render;
  }
  console.log(data)
  return (
    <div className='cards'>
      <h1>{title}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        {data&&rendering()}
          <ul className='cards__items'>
            {!remain? <></>:
            ( 
              remain.map(product=>(
                <CardItem
                key={product.id}
                id={product.id}
                src={product.image}
                text= {product.title}
                label={product.type}
                user={product.user}
                path= {`/product-detail/${product.id}`}
              />
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
