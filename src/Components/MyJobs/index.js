import React, { Component } from 'react';
import axios from 'axios';
import Jobs from './Jobs';
import SearchInArray from '../Utilities/SearchInArray';

class MyJobs extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       layout: 'JobList',
       Jobs: [],
    }
  }

  componentDidMount = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      (res)=>{
        this.setState(
          {
            Jobs: res.data
          }
        );
      }
    ).catch(
      (err)=>{
        console.log((err)=>{console.log('err--', err)});
      }
    )
  }
  
  render() {
    // Get current posts
    return (
      <div className='mt-component mt-my-jobs'>
        <SearchInArray/>
        <Jobs jobs={this.state.Jobs}/>
      </div>
    );
  }
}

export default MyJobs;
