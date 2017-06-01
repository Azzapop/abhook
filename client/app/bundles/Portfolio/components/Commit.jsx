import React, { Component } from 'react';

import axios from 'axios';
import _ from 'lodash';

class Commit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      commit: {}
    }
  }

  componentWillMount() {
    // TODO clean this method up
    const query = axios.get('https://api.github.com/users/Azzapop/events');
    const _this = this;
    query.then(function(result) {
      const { data } = result;
      _.forEach(data, (datum) => {
        const { commits } = datum.payload;
        if (commits) {
          const commit = commits[0];
          const _query = axios.get(commit.url);
          _query.then(function(_result) {
            _this.setState({
              loading: false,
              commit: _result.data
            });
          }).catch(function(_error) {
            console.log('ERR: ', _error);
          });
          return false;
        }
      });
    }).catch(function(error) {
      console.log('ERR: ', error)
    });
  }

  render() {
    const { loading, commit } = this.state;
    console.log(commit);
    if (loading) return <span>loading latest commit</span>;
    else return (
      <span>test</span>
    );
  }
}

export default Commit;
