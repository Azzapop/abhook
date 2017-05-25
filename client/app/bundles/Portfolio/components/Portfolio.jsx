import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='box col-12'>
            <img className='img thumbnail round left portrait' src='https://avatars3.githubusercontent.com/u/4386657?v=3&s=460' />
            <h2 className='heading'>Aaron Hook</h2>
            <h1 className='sub-heading'>Software Developer</h1>
            <p>Hey there! Welcome to abhook.id.au! My name is Aaron Hook and I'm the owner of this fine establishment. In high school I began to learn the joy of coding from my teacher, and took every computer science course I possibly could. Once I had graduated high school it was only natural I continued my studies, recieving a scholarship from the University of Sydney. I graduated in 2016 with a Bachelor of Computer Science and Technology. Ever since I've been developing my skills and working to produce the best projects I can.</p>
          </div>
        </div>
        <div className='row'>
          <div className='box col-12'>
            <h2 className='section-heading'>Check out some of the things I've done</h2>
          </div>
        </div>
        <div className='row'>
          <div className='box col-12 buttons'>
            <a href='https://github.com/Azzapop' target='_blank' className='btn dark clean'>Github: Azzapop <i className='fa fa-github'></i></a>
            <a href='' className='btn dark clean'>Resume <i className='fa fa-address-card-o'></i></a>
          </div>
        </div>
        <div className='row'>
          <div className='box col-12'>
            <p>showcase some work here</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
