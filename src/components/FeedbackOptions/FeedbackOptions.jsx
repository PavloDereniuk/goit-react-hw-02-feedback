export const FeedbackOptions = ({ options }) => {
  return (
    <>
      <button onClick={options[0]}>Good</button>
      <button onClick={options[1]}>Neutral</button>
      <button onClick={options[2]}>Bad</button>
    </>
  );
};
