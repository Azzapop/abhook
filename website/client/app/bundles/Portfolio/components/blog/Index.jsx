import React, { Component } from 'react';
import { Link } from 'react-router';

import moment from 'moment';
import _ from 'lodash';

class Index extends Component {
  constructor(props) {
    super(props);
    const { posts } = props;
    this.state = {
      posts: _.orderBy(posts, ['pinned', 'created_at'], ['desc', 'desc'])
    }
  }

  renderPosts(posts) {
    return _.map(posts, (post) => {
      return (
        <div key={ post.id } className='row blog-post'>
          <Link to={ '/blog/' + post.slug } className='blog-link'>
            <div className='box col-1 blog-icon'>
              <i className={ 'fa fa-2x ' + (post.pinned ? 'fa-thumb-tack fa-rotate-45' : 'fa-envelope') }></i>
            </div>
            <div className='box col-11 blog-context'>
              <h5>{ post.title }</h5>
              <p className='blog-dates'>
                <span>Published: { moment(post.created_at).format('MMM Do YYYY, HH:mm') }</span>
                <span>Last updated: { moment(post.updated_at).format('MMM Do YYYY, HH:mm') }</span>
              </p>
              <p>{ post.blurb }</p>
            </div>
          </Link>
        </div>
      );
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className='container'>
        {
          this.renderPosts(posts)
        }
      </div>
    );
  }
}

export default Index;
