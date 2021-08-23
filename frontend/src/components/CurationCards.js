import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItem2 from './CardItem2';

function CurationCards({title, data}) {

  return (
    <div className='cards'>
      <h1>{title}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {!data? <></>:
            ( 
              data.map(curation=>(
                <CardItem2
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
            <CardItem2/>
            <CardItem2/>
            <CardItem2/>
          </ul>
          <ul className='cards__items'>
            <CardItem2/>
            <CardItem2/>
            <CardItem2/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CurationCards;
