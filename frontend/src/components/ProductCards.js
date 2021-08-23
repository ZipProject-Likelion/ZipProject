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
                src={result[0].image}
                text= {result[0].title}
                label={result[0].type}
                path= {`/product-detail/${result[0].id}`}
          />
          <CardItem
                key={result[1].id}
                src={result[1].image}
                text= {result[1].title}
                label={result[1].type}
                path= {`/product-detail/${result[1].id}`}
          />
          <CardItem
                key={result[2].id}
                src={result[2].image}
                text= {result[2].title}
                label={result[2].type}
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
                src={product.image}
                text= {product.title}
                label={product.type}
                path= {`/product-detail/${product.id}`}
              />
              ))
            )}
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
              text='소파'
              label='가구'
              path='/products'
            />
            <CardItem
              src='https://www.ikea.com/kr/ko/images/products/gladom-tray-table-high-gloss-dark-blue__0955051_pe803644_s5.jpg?f=xl'
              text='Gladom 글라돔 탁상'
              label='가구'
              path='/products'
            />
            <CardItem
              src='https://www.ikea.com/kr/ko/images/products/pjaetteryd-picture-set-of-3-coast__0878838_pe781730_s5.jpg?f=xl'
              text='피에테뤼드 포스터'
              label='패븨릭'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
