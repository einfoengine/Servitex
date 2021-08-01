import React, {Component} from 'react';
import GalleryBuilder from '../Generators/GalleryBuilder';
import ServiceCategorieElement from './ServiceCategorieElement';
import axios from 'axios';
const dataSource = require('./data.json');

const refProps = {
    dataSource,
    itemClass: 'mt-component mt-services mt-grid-container'
}

const getUsers = () => {
    console.log('Get users - check JSON axios')
    axios.get('data.json').then((res)=>{
        console.log('JSON file ----',res)
    }).catch(err => console.log('JSON file', err));
}
getUsers();

const ServiceCategories = (CategoryElements) => {
    class ServicesGallery extends Component {
        render() {
            return (
                <section id='mt-services-gallery' className='mt-section mt-services-gallery'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <CategoryElements/>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }
    return ServicesGallery;
}


export default ServiceCategories(GalleryBuilder(ServiceCategorieElement, refProps));
