import React, {Component} from 'react';
import GalleryBuilder from '../Generators/GalleryBuilder';

const generatorProps = {
    DataSource: 'https://jsonplaceholder.typicode.com/posts',
    targetData: 'data'
}

const ServiceCategoriesElement = ({title, body}) => {
    return (
        <div className="mt-component mt-services">
            <div className="mt-element mt-service mt-fancy-card card">
                <h5>{title}</h5>
                <p>{body}</p>
            </div>
        </div>
    )
}

const ServiceCategories = (FinalElement) =>{    
    class FinalComponent extends Component {
        render() {
            return (
                <div>
                    <FinalElement/>
                </div>
            );
        }
    }
    return FinalComponent
}


export default ServiceCategories(GalleryBuilder(ServiceCategoriesElement, generatorProps));
