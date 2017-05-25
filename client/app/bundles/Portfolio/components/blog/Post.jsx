import React, { Component } from 'react';
import Linkify from 'react-linkify';
import { Link } from 'react-router';

import moment from 'moment';
import _ from 'lodash';

class Post extends Component {
  constructor(props) {
    super(props);
    const { posts } = props;
    const { postId } = props.params;
    this.state = {
      post: _.find(posts, (p) => { return p.slug === postId })
    };
  }

  render() {
    const { post } = this.state;
    const content = _.map(post.content.split(/\n/g), (para, i) => {
      return (
        <div className='row' key={ i }>
          <Linkify properties={ { target: '_blank' } }>
            <p className='paragraph'>{ para }</p>
          </Linkify>
        </div>
      );
    });
    return (
      <div className='container'>
        <h5>{ post.title }</h5>
        <p className='blog-dates'>
          <span>Published: { moment(post.created_at).format('MMM Do YYYY, HH:mm') }</span>
          <span>Last updated: { moment(post.updated_at).format('MMM Do YYYY, HH:mm') }</span>
        </p>
        { content }
        <Link to="/blog"><i className='fa fa-long-arrow-left'></i> Back to blog</Link>
      </div>
    );
  }
}

export default Post;
