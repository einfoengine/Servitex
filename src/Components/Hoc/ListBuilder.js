import React, { Component } from 'react';
import axios from 'axios';
const ListBuilder = (RefComponent, resources) => { 
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                users: {},
                userArray: [],
                status: 'Unupdated'
            }
        }

        componentDidMount = async() =>{
            try{
                const usersData = await axios.get('https://jsonplaceholder.typicode.com/users');
                this.setState({
                    users: usersData,
                    userArray: usersData.data,
                    status: 'Updated'
                });
                console.log('user',this.state);
            }catch(err){
                console.log(err);
            }
        }

        render(){
            const {userArray} = this.state;
            return (
                <section>
                    <div className={resources.wrapper}>
                        {userArray.map((user)=>{
                            console.log('***********',user);
                            return <RefComponent  
                                username={user.name}
                                avater='holder.js/50x50'
                                userDescription='Hello reader this is demo user description'
                            />
                        })}
                    </div>
                </section>
            )
        }
    }
    return NewComponent;
}

export default ListBuilder
