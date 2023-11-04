import { Section } from '../Section/Section';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <Section title="Good:">
        <p>{good}</p>
      </Section>
      <Section title="Neutral:">
        <p> {neutral}</p>
      </Section>
      <Section title="Bad:">
        <p> {bad}</p>
      </Section>
      <Section title="Total:">
        <p>{total}</p>
      </Section>
      <Section title="Positive feedback:">
        <p> {positivePercentage}%</p>
      </Section>
    </div>
  );
};
