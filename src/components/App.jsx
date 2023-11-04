import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container.styled';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedback = () =>
    this.setState(prevState => ({ good: prevState.good + 1 }));

  neutralFeedback = () =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));

  badFeedback = () => this.setState(prevState => ({ bad: prevState.bad + 1 }));

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please live feedback">
          <FeedbackOptions
            options={[
              this.goodFeedback,
              this.neutralFeedback,
              this.badFeedback,
            ]}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
        <GlobalStyle />
      </Container>
    );
  }
}
