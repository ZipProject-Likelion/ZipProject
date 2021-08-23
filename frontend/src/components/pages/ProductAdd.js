import React , {useState} from 'react';
import '../../App.css';
import '../css/Products.css'
import { Modal , Button} from 'react-bootstrap';
import axios from 'axios';
import { Link , withRouter} from 'react-router-dom';

const ProductAdd = ()=>{
    const [show, setShow] = useState(false);

    
    const handleClose = () => {
        setShow(false)
        window.location.href = "/products";
    };
    const handleShow = () => setShow(true);

    const [values, setValues]=useState({
        title:'',
        user:1,
        content:'',
        image:null,
        price:'',
        shop_type:'비매품',
        shop_url_location:'',
        type:'가구',
    })
    const [success, setSuccess]=useState('');

    // curation 만들기
    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        });
        console.log(values);
    }
    const handleImageChange = (e)=>{
        setValues({
            ...values,
            image:e.target.files[0]
        })
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(values);
        const user = localStorage.getItem('user');
        // form data 만드는 부분
        let form_data=new FormData();
        form_data.append('title', values.title);
        form_data.append('user', values.user);
        form_data.append('content', values.content);
        form_data.append('image', values.image);
        form_data.append('price', values.price);
        form_data.append('shop_type', values.shop_type);
        form_data.append('shop_url_location', values.shop_url_location);
        form_data.append('type', values.type);

        // product-add (post)
        axios
        .post('/product/add/', form_data, {
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        .then((res)=>console.log(res))
        .catch(err=>console.log(err));

        setValues({
            title:'',
            user:'',
            content:'',
            image:null,
            price:null,
            shop_type:'',
            shop_url_location:'',
            type:'',
        })
        setSuccess('큐레이션이 성공적으로 만들어졌습니다!')
        
        
    }
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
            상품 등록하기
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>새 상품을 등록하세요</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <div className="products-form-container">
                    {success===''?
                    (
                        <>
                        <form
                        onSubmit={submitHandler}
                        className='form'
                        >
                        <div className="form-inputs">
                            <label className='label'>Title</label>
                            <input
                                className='form-input'
                                type="text"
                                name="title"
                                placeholder="상품명을 입력하세요"
                                value={values.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-inputs">
                            <label className='label'>Description</label>
                            <input
                                className='form-input'
                                type="text"
                                name="content"
                                placeholder="상품 설명을 입력하세요"
                                value={values.content}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-inputs">
                            <label className='label'>Price</label>
                            <input
                                className='form-input'
                                type="number"
                                name="price"
                                placeholder="상품 가격을 입력하세요"
                                value={values.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-inputs">
                            <label className='label'>URL</label>
                            <input
                                className='form-input'
                                type="text"
                                name="shop_url_location"
                                placeholder="상품 구매 링크를"
                                value={values.shop_url_location}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-inputs">
                            <label className='label'>Shop Type</label>
                            <select name='shop_type' id='shop_type' value={values.shop_type} onChange={handleChange} required>
                                <option value='비매품'>비매품</option>
                                <option value='온라인'>온라인</option>
                                <option value='오프라인'>오프라인</option>
                            </select>
                        </div>
                        <div className="form-inputs">
                            <label className='label'>Category</label>
                            <select name='type' id='type' value={values.type} onChange={handleChange} required>
                                <option value='DIY/공구'>DIY/공구</option>
                                <option value='패브릭'>패브릭</option>
                                <option value='가전'>가전</option>
                                <option value='가구'>가구</option>
                                <option value='수납/정리'>수납/정리</option>
                                <option value='장식/조명'>장식/조명</option>
                            </select>
                        </div>
                        <div className="form-inputs">
                            <label className='label'>Product Image</label>
                            <input
                                type="file"
                                name="image"
                                accept="image/png, image/jpeg"
                                onChange={handleImageChange}
                                required
                            />
                        </div>
                        <Button type="submit" variant="primary">
                            Save Changes
                        </Button>
                    </form>
                        </>
                    ):
                    (
                        <>
                        <div>{success}</div>
                        <Link to='/curations'>
                        <Button variant="primary" onClick={handleClose}>큐레이션 페이지로 돌아가기</Button>
                        </Link>
                        </>
                    )
                    }
                    </div>
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )   

}

export default ProductAdd;