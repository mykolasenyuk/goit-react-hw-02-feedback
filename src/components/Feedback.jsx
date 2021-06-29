import React from 'react';
import Controls from './Controls';
import Statistics from './Statistics';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  btnGood = evt => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  bntNeutral = evt => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  btnBad = evt => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave your feedback</h2>
        <Controls
          onGood={this.btnGood}
          onNeutral={this.bntNeutral}
          onBad={this.btnBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}

export default Feedback;
