import React, {useState} from 'react';
import ImageUploader from "react-images-upload";
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';




const Form = ({ submitForm }) => {
  const [nextPage , setNextPage] = useState(false);
  const [pictures, setPictures] = useState([]);
  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };

  function nextPageHandler() {
    setNextPage(true);
  }
  const onChange=(pictures)=>setPictures({pictures});

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  ); 


  return (
    <div className='form-content-right'>
      <h1 className="form-title">
        내 큐레이션을 만들어보세요
      </h1>
      <form onSubmit={submitForm} className='form' noValidate>

        <div className='form-inputs'>
          <label className='form-label'>1. 내 큐레이션의 제목은?</label>
          <input
            className='form-input'
            type='text'
            name='title'
            placeholder='내 큐레이션 제목을 입력하세요'
            value={values.title}
            onChange={handleChange}
          />
          {errors.title && <p>{errors.title}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>2. 내 큐레이션을 한줄로 설명한다면?</label>
          <input
            className='form-input'
            type='text'
            name='description'
            placeholder='내 큐레이션 설명을 입력하세요'
            value={values.description}
            onChange={handleChange}
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>3. 내 큐레이션에 맞는 태그를 입력하세요</label>
          <input
            className='form-input'
            type='text'
            name='tags'
            placeholder='내 큐레이션에 넣을 태그를 입력하세요'
            value={values.tags}
            onChange={handleChange}
          />
          {errors.tags && <p>{errors.tags}</p>}
        </div>
        
        <ImageUploader
          withIcon={true}
          buttonText="썸네일을 선택하세요"
          withPreview={true}
          onChange={onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />

        <button className='form-input-btn' type='submit' onClick={nextPageHandler}>
          다음으로 넘어가기
        </button>
      </form>
    </div>
  );
};

export default Form;
