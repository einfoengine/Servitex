import React, {Component} from 'react';
import GalleryBuilder from '../Generators/GalleryBuilder';
import ServiceProvider from './ServiceProvider';


// Prepare data for gallery builder
const axios = require('axios');
const refProps = {
    itemClass: '',
    data: {}
}
async function getData(){
    const provideres = await axios.get('https://jsonplaceholder.typicode.com/users');
    // console.log('SP global scope-----',provideres);
    refProps.data = provideres
}
getData();


const ServiceProviders = (GalleryBuilderReturn) => {    
    // console.log('SP before return');
    class ProvidersGallery extends Component {
        render() {
            return (
                <section id='mt-services-gallery' className='mt-section mt-services-gallery'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* <GalleryBuilderReturn/> */}
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }
    return ProvidersGallery;
};
// export default ServiceProviders();
export default ServiceProviders(GalleryBuilder(ServiceProvider, refProps));
