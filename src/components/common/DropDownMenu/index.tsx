/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './DropDownMenu.module.scss';

const DropDownMenu = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  console.log('dropDownMenu');

  const handler = () => {
    setDropDownMenu(!dropDownMenu);
  };

  return (
    <div className={style.dropDownMenuContainer} onMouseEnter={handler}>
      <p className={style.dropDownMenuLink}>Профиль</p>
      {dropDownMenu ? <div className={style.dropDownMenu} onMouseEnter={() => setDropDownMenu(true)} onMouseLeave={handler}>
        <ul className={style.dropDownMenuList}>
          <li className={style.dropDownMenuitem}>
            <Link to="/profile">
              <span className={style.dropDownMenuFoto} />
              <p className={[style.dropDownMenuText, style.dropDownMenuName].join(' ')}>Сергей Н.</p>
            </Link>
          </li>
          <li className={style.dropDownMenuitem}>
            <Link to="/profile">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.66666 2.5H6.66666C7.55072 2.5 8.39857 2.85119 9.02369 3.47631C9.64881 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 9.73661 16.2011 9.26776 15.7322C8.79892 15.2634 8.16304 15 7.5 15H1.66666V2.5Z" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className={style.dropDownMenuText}>Мои обьявдения</p>
            </Link>
          </li>
          <li className={style.dropDownMenuitem}>
            <Link to="/">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.5 2.5H17.5V7.5" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.33334 11.6667L17.5 2.5" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className={style.dropDownMenuText}>Выход</p>
            </Link>
          </li>
        </ul>
      </div> : ''}
    </div>
  );
};

export default DropDownMenu;
