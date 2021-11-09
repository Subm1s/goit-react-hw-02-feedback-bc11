import React, {Component} from "react";
// import s from './App.module.css';
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Statistics from "./components/Statistics";

class App extends Component {

    static defaultProps ={
        initialValueGood: 0,
        initialValueNeutral: 0,
        initialValueBad: 0
    }

state = {
  good: this.props.initialValueGood,
  neutral: this.props.initialValueNeutral,
  bad: this.props.initialValueBad
}

handleInc = event => {
  const name = event.target.name;
  this.setState(prevState => {
    return {
      [name]: prevState[name] + 1,
    };
  });
};

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
};

countPositiveFeedbackPercentage = () => {
  const result = Math.round(
    (this.state.good / this.countTotalFeedback()) * 100,
  );
  return result;
};

render() {
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions handleInc={this.handleInc} />
      </Section>

      <Section title="Statistics">
        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        ) : (
          <p>No feedback given</p>
        )}
      </Section>
    </>
  );
}
}

  export default App;