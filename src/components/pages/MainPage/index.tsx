import React, { useState } from 'react';
import PageWrapper from '../../common/PageWrapper';
import { data } from '../../../helpers';
import Button from '../../common/Button';

const MainPage = () => {
  const [listVisible, setListVisible] = useState(false);
  const heandler = () => {

  };
  return (
    <PageWrapper>
      <h1>Main content</h1>
      <ul>
        {data.map((el) => (
          <li>
            <h3>{el.name}</h3>
            <p>{el.age}</p>
          </li>
        ))}
      </ul>
      <Button title="Показать" onClick={heandler} />
    </PageWrapper>
  );
};

export default MainPage;
