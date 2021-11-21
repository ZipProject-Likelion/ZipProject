import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Image} from 'react-bootstrap';
import ProductCards from '../ProductCards';
import '../css/CurationDetail.css';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const CurationDetail= ({match}) =>{
    const [curationinfo, setCurationinfo] = useState('');
    const [curationdelete, setCurationdelete]=useState(false);
    const [productId, setProductId]=useState([]);
    const [productinfo, setProductinfo]=useState([]);

    const renderCurationInfo = async() =>{
        await axios
        .get(`http://localhost:8000/api/curation/add/${match.params.id}/`)
        .then((res)=>{
            setCurationinfo(res.data);
            res.data.products.map((id)=>{
                if(id!==undefined){
                    testProductInfo(id);
                }
            })
        })
        .catch((err)=>console.log(err));
        
    }
    const testProductInfo=async(id)=>{
        await axios
        .get(`http://localhost:8000/api/product/add/${id}/`)
        .then((res)=>{
            setProductinfo(productinfo=>[...productinfo,res.data]);
        })
        .catch((err)=>console.log(err));
    }

    useEffect (()=>{
        renderCurationInfo();
        testProductInfo();
    },[])

    const deleteCuration =  () =>{
        axios.delete(`http://localhost:8000/api/curation/add/${match.params.id}/`)
            .then(response=>setCurationdelete(true))
            .catch(error=>{
                setCurationdelete(true);
            })
        
    };

    return(
        <>
        <div className="curation-detail-container">
                <Link to='/curations'>
                <button className='close-btn'> X </button>
                </Link>
                <div className="curation-detail-info-box">
                    {(curationinfo!==''&&!curationdelete) &&
                    <>
                    <div className="curation-detail-left">
                        <img src={curationinfo.image} alt='no-image'  className="curation-thumbnail" />
                    </div>
                    <div className="curation-detail-right">
                        <ul className='curation-detail-list'>
                            <li className="list-title">
                                {curationinfo.title}
                            </li>
                            <li>
                                내용: {curationinfo.content}
                            </li>
                            <li>
                                작성자: {curationinfo.user}
                            </li>
                            <li>
                                {curationinfo.private?(
                                    <>
                                    개인 큐레이션
                                    </>
                                ):(
                                    <>
                                    공유 큐레이션
                                    </>
                                )}
                            </li>
                        </ul>
                        <button onClick={deleteCuration} className='delete-btn'>삭제하기</button>
                    </div>
                    </>
                    }
                </div>
                <div className="curation-product-container">
                    <div className="title">
                        <span className="curation-title">{curationinfo.title}</span> 큐레이션에 담겨있는 상품들
                    </div>
                    <hr></hr>
                    <div className="curation-products">
                    <ProductCards title="" data={productinfo}/>
                    </div>
                </div>
                <div>
                    
                    {curationdelete &&
                    <>
                    <div>
                        삭제되었습니다.
                    </div>
                    <Link to='/curations'>
                        <button>
                            큐레이션 페이지로 돌아가기
                        </button>
                    </Link>
                    </>
                    }
                </div>
        </div>
        </>
    )
}

export default CurationDetail;