import React from 'react';

type CounterPropsType = {
  title: string;
};

const Counter = (props: CounterPropsType) => {
  const { title } = props;

  const [count, setCount] = React.useState(7);
  const [step, setStep] = React.useState(1);

  const addHeandler = () => {
    setCount(count + step);
  };

  const removeHeandler = () => {
    setCount(count - step);
  };
  return (
    <div>
      <h5>{title}</h5>
      <p>{`${count}`}</p>
      <div>
        <button type="button" onClick={addHeandler}>{`add ${step}`}</button>
        <button type="button" onClick={removeHeandler}>{`remove ${step}`}</button>
      </div>
      <div>
        <button type="button" onClick={() => setStep(step + 1)}>step plus</button>
        <button type="button" onClick={() => setStep(step - 1)}>step minus</button>
      </div>
    </div>
  );
};

export default Counter;
