import React, {useState} from 'react';
import axios from 'axios';
import '../css/CurationAdd2.css';
import { Link } from 'react-router-dom';

const CurationAdd2 = ({closePopup})=>{
    const [values, setValues]=useState({
        title:'',
        context:'',
        image:null
    })
    const [success, setSucess]=useState();

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
        setSucess('큐레이션이 성공적으로 만들어졌습니다!')
    }
    return(
        <div className="background">
        <div className="curation-add-form-container">
            <div className="form-box">
            <Link to='/curations'>
            <button className='close-btn' onClick={closePopup}>×</button>
            </Link>
                <h2 className="curation-form-title">큐레이션 만들기</h2>
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
                    <button type='submit' className='form-btn' onClick={closePopup}>
                        입력
                    </button>
                </form>
                <div className='success-message'>
                    {success && (
                        <div>
                            {success}
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    )

}

export default CurationAdd2;