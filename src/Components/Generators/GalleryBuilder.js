import React, { Component } from 'react';

console.log('GB Global scope');

const GalleryBuilder = (RefComponent, refProps) => { 
    
    console.log('GB mother component');

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
