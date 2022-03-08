import React, { SyntheticEvent } from 'react';
import './NameComponent.css';

type NameComponentPropsType = {
  name: string,
  lastName: string
}

const NameComponent = (props: NameComponentPropsType) => {
  const { name, lastName } = props;
  const heandler = (event: SyntheticEvent) => {
    console.log(event.target, 'currentTarget');
    console.log(event.target, 'target');
  };
  const mainHeandler = (event: SyntheticEvent) => {
    console.log(event.target, 'currentTarget');
    console.log(event.target, 'target');
  };

  return (
    <div role="presentation" onClick={mainHeandler} className="container">
      <p className="firstName">{lastName}</p>
      <p className="secondName">{name}</p>
      <button onClick={heandler} type="button">Clic!</button>
    </div>
  );
};

export default NameComponent;
