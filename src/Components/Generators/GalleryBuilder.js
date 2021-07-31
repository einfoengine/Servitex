import React, { Component } from 'react';
const GalleryBuilder = (RefComponent, refProps) => { 
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {}
        }

        render(){
            return (
                <div className={refProps.itemClass}>
                    {
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
