import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameComponent from './app/NameComponent';
import Counter from './app/Counter';
import Form from './app/Form';
import Input from './app/Input';

const App = () => (
  <div>
    <h1>React App</h1>
    <NameComponent name="Alexander" lastName="Kholev" />
    <Counter title="orange" />
    <Form title="AUSH FORM">
      <Input />
    </Form>
  </div>
);

export default App;
