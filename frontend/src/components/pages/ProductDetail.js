import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../css/CurationDetail.css';
import '../css/ProductDetail.css';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const ProductDetail= ({match}) =>{
    const [productinfo, setProductinfo] = useState('');
    const [productdelete, setProductdelete]=useState(false);

    const renderProductInfo = async() =>{
        const response= await axios.get(`/product/add/${match.params.id}/`)
        setProductinfo(response.data);
        console.log(response.data);
    }

    useEffect (()=>{
        renderProductInfo();
    },[])

    const deleteProduct =  () =>{
        axios.delete(`/product/add/${match.params.id}/`)
            .then(response=>setProductdelete(true))
            .catch(error=>{
                setProductdelete(true);
            })
        
    };

    return(
        <>
        <div className="curation-detail-container"> 
            <Link to='/products'>
            <button className='close-btn'>×</button>
            </Link>
            <div className="curation-detail-info-box">
                {(productinfo!==''&&!productdelete) &&
                <>
                <div className="curation-detail-left">
                    <img src={productinfo.image} alt='no-image' className="curation-thumbnail"/>
                </div>
                <div className="curation-detail-right">
                    <ul className='curation-detail-list'>
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
                            구매 URL: {productinfo.shop_url_location}
                        </li>
                        <li>
                            구매경로: {productinfo.shop_Type}
                        </li>
                    </ul>
                    <button onClick={deleteProduct} className='delete-btn'>삭제하기</button>
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