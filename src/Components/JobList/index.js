import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts';
import Pagination from '../Elements/Pagination';
import SearchInArray from '../Elements/SearchInArray';

class JobList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       layout: 'JobList',
       jobPosts: [],
       loading: false,
       currentPage: 1, 
       postsPerPage: 10
    }
  }

  componentDidMount = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      (res)=>{
        console.log('data--',res);
        this.setState(
          {
            jobPosts: res.data
          }
        );
      }
    ).catch(
      (err)=>{
        console.log((err)=>{console.log('err--', err)});
      }
    )
  }

  // Change page
  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    });
  }
  
  render() {
    // Get current posts
    let indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    let indexOfFirstPost = this.state.indexOfLastPost - this.state.postsPerPage;
    let currentPosts = this.state.jobPosts.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div>
        <SearchInArray/>
        <Posts posts={currentPosts} loading={this.state.loading}/>
        <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.jobPosts.length} paginate={this.paginate}/>
      </div>
    );
  }
}

export default JobList;
