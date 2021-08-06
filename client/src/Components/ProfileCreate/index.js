import React, { Component } from 'react';

class ProfileCreate extends Component {
  render() {
    return (
      <div className='mt-profile-create mt-component'>
        <div className='mt-module mt-component-header'>
          <h2 className='mt-module-title'>Create your profile</h2>
        </div>
        {/* End module */}
        <div className='mt-module mt-create-profile-form'>
          <div className='row'>
            <div className='col-8'>
              <form className='mt-form'>
                <div className='mb-3 mt-form-item mt-form-input'>
                  <label for='mtProfileFullName' className='form-label'>
                    Your full name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='mtProfileFullName'
                  />
                </div>
                <div className='mb-3 mt-form-item mt-form-input'>
                  <label for='mtProfileUserName' className='form-label'>
                    User Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='mtProfileUserName'
                  />
                </div>
                <div className='mb-3 mt-form-item mt-form-input'>
                  <label for='exampleInputEmail1' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                  />
                  <div id='emailHelp' className='form-text'>
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className='mb-3 mt-form-item mt-form-input'>
                  <label for='exampleInputPassword1' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='exampleInputPassword1'
                  />
                </div>
                <div className='mb-3 mt-form-item mt-form-input'>
                  <label for='exampleInputPassword1' className='form-label'>
                    Retype Password
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='exampleInputPassword1'
                  />
                </div>
                <div className='mb-3 mt-form-item mt-form-input'>
                    <label for='floatingTextarea2'>Address</label>
                    <textarea
                      className='form-control'
                      placeholder='Your complete address here'
                      id='floatingTextarea'
                    ></textarea>
                    <div id='emailHelp' className='form-text'>
                        We'll never share your address with anyone else.
                    </div>
                </div>
                <div className='mb-3 mt-form-item mt-form-input'>
                  <label for='exampleInputPassword1' className='form-label'>
                    Your skills
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='exampleInputPassword1'
                  />
                </div>
                <div className='mb-3 mt-form-item mt-form-input'>
                    <label for='floatingTextarea2'>Your welcome text</label>
                    <textarea
                      className='form-control'
                      placeholder='Introduce yourself to your cliet'
                      id='floatingTextarea'
                    ></textarea>
                </div>
                <div className='mb-3 form-check mt-form-item'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='exampleCheck1'
                  />
                  <label className='form-check-label' for='exampleCheck1'>
                    Check me out
                  </label>
                </div>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
            {/*  */}
            <div className='col-4 mt-component-position-aside mt-aside-right mt-aside'>
                <div className="mt-profile-visual mt-element">
                    <img src="holder.js/200x200" alt="Servitex user Mr. Name serves as a 5 star professional" className="img-thumbnail"/>
                </div>
                <div className="mb-3">
                    <label for="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile"/>
                </div>
                <div className='mb-3 mt-form-item mt-form-input'>
                  <label for='mtProfileFullName' className='form-label'>
                    Intro video link
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='mtProfileFullName'
                  />
                </div>
                <div className='mb-3 mt-form-item mt-form-input'>
                  <label for='mtProfileFullName' className='form-label'>
                    How many hours you are available to work?
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='mtProfileFullName'
                  />
                </div>
                <div className='mb-3 mt-form-item mt-form-input'>
                  <label for='mtProfileFullName' className='form-label'>
                    Which languages do you know?
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='mtProfileFullName'
                  />
                </div>
                <div className='mb-3 mt-form-item mt-form-input'>
                  <label for='mtProfileFullName' className='form-label'>
                    Which languages do you know?
                  </label>
                  <input
                    type='button'
                    className='form-control'
                    id='mtProfileFullName'
                  />
                </div>
                <div className='mb-3 mt-form-item mt-form-input'>
                    <button type='submit' className='btn btn-primary'>
                        Add education
                    </button>
                    <button type='submit' className='btn btn-primary'>
                        Add Certificates
                    </button>
                </div>
                
            </div>
            {/*  */}
          </div>
        </div>
        {/* End module */}
      </div>
    );
  }
}

export default ProfileCreate;
