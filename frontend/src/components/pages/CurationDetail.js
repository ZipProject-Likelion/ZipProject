import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../css/CurationAdd2.css';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const CurationDetail= ({match}) =>{
    const [curationinfo, setCurationinfo] = useState('');
    const [curationdelete, setCurationdelete]=useState(false);
    const renderCurationInfo = async() =>{
        const response= await axios.get(`/api/curation/curation-detail/${match.params.id}`)
        setCurationinfo(response.data);
        console.log(response.data);
    }

    useEffect (()=>{
        renderCurationInfo();
    },[])

    const deleteCuration =  () =>{
        axios.delete(`/api/curation/curation-delete/${match.params.id}`)
            .then(response=>setCurationdelete(true))
            .catch(error=>{
                setCurationdelete(true);
            })
        
    };

    return(
        <>
        <div className="background">
        <div className="curation-add-form-container form-box">
                <Link to='/curations'>
                <button className='close-btn'>×</button>
                </Link>
                <div className="curation-detail-form-box">
                    {(curationinfo!==''&&!curationdelete) &&
                    <>
                    <div className="curation-detail-left">
                        <img src={curationinfo.image} alt='no-image' className="curation-detail-img"/>
                    </div>
                    <div className="curation-detail-right">
                        <div>
                            {match.params.id}
                        </div>
                        <div>
                            제목: {curationinfo.title}
                        </div>
                        <div>
                            내용: {curationinfo.context}
                        </div>
                        <div>
                            작성일: {curationinfo.pub_date}
                        </div>
                        <button onClick={deleteCuration} className='delete-btn'>삭제하기</button>
                    </div>
                    </>
                    }
                    
                    
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
        </div>
        </>
    )
}

export default CurationDetail;