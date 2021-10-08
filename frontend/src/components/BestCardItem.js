import React from 'react';
import { Link } from 'react-router-dom';
import {BsBookmark} from 'react-icons/bs'

import BookMarkProduct from './component/BookMarkProduct';
import { CurationSave } from './CurationSave';

function BestCardItem(props) {
  return (
    <>
      <li className='best__cards__item'>
        <div className='best__cards__item__wrapper' >
          <Link to={props.path}>
          {/* <figure className='best__cards__item__pic-wrap'> */}
            <img
              className='best__cards__item__img'
              alt='Travel Image'
              src={props.src}
              />
            {/* </figure> */}
            <div className='best__cards__item__info'>
                <div className="best__cards__item__back">
                    <div className="best__cards__item__text">
                        <div className="best__cards__item__user__cat">{props.user} / {props.label}</div>
                        <hr></hr>
                        <h5 className='best__cards__item__title'>{props.text}</h5>
                    </div>
                <BookMarkProduct image={props.src} user={props.user} id={props.id}/>
              </div>
              <div className="best__cards__item__btn">
                <CurationSave></CurationSave>
              </div>
            </div>
            
          </Link>
        </div>
      </li>
    </>
  );
}

export default BestCardItem;
