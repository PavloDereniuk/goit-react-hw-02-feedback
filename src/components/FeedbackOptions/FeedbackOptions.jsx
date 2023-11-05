import { Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <List>
        {options.map(item => (
          <li key={item}>
            <Button type="button" onClick={() => onLeaveFeedback(item)}>
              {item}
            </Button>
          </li>
        ))}
      </List>
    </>
  );
};