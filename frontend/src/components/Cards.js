import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards({title, data}) {
  console.log(data)
  return (
    <div className='cards'>
      <h1>{title}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {!data? <></>:
            ( 
              data.map(curation=>(
                <CardItem
                key={curation.id}
                src={curation.image}
                text= {curation.title}
                label={curation.context}
                path= {`/curation-detail/${curation.id}`}
              />
              ))
            )}
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/curations'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
