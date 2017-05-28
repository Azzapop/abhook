import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format('ddd, DD MMM YYYY HH:mm:ss')
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      time: moment().format('ddd, DD MMM YYYY HH:mm:ss')
    });
  }

  render() {
    const { time } = this.state;
    return <p className='date left'><i className='fa fa-calendar'></i> { time }</p>;
  }
}

export default Clock;
