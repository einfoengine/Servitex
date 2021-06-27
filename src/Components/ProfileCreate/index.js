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
                <div class='mb-3 mt-form-item mt-form-input'>
                  <label for='mtProfileFullName' class='form-label'>
                    Your full name
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='mtProfileFullName'
                  />
                </div>
                <div class='mb-3 mt-form-item mt-form-input'>
                  <label for='mtProfileUserName' class='form-label'>
                    User Name
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='mtProfileUserName'
                  />
                </div>
                <div class='mb-3 mt-form-item mt-form-input'>
                  <label for='exampleInputEmail1' class='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    class='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                  />
                  <div id='emailHelp' class='form-text'>
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class='mb-3 mt-form-item mt-form-input'>
                  <label for='exampleInputPassword1' class='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    class='form-control'
                    id='exampleInputPassword1'
                  />
                </div>
                <div class='mb-3 mt-form-item mt-form-input'>
                  <label for='exampleInputPassword1' class='form-label'>
                    Retype Password
                  </label>
                  <input
                    type='password'
                    class='form-control'
                    id='exampleInputPassword1'
                  />
                </div>
                <div class='mb-3 mt-form-item mt-form-input'>
                    <label for='floatingTextarea2'>Address</label>
                    <textarea
                      class='form-control'
                      placeholder='Your complete address here'
                      id='floatingTextarea'
                    ></textarea>
                    <div id='emailHelp' class='form-text'>
                        We'll never share your address with anyone else.
                    </div>
                </div>
                <div class='mb-3 mt-form-item mt-form-input'>
                  <label for='exampleInputPassword1' class='form-label'>
                    Your skills
                  </label>
                  <input
                    type='password'
                    class='form-control'
                    id='exampleInputPassword1'
                  />
                </div>
                <div class='mb-3 mt-form-item mt-form-input'>
                    <label for='floatingTextarea2'>Your welcome text</label>
                    <textarea
                      class='form-control'
                      placeholder='Introduce yourself to your cliet'
                      id='floatingTextarea'
                    ></textarea>
                </div>
                <div class='mb-3 form-check mt-form-item'>
                  <input
                    type='checkbox'
                    class='form-check-input'
                    id='exampleCheck1'
                  />
                  <label class='form-check-label' for='exampleCheck1'>
                    Check me out
                  </label>
                </div>
                <button type='submit' class='btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
            {/*  */}
            <div className='col-4 mt-component-position-aside mt-aside-right mt-aside'>
                <div class="mt-profile-visual mt-element">
                    <img src="holder.js/200x200" alt="Servitex user Mr. Name serves as a 5 star professional" class="img-thumbnail"/>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>
                <div class='mb-3 mt-form-item mt-form-input'>
                  <label for='mtProfileFullName' class='form-label'>
                    Intro video link
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='mtProfileFullName'
                  />
                </div>
                <div class='mb-3 mt-form-item mt-form-input'>
                  <label for='mtProfileFullName' class='form-label'>
                    How many hours you are available to work?
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='mtProfileFullName'
                  />
                </div>
                <div class='mb-3 mt-form-item mt-form-input'>
                  <label for='mtProfileFullName' class='form-label'>
                    Which languages do you know?
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='mtProfileFullName'
                  />
                </div>
                <div class='mb-3 mt-form-item mt-form-input'>
                  <label for='mtProfileFullName' class='form-label'>
                    Which languages do you know?
                  </label>
                  <input
                    type='button'
                    class='form-control'
                    id='mtProfileFullName'
                  />
                </div>
                <div class='mb-3 mt-form-item mt-form-input'>
                    <button type='submit' class='btn btn-primary'>
                        Add education
                    </button>
                    <button type='submit' class='btn btn-primary'>
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
