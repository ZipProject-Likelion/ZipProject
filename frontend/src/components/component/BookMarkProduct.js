import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { Modal , Button, Form} from 'react-bootstrap';
import {BsBookmark} from 'react-icons/bs'
import swal from 'sweetalert';
import axios from 'axios';

import '../css/BookMarkProduct.css'




const BookMarkProduct = (props) =>{
    const [show, setShow] = useState(false);
    const [success, setSuccess] =useState(false);
    const [mycurations, setMycurations]=useState([
        '새 큐레이션 만들기',
        '미래의 집 정원 꾸미기',
        '북유럽 스타일',
        '내가 사고 싶은 가구'
    ]);
    const [checkedid, setCheckedid]= useState();
    
    const oneCheckBox= (e)=>{
        var obj=document.getElementsByName("checkbox-one");
        for (var i=0; i<obj.length ;i++){
            if(obj[i].value!=e.target.value){
                obj[i].checked=false;
            }
        }
        var index=e.target.value*1;
        setCheckedid(index);
    }
    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);
    const handleChange = (e) =>{
        console.log(e.target.value);
    }
    const getCurationData = () =>{
        axios
        .get(`/api/get-user-curation/${props.user}/`)
        .then((res)=>setMycurations(res.data))
        .catch(err=>console.log(err));
    }
    const addProductData =(e) =>{
        e.preventDefault();
        console.log(mycurations[checkedid].products);
        let products_data = mycurations[checkedid].products;
        console.log('기존 curation info', mycurations[checkedid]);
        console.log('기존 products', products_data);
        console.log('추가되는 product',props.id);
        let form_data=new FormData();

        products_data.push(props.id);
        console.log(products_data);
        let target = {
            products : products_data
        }

        console.log()
        axios
        .post(`/api/curation-products-update/${checkedid}/`, JSON.stringify(target),{
            headers:{
                'content-type':'application/json',
            }
        })
        .then((res)=>{
            console.log(res)
            swal("큐레이션에 추가되었습니다", "success", "success",{
                button: false,
                timer: 2000,
            })
            setSuccess(true);
        })
        .catch(err=>console.log(err));
        
    }
    
    useEffect(()=>{
        getCurationData();
    },[])

    return(
        <>
        <div className="cards__item__mark__icon" onClick={handleShow}><BsBookmark/></div>

        <Modal show={show} onHide={handleClose} size="lg" className="bookmark-product-modal">
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">내 큐레이션에 추가</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {!success?
            (
                <div className="modal-box">
                <div className="left-modal-box ">
                    <img alt="no image" src={props.image} className="product-left-image">
                    </img>
                </div>
                <div className="right-modal-box">
                    <ul className="mycuration-list">
                        {mycurations && mycurations.map((item,index)=>{
                            return ( 
                            <li className="mycuration-list-titles">
                                <Form.Check aria-label="option 1" onClick={oneCheckBox} onChange={handleChange} value={index} name="checkbox-one" className="mycuration-list-checkbox"/>
                                <div className="mycurattion-list-title">
                                <div>
                                {item.title}
                                </div>
                                </div>
                            </li>
                            );
                        })}
                    </ul>
                </div>

            </div>
            )
            :
            (
                <div>
                    <Link to={`/curation-detail/${checkedid}`}>
                    <Button variant="secondary">담긴 큐레이션 확인하러 가기</Button>
                    </Link>
                </div>

            )}
            
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={addProductData}>
                추가하기
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )   
}

export default BookMarkProduct;