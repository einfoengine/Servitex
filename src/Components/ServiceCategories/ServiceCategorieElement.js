import React from 'react';
import {ElementTitle, Modal} from '../Utilities';
import ServiceRequest from './ServiceRequest';

const ServiceCategorieElement = ({id, title, body, clickHandeler}) => {
    return (
        <div className="mt-element mt-service mt-fancy-card card" onClick={()=>{
            console.log('I am clicked');
            clickHandeler();
        }}>
            <div className="mt-post-intro">
                <ElementTitle text={title} />
                <p>{body}</p>
            </div>
            <div className="element-modal">
                <Modal id={`mt-service-${id}`} title={title} modalClass={`mt-service-${id}`} modalDialogClass='modal-xl' btn={'Submit Proposal'}>
                    <ServiceRequest id={id} title={title}/>
                </Modal>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#mt-service-${id}`}>
                    Hire me
                </button>
            </div>
        </div>
    )
}

export default ServiceCategorieElement
