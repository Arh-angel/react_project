import React from 'react';
import Input from './Input';

type FormPropsType = {
  title: string,
  children: React.ReactNode
}

const Form: React.FC<FormPropsType> = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    <div>
      {children}
    </div>
  </div>
);

export default Form;
