import React from 'react';
// import './Form.css';

const IForm2 = ({nextPageHandler}) => {

    return(
    <div>
        <form className='form' onSubmit={() =>nextPageHandler(2) } noValidate>

        <div className='form-inputs'>
          <label className='form-label'>1. 내 큐레이션의 제목은?</label>
          <input
            className='form-input'
            type='text'
            name='title'
            placeholder='내 큐레이션 제목을 입력하세요'
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>2. 내 큐레이션을 한줄로 설명한다면?</label>
          <input
            className='form-input'
            type='text'
            name='description'
            placeholder='내 큐레이션 설명을 입력하세요'
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>3. 내 큐레이션에 맞는 태그를 입력하세요</label>
          <input
            className='form-input'
            type='text'
            name='tags'
            placeholder='내 큐레이션에 넣을 태그를 입력하세요'

          />
        </div>
        
        <button className='form-input-btn' type='submit' >
          다음으로 넘어가기
        </button>
      </form>
    </div>
    )
};

export default IForm2;
