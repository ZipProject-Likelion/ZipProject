import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Image} from 'react-bootstrap';
import ProductCards from '../ProductCards';
import '../css/CurationDetail.css';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const CurationDetail= ({match}) =>{
    const loginuser = localStorage.getItem('user');
    const [checkUser, setCheckuser] = useState(false);
    const [curationinfo, setCurationinfo] = useState('');
    const [curationdelete, setCurationdelete]=useState(false);
    const [productId, setProductId]=useState([]);
    const [productinfo, setProductinfo]=useState([]);

    const renderCurationInfo = async() =>{
        await axios
        .get(`http://13.124.164.255/api/curation/add/${match.params.id}/`)
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
        .get(`http://13.124.164.255/api/product/add/${id}/`)
        .then((res)=>{
            setProductinfo(productinfo=>[...productinfo,res.data]);
        })
        .catch((err)=>console.log(err));
    }

    const checkSameUser = async() =>{
        const response= await axios.get(`http://13.124.164.255/api/curation/add/${match.params.id}/`)
        const curation_user = response.data.user;
        if(loginuser == curation_user){
            setCheckuser(true);
        }
    }

    useEffect (()=>{
        renderCurationInfo();
        testProductInfo();
        checkSameUser();
    },[])

    const deleteCuration =  () =>{
        axios.delete(`http://13.124.164.255/api/curation/add/${match.params.id}/`)
            .then(response=>setCurationdelete(true))
            .catch(error=>{
                setCurationdelete(true);
            })
        
    };

    const undefined =  () =>{
        alert("?????? ???????????? ??????!")
    };

    return(
        <>
        <div className="curation-detail-container">
                <Link to='/curations'>
                <button className='close-btn'>??</button>
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
                                ??????: {curationinfo.content}
                            </li>
                            <li>
                                ?????????: {curationinfo.user}
                            </li>
                            <li>
                                {curationinfo.private?(
                                    <>
                                    ?????? ????????????
                                    </>
                                ):(
                                    <>
                                    ?????? ????????????
                                    </>
                                )}
                            </li>
                            {checkUser && <>
                                <button onClick={undefined} className='edit-btn'>????????????</button>
                                <button onClick={deleteCuration} className='delete-btn'>????????????</button>
                                </>
                            }
                            <button onClick={undefined} className='scrap-btn'>?????????</button>
                            <button onClick={undefined} className='product-btn'>?????? ????????????</button>
                        </ul>
                    </div>
                    </>
                    }
                </div>

                {!curationdelete && <>
                <div className="curation-product-container">
                    <div className="title">
                        <span className="curation-title">{curationinfo.title}</span> ??????????????? ???????????? ?????????
                    </div>
                    <hr></hr>
                    <div className="curation-products">
                    <ProductCards title="" data={productinfo}/>
                    </div>
                </div></>
                }
                <div>
                    {curationdelete &&<>
                    <center>
                        <div>
                            <br></br> <br></br> <br></br> <br></br> <br></br>
                            <br></br> &nbsp; ?????????????????????. <br></br> <br></br>
                        </div>
                        <Link to='/curations'>
                            <button class="btn btn-primary" align="center"> ???????????? ???????????? ???????????? </button>
                        </Link>
                    </center></>
                    }
                </div>
        </div>
        </>
    )
}

export default CurationDetail;