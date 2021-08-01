import React, { Component } from 'react';

const GalleryBuilder = (RefComponent, refProps) => { 
    
    console.log('GB mother component', refProps);

    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {}
        }
        render(){
            console.log('GB before return');
            return (
                <div className={refProps.itemClass}>
                    {
                        console.log('Inside return'),
                        refProps.dataSource.map((item)=>{
                            return <RefComponent  
                                props = {item}
                                key = {item.id}
                            />
                        })
                    }
                </div>
            )
        }
    }
    return (NewComponent);
}
export default GalleryBuilder
