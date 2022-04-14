/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './Checkbox.module.scss';

const Checkbox = () => {
  const [checkedValue, setCheckedValue] = useState(true);
  return (
    <div className={style.wrapper}>
      <label className={style.section__checkbox}>
        <input type="checkbox" checked={checkedValue} onChange={() => {}} onClick={() => setCheckedValue(!checkedValue)} />
        <span className={style.checkmark} />
      </label>
      <div className={style.text__wrapper}>
        <p>
          Принимаю условия
        </p>
        <Link to="/agreement" className={style.link_agreement}>Пользовательского соглашения</Link>
      </div>
    </div>
  );
};

export default Checkbox;
