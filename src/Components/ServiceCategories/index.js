import React, {Component} from 'react';
import GalleryBuilder from '../Generators/GalleryBuilder';
import ServiceCategorieElement from './ServiceCategorieElement';

const generatorProps = {
    dataSource: 'https://jsonplaceholder.typicode.com/posts',
    targetData: 'data',
    wrapClass: 'mt-component mt-services mt-grid-container'
}

const ServiceCategories = (GalleryBuilderRerurn) => {    
    class ServicesGallery extends Component {
        render() {
            return (
                <section id='mt-services-gallery' className='mt-section mt-services-gallery'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <GalleryBuilderRerurn/>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }
    return ServicesGallery;
}


export default ServiceCategories(GalleryBuilder(ServiceCategorieElement, generatorProps));
