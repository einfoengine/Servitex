import React, {Component} from 'react';
import GalleryBuilder from '../Generators/GalleryBuilder';
import ServiceProvider from './ServiceProvider';
import Breadcrumb from '../Breadcrumb';

const generatorProps = {
    dataSource: 'https://jsonplaceholder.typicode.com/posts',
    targetData: 'data',
    wrapClass: 'mt-component mt-services mt-grid-container'
}

const ServiceCategories = (GalleryBuilderRerurn) => {    
    class ServicesGallery extends Component {
        render() {
            return (
                <>
                    <Breadcrumb/>
                    <section id='mt-services-category' className='mt-section mt-services-category'>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <GalleryBuilderRerurn/>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            );
        }
    }
    return ServicesGallery;
}


export default ServiceCategories(GalleryBuilder(ServiceProvider, generatorProps));