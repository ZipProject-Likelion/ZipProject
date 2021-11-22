import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../css/ProductDetail.css';
import BookMarkProduct from '../component/BookMarkProduct';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const ProductDetail= ({match}) =>{
    const loginuser = localStorage.getItem('user');
    const [checkUser, setCheckuser] = useState(false);
    const [productinfo, setProductinfo] = useState('');
    const [productdelete, setProductdelete]=useState(false);

    const renderProductInfo = async() =>{
        const response= await axios.get(`http://localhost:8000/api/product/add/${match.params.id}/`)
        setProductinfo(response.data);
        console.log(response.data);
    }

    const checkSameUser = async() =>{
        const response= await axios.get(`http://localhost:8000/api/product/add/${match.params.id}/`)
        const product_user = response.data.user;
        if(loginuser == product_user){
            setCheckuser(true);
        }
    }

    useEffect (()=>{
        renderProductInfo();
        checkSameUser();
    },[])

    const undefined =  () =>{
        alert("아직 구현되지 않은!")
    }

    const deleteProduct =  () =>{
        axios.delete(`http://localhost:8000/api/product/add/${match.params.id}/`)
            .then(response=>setProductdelete(true))
            .catch(error=>{
                setProductdelete(true);
            })
    }
    

    return(
        <>
        <div className="product-detail-container"> 
            <Link to='/products'>
            <button className='close-btn'>×</button>
            </Link>
            <div className="product-detail-info-box">
                {(productinfo!==''&&!productdelete) &&
                <>
                <div className="product-detail-left">
                    <img src={productinfo.image} alt='no-image' className="product-thumbnail"/>
                </div>
                <div className="product-detail-right">
                    <ul className='product-detail-list'>
                        <li className="list-title">
                            {productinfo.title}
                        </li>
                        <li>
                            제품설명: {productinfo.content}
                        </li>
                        <li>
                            작성자: {productinfo.user}
                        </li>
                        <li>
                            가격: {productinfo.price}
                        </li>
                        <li>
                            카테고리: {productinfo.type}
                        </li>
                        <li>
                        구매 URL : <button onClick={() => window.open(productinfo.shop_URL_Location, '_blank')} className='url-btn'>바로가기</button>
                        </li>
                        <li>
                            구매경로: {productinfo.shop_Type}
                        </li>
                        {checkUser && <>
                            <button onClick={undefined} className='edit-btn'>수정하기</button>
                            <button onClick={deleteProduct} className='delete-btn'>삭제하기</button>
                            </>
                        }
                        <button onClick={undefined} className='bookmark-btn'>큐레이션에 추가</button>
                    </ul>
                </div>
                </>
                }
                {productdelete &&
                <>
                <div>
                    삭제되었습니다.
                </div>
                <Link to='/products'>
                    <button>
                        상품 페이지로 돌아가기
                    </button>
                </Link>
                </>
                }
            </div>
        </div>
        
        </>
    )
}

export default ProductDetail;