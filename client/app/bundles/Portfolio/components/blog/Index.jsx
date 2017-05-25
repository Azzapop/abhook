import React, { Component } from 'react';
import { Link } from 'react-router';

import moment from 'moment';
import _ from 'lodash';

class Index extends Component {
  constructor(props) {
    super(props);
    const { posts } = props;
    let error;
    if (props.location.state) error = props.location.state;
    this.state = {
      posts: _.orderBy(posts, ['pinned', 'created_at'], ['desc', 'desc']),
      error: error
    }
  }

  componentWillMount() {
    this.props.router.replace({
      ...this.props.location,
      state: undefined
    });
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

  renderError(error) {
    if (error) {
      return (
        <div className='notice error blog-error'>
          <div className='dismiss' onClick={ () => this.setState({ error: false }) }><i className='fa fa-close'></i></div>
          <p>Oops!</p>
          <p>Looks like that blog post doesn't exist. Maybe you can find what you were looking for below.</p>
        </div>
      );
    }
  }

  render() {
    const { posts, error } = this.state;
    return (
      <div className='container'>
        {
          this.renderError(error)
        }
        {
          this.renderPosts(posts)
        }
      </div>
    );
  }
}

export default Index;
