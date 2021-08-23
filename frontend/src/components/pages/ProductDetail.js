import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../css/CurationAdd2.css';

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
        <div className="background">
        <div className="curation-add-form-container form-box">
                <Link to='/products'>
                <button className='close-btn'>×</button>
                </Link>
                <div className="curation-detail-form-box">
                    {(productinfo!==''&&!productdelete) &&
                    <>
                    <div className="curation-detail-left">
                        <img src={productinfo.image} alt='no-image' className="curation-detail-img"/>
                    </div>
                    <div className="curation-detail-right">
                        <div>
                            {match.params.id}
                        </div>
                        <div>
                            제목: {productinfo.title}
                        </div>
                        <div>
                            내용: {productinfo.content}
                        </div>
                        <div>
                            작성자: {productinfo.user}
                        </div>
                        <div>
                            가격: {productinfo.price}
                        </div>
                        <div>
                            카테고리: {productinfo.type}
                        </div>
                        <div>
                            구매 URL: {productinfo.shop_URL_Location}
                        </div>
                        <div>
                            구매경로: {productinfo.shop_Type}
                        </div>
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
        </div>
        </>
    )
}

export default ProductDetail;