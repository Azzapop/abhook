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
            <img className='img thumbnail round left portrait' src='https://res.cloudinary.com/abhook/image/upload/v1496833315/10502077_10201515273042966_129626617606738027_n_p8bsw8.jpg' />
            <h2 className='heading'>Aaron Hook</h2>
            <h1 className='sub-heading'>Software Developer</h1>
            <p>Hey there! Welcome to abhook.id.au! My name is Aaron Hook and I'm the owner of this fine establishment. In high school I began to learn the joy of coding from my teacher, and took every computer science course I possibly could. Once I had graduated high school it was only natural I continued my studies, recieving a scholarship from the University of Sydney. I graduated in 2016 with a Bachelor of Computer Science and Technology. Ever since I've been developing my skills and working to produce the best projects I can.</p>
            <div className='buttons'>
              <a href='https://github.com/Azzapop' target='_blank' className='btn info clean'>Github: Azzapop <i className='fa fa-github'></i></a>
              <a href='https://res.cloudinary.com/abhook/image/upload/v1496833330/Aaron_CV_qt7nvq.pdf' target='_blank' className='btn info clean'>Resume <i className='fa fa-address-card-o'></i></a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='box col-12'>
            <h2 className='section-heading'>Check out some of the things I've built</h2>
          </div>
        </div>
        <div className='row'>
          <div className='box col-12'>
            <h5>abhook.id.au</h5>
            <p>My pride and joy, the website you see before your very eyes. It's been built using a Rails backend, and then utilising the <a href='https://github.com/shakacode/react_on_rails' target='_blank'>React on Rails gem</a> to seamlessly integrate React components into the frontend to assist creation of the user interface (Checkout the clock in the bottom left for an example). Be sure to look around and tell me what you think.</p>
          </div>
        </div>
        <div className='row'>
          <div className='box col-12'>
            <h5><a href='https://coderfactoryacademy.edu.au' target='_blank'>coderfactoryacademy.edu.au</a></h5>
            <p>My first major project after graduation. The Coder Factory Academy website was built using Ruby on Rails. I worked with both the designer, and marketing and academic staff to design and create a website that would capture the required customer data as well as allow users to accurately locate which courses are right for them. It features a fully operational booking system, with payment integration through Stripe, as well as a custom integration using the HubSpot API to deliver customer data to the HubSpot CRM. More recently we have implemented a new Online Course which required the creation of an online video delivery system, to provide a sophisticated, functional experience to assisst with their learning.</p>
          </div>
        </div>
        <div className='row'>
          <div className='box col-12'>
            <h5><a href='http://thefootnotes-quiz.com.au' target='_blank'>thefootnotes-quiz.com.au</a></h5>
            <p>The first fully fledged React app that I deployed to production. After the footnotes came to us in need of an online quiz, we decided this would be the best opportunity to test my new React skills. I feel React worked well for this, as we were able to effortlessly manage the quiz status, by upddating the state to track which questions had been answered and whether they had been answered correctly or not. Rather than go through the tedium of creating a new app from scrath, we decided to use the <a href='https://github.com/facebookincubator/create-react-app' target='_blank'>create-react-app</a> generater to handle the framework creation for us.</p>
          </div>
        </div>
        <div className='row'>
          <div className='box col-12'>
            <h2 className='section-heading section-break'>And here's some of the cool things I've done</h2>
          </div>
        </div>
        <div className='row'>
          <div className='box col-12'>
            <h5><a href='https://github.com/twlevelup/green_team_watch' target='_blank'>2015 - ThoughtWorks LevelUp</a></h5>
            <p>In 2015 I participated in an exprience program at ThoughtWorks called LevelUp. Our project team consisted of an Experience Designer, a few Business Analyists, and several Software Developers. Throughout the project we were coached on various aspects of the industry, such as continous delivery / integration, the correct way to pair program and test driven development. We worked as a team, to discover a solution to providing engaging education to indiginous children through a smart watch app. Once we had our solution we worked to design the app and use a kanban board to distribute each individual task as it was borken down to the various pair programming teams.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
