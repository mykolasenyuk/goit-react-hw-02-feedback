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

  countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  countPositiveFeedbackPercentage = (good, neutral, bad) =>
    Math.round((good * 100) / this.countTotalFeedback(good, neutral, bad));
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(good, bad, neutral);
    const positiveFeedPercentage = this.countPositiveFeedbackPercentage(
      good,
      neutral,
      bad,
    );

    return (
      <div>
        <h2>Please leave your feedback</h2>
        <Controls
          onGood={this.btnGood}
          onNeutral={this.bntNeutral}
          onBad={this.btnBad}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positiveFeedPercentage={positiveFeedPercentage}
        />
      </div>
    );
  }
}

export default Feedback;
