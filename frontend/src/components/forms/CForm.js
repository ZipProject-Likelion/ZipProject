import React, {useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import Dropzone from '../Dropzone';
const Form = ({ submitForm }) => {
  const [ nextPage , setNextPage] = useState(false);

  function nextPageHandler() {
    setNextPage(true);
  }

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  ); 


  return (
    <div className='form-content-right'>
      <form onSubmit={submitForm} className='form' noValidate>
        <h1>
          내 큐레이션을 만들어보세요
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Title</label>
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
          <label className='form-label'>Description</label>
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
          <label className='form-label'>Tags</label>
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
        <button className='form-input-btn' type='submit' onClick={nextPageHandler}>
          다음으로 넘어가기
        </button>
      </form>
    </div>
  );
};

export default Form;
