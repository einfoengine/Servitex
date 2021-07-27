import React from 'react';

const ServiceRequest = ({id, title, comClass}) => {
  return (
    <div className={`mt-utility mt-main-search ${comClass}`}>
      <form>
        <div className='row mb-3'>
          <label for='inputEmail3' className='col-sm-2 col-form-label'>
            Service
          </label>
          <div className='col-sm-10'>
            <input type='text' className='form-control' id={id} value={title} disabled/>
          </div>
        </div>
        <div className='row mb-3'>
          <label for='inputPassword3' className='col-sm-2 col-form-label'>
            Message
          </label>
          <div className='col-sm-10'>
            <textarea class="form-control" placeholder="Write your work details" id="floatingTextarea2"></textarea>
            <span for="floatingTextarea2">Please write your message to the professional being agring the service details bellow</span>
          </div>
        </div>
        <fieldset className='row mb-3'>
          <legend className='col-form-label col-sm-2 pt-0'>Job Type</legend>
          <div className='col-sm-10'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='gridRadios'
                id='gridRadios1'
                value='option1'
                checked
              />
              <label className='form-check-label' for='gridRadios1'>
                One time
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='gridRadios'
                id='gridRadios2'
                value='option2'
              />
              <label className='form-check-label' for='gridRadios2'>
                Regular
              </label>
            </div>
          </div>
        </fieldset>
        <div className='row mb-3'>
          <div className='col-sm-10 offset-sm-2'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                id='gridCheck1'
              />
              <label className='form-check-label' for='gridCheck1'>
                Save job details
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ServiceRequest;
