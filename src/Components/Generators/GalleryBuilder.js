import React, { Component } from 'react';
import axios from 'axios';
const GalleryBuilder = (RefComponent, refProps) => { 
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                allData: {},
                mapData: [],
            }
        }

        componentDidMount = async() =>{
            try{
                const builderData = await axios.get(refProps.dataSource);
                this.setState({
                    allData: builderData,
                    mapData: builderData.data
                });
                console.log('******** > State',this.state);
            }catch(err){
                console.log(err);
            }
        }

        // Click handeler
        clickHandeler = (id) => {
            console.log('id', id);
        }

        render(){
            return (
                <div className={refProps.wrapClass}>
                    {
                        this.state.mapData.map((item)=>{
                            return <RefComponent  
                                id={item.id}
                                title={item.title}
                                body={item.body}
                                key={item.id}
                                clickHandeler = {()=>{
                                    this.clickHandeler(item.id);
                                }}
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
