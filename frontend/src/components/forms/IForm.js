import React, {useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './IForm.css';
import IForm2 from './IForm2';
import Dropzone from './Dropzone';
import FormSuccess from './FormSuccess';

const IForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const [nextPage, setNextPage]=useState(0);

  function nextPageHandler(x) {
    setNextPage(x);
  }
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  switch(nextPage){
    case 0:
      return (
        <div className="dropzone-form-container">
        <h2 className="dropzone-form-title">상품 사진을 등록하세요</h2>
        <Dropzone nextPageHandler={nextPageHandler}/>
        </div>
      );
    case 1:
      return (
        <div className="dropzone-form-container">
        <h2 className="dropzone-form-title">상품 정보를 입력하세요</h2>
        <IForm2 nextPageHandler={nextPageHandler}/>
        </div>
      )
    case 2:
      return (
        <div className="dropzone-form-container">
        <FormSuccess title='상품 정보가 등록되었습니다.'/>
        </div>
      )
    default:
      return null;
  }  

  // return (
  //   <div className="dropzone-form-container">
    
  //   {!nextPage?
  //     (
  //       <>
  //       <h2 className="dropzone-form-title">상품 사진을 등록하세요</h2>
  //       <Dropzone nextPageHandler={nextPageHandler}/>
  //       </>
  //     )
  //     :
  //     (
  //       <>
  //       <h2 className="dropzone-form-title">상품 정보를 입력하세요</h2>
  //       <IForm2 submitForm={submitForm}/>
  //       </>
  //     )
  //     }

  //   </div>
  // );
};

export default IForm;
