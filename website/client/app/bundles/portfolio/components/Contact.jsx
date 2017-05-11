import React, { Component } from 'react';
import ReactOnRails from 'react-on-rails';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enquiry: {
        email: '',
        message: '',
      }
    }
  }

  submitEnquiry() {
    const csrfToken = ReactOnRails.authenticityToken();
    const { enquiry } = this.state;
    const response = axios.post('/enquiry', { enquiry: enquiry, authenticity_token: csrfToken })
    response.then(function(data) {
      // TODO return correct function && update tests acordingly
      console.log(data);
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    const { email, message } = this.state.enquiry;
    return (
      <div className='enquiry-form'>
        <div className='row'>
          <div className='box col-6'>
            <input type='text' value={ email } onChange={ (e) => this.setState({ enquiry: { email: e.value  } }) } placeholder='email' />
          </div>
          <div className='box col-12'>
            <textarea value={ message } onChange={ (e) => this.setState({ enquiry: { message: e.value } }) } placeholder='message' />
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
