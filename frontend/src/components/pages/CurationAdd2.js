import React , {useState} from 'react';
import '../../App.css';
import '../css/Products.css'
import { Modal , Button} from 'react-bootstrap';
import axios from 'axios';
import { Link , withRouter} from 'react-router-dom';

const CurationAdd2 = ()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [values, setValues]=useState({
        title:'',
        context:'',
        image:null
    })
    const [success, setSuccess]=useState('');

    // curation 만들기
    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        });
        console.log('title',values.title);
        console.log('context',values.context);
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
        let form_data=new FormData();
        form_data.append('title', values.title);
        form_data.append('context', values.context);
        form_data.append('image',values.image, values.image.name);
        console.log('form_data입니다',form_data);
        axios
        .post('/api/curation/curation-create/', form_data, {
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        .then((res)=>console.log(res))
        .catch(err=>console.log(err));

        setValues({title:'', context:'', image:null})
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
                                placeholder="큐레이션 제목을 입력하세요"
                                value={values.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-inputs">
                            <label className='label'>Description</label>
                            <input
                                className='form-input'
                                type="text"
                                name="context"
                                placeholder="큐레이션 설명을 입력하세요"
                                value={values.context}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-inputs">
                            <label className='label'>Thumbnail</label>
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

export default CurationAdd2;