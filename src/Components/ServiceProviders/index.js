import React, {useEffect, useState} from 'react';
import GalleryBuilder from '../Generators/GalleryBuilder';
import ServiceProvider from './ServiceProvider';

const axios = require('axios');


const refProps = {
    itemClass: '',
    data: {}
}
async function getData(){
    const provideres = await axios.get('https://jsonplaceholder.typicode.com/users').then((response) => response.data);
    refProps.data = provideres
}
getData();


const ServiceProviders = () => {    
    return (
        <section id='mt-professionals-gallery' className='mt-section mt-professionals-gallery'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        hi
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ServiceProviders(GalleryBuilder(ServiceProvider, refProps));
