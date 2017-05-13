import React, { Component } from 'react';
import ReactOnRails from 'react-on-rails';

import axios from 'axios';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enquiry: {
        email: '',
        message: '',
      },
      errors: {
        email: [],
        message: []
      },
      success: false
    }
  }

  updateEnquiry(data) {
    const { enquiry } = this.state;
    this.setState({
      enquiry: {
        ...enquiry,
        ...data
      }
    });
  }

  submitEnquiry() {
    // remove all current errors
    this.setState({
      errors: {
        email: [],
        message: []
      }
    });

    const csrfToken = ReactOnRails.authenticityToken();
    const { enquiry } = this.state;
    const query = axios.post('/enquiry', { enquiry: enquiry, authenticity_token: csrfToken })
    const _this = this;
    query.then(function(response) {
      const { data } = response;
      _this.setState({ success: data.success });
    }).catch(function(error) {
      const { data } = error.response;
      _this.setState({
        success: data.success,
        errors: {
          ...data.errors
        }
      });
    });
  }

  renderSuccess() {
    const { success } = this.state;
    if (success) {
      return (
        <div className='notice info' id='note'>
          <div className='dismiss'><i className='fa fa-close'></i></div>
          <span>Looks like I have your enquiry. Thanks! : {')'}</span>
        </div>
      );
    }
  }

  renderErrors() {
    const { errors } = this.state;
    return _.map(errors, function(errs, type) {
      return _.map(errs, function(err) {
        // TODO change so that dismiss is react based
        return (
          <div key={ err } className='notice error' id='note'>
            <div className='dismiss'><i className='fa fa-close'></i></div>
            <span><b>{ type }:</b> { err }</span>
          </div>
        );
      });
    });
  }

  render() {
    const { email, message } = this.state.enquiry;
    return (
      <div id='enquiry-form'>
        <div className='row'>
          <div className='box col-12'>
            {
              this.renderSuccess()
            }
          </div>
          <div className='box col-12'>
            {
              this.renderErrors()
            }
          </div>
          <div className='box col-6'>
            <input type='text' value={ email } onChange={ (e) => this.updateEnquiry({ email: e.target.value  }) } placeholder='email' />
          </div>
          <div className='box col-12'>
            <textarea value={ message } onChange={ (e) => this.updateEnquiry({ message: e.target.value }) } placeholder='message' />
          </div>
          <div className='box col-1'>
            <button type='submit' className='btn dark clean' onClick={ () => this.submitEnquiry() }>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
