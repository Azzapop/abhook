import React, { Component } from 'react';
import ReactOnRails from 'react-on-rails';

import axios from 'axios';
import _ from 'lodash';

class Contact extends Component {
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
    const errors = {
      email: [],
      message: []
    };

    const csrfToken = ReactOnRails.authenticityToken();
    const { enquiry } = this.state;
    const query = axios.post('/enquiry', { enquiry: enquiry, authenticity_token: csrfToken })
    const _this = this;
    query.then(function(response) {
      const { data } = response;
      _this.setState({
        success: data.success,
        enquiry: {
          email: '',
          message: ''
        },
        errors: errors
      });
    }).catch(function(error) {
      const { data } = error.response;
      _this.setState({
        success: data.success,
        errors: {
          ...errors,
          ...data.errors
        }
      });
    });
  }

  dismissSuccess() {
    this.setState({ success: false });
  }

  renderSuccess() {
    const { success } = this.state;
    if (success) {
      return (
        <div className='notice info' id='note'>
          <div className='dismiss' onClick={ () => this.dismissSuccess() }><i className='fa fa-close'></i></div>
          <span>Looks like I have your enquiry. Thanks! : {')'}</span>
        </div>
      );
    }
  }

  dismissError(type, err) {
    const { errors } = this.state;
    this.setState({
      errors: {
        ...errors,
        [type]: _.without(errors[type], err)
      }
    });
  }

  renderErrors() {
    const { errors } = this.state;
    const _this = this;
    return _.map(errors, function(errs, type) {
      return _.map(errs, function(err) {
        return (
          <div key={ err } className='notice error'>
            <div className='dismiss' onClick={ () => _this.dismissError(type, err) }><i className='fa fa-close'></i></div>
            <span><b>{ type }:</b> { err }</span>
          </div>
        );
      });
    });
  }

  render() {
    const { email, message } = this.state.enquiry;
    const { errors } = this.state;
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
            <input className={ errors.email.length > 0 ? 'input-error': '' } type='text' value={ email } onChange={ (e) => this.updateEnquiry({ email: e.target.value  }) } placeholder='email' />
          </div>
          <div className='box col-12'>
            <textarea className={ errors.message.length > 0 ? 'input-error': '' } value={ message } onChange={ (e) => this.updateEnquiry({ message: e.target.value }) } placeholder='message' />
          </div>
          <div className='box col-1'>
            <button type='submit' className='btn dark clean' onClick={ () => this.submitEnquiry() }>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
