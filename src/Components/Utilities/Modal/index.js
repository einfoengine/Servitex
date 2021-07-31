import React from 'react';
import { Link } from 'react-router-dom';

export const Modal = (props) => {
  return (
    <>
      <div
        className={`mt-modal modal fade ${props.modalClass}`}
        id={props.id?props.id:"mt-element-id"}
      >
        <div className={`modal-dialog ${props.modalDialogClass}`}>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Service proposal
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
                {props.children}
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <Link to='/jobs' className='btn btn-primary' data-bs-dismiss='modal'>Home</Link>                

                
              {
                console.log('*******************',props.target)
                // ?
                // <Link className='btn btn-primary' data-bs-dismiss='modal' to={props.target}>
                //   hello
                //   {props.btn,
                //     console.log(props.target)
                //   }
                // </Link>
                // :
                // <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>
                //   {props.btn}
                // </button>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ModalToggle = (props) => {
  return (
    <>
      <div
        className={`mt-modal modal fade ${props.modalClass}`}
        id={props.id}
      >
        <div className={`modal-dialog ${props.modalDialogClass}`}>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Service proposal
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
                {props.children}
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#mt-service-${props.id}`}>
                  Hire me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
