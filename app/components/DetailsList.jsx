import React, { Component } from 'react';
// import Components
import Detail from './Detail.jsx';

export default class DetailList extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <Detail
          columns="col-md-4"
          heading="Get Started"
          text=""
          img="img/appscreen.jpg"
          buttonText="Download Free App"
        />
        <Detail
          columns="col-md-8"
          heading="Get your personal artifical intelligence"
          text="HealthBro is here to help you live a better life. You know this feeling of 'I've known better' after you eat the cake, did not work out, missed an appointment because you stuck in traffic ... HealthBro helps you by analysing your data and giving your instant feedback. We start by optimizing your Workouts and Health but our mission is to grow into
          your personal AI. Why should you trust us more then Facebook, Google or any other comercial company? Because we care! We are an open source project, we are not in this for the profit but to give back to you and everyone. We do not make a profit on your private information. We want to bring the world a small step closer to beating our biggest enemies like HIV or even the cold."
          buttonText="Join the movement »"
        />
      </div>
    </div>
    );
  }
}
