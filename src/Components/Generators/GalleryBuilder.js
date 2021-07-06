import React, { Component } from 'react';
import axios from 'axios';
const GalleryBuilder = (RefComponent, RefProps) => { 
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                allData: {},
                mapData: []
            }
        }

        componentDidMount = async() =>{
            try{
                const builderData = await axios.get(RefProps.DataSource);
                this.setState({
                    allData: builderData,
                    mapData: builderData.data
                });
                console.log('******** > State',this.state);
            }catch(err){
                console.log(err);
            }
        }

        render(){
            return (
                <div className={''}>
                    {
                        this.state.mapData.map((item)=>{
                            return <RefComponent  
                                title={item.title}
                                body={item.body}
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
