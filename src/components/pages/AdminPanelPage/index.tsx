/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import Filter from '../../common/Filter';
import PublishMenu from '../../common/PublishMenu';

import style from './AdminPanelPage.module.scss';

const AdminPanelPage = () => {
  const [openFilterMenu, setOpenFilterMenu] = useState(false);
  const [openPublishMenu, setOpenPublishMenu] = useState(false);

  const handlerFilterMenu = () => {
    setOpenFilterMenu(!openFilterMenu);
  };
  const handlerPublishMenu = () => {
    setOpenPublishMenu(!openPublishMenu);
  };

  return (
    <div className={style.container}>
      <aside>
        <div className={style.adminMenuContainer}>
          <div className={style.adminMenu}>
            <ul className={style.adminMenuList}>
              <li className={style.adminMenuitem}>
                <Link to="/profile">
                  <span className={style.adminMenuFoto} />
                  <div className={style.adminMenuNameStatus}>
                    <p className={[style.adminMenuText, style.adminMenuName].join(' ')}>Alexandr</p>
                    <p className={style.adminMenuSubText}>Админ-меню</p>
                  </div>
                </Link>
              </li>
              <li className={style.adminMenuitem}>
                <Link to="/myAds">
                  <span className={style.adminMenuLineActiveLink} />
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66666 2.5H6.66666C7.55072 2.5 8.39857 2.85119 9.02369 3.47631C9.64881 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 9.73661 16.2011 9.26776 15.7322C8.79892 15.2634 8.16304 15 7.5 15H1.66666V2.5Z" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className={style.adminMenuText}>Мои обьявдения</p>
                </Link>
              </li>
              <li className={style.adminMenuitem}>
                <Link to="/auth">
                  <span className={style.adminMenuLineActiveLink} />
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.5 2.5H17.5V7.5" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.33334 11.6667L17.5 2.5" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className={style.adminMenuText}>Выход</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div className={style.adminPageAds}>
        <div className={style.adminPageAdsHeader}>
          <div className={style.adminPageAdsHeaderText}>
            <h2 className={style.adminPageAdsHeaderTitle}>Объявления</h2>
            <p className={style.adminPageAdsHeaderSubTitle}>Всего: 45</p>
          </div>
          <Button
            title="Добавить"
            handler={() => null}
            width="129px"
            height="40px"
            background={null}
            textColor={null}
            fontSize={null}
            fontWeight={null}
            margin={null}
            borderRadius={null}
            icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4.1665V15.8332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.16663 10H15.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>} />
        </div>
        <div className={style.searchContainer}>
        <label className={style.searchInput} htmlFor="search">
          <input type="text" placeholder="Найти объявление" />
          <span className={style.searchInputLoupe}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            </svg>
          </span>
        </label>
        <div className={style.searchBtnWrapper}>
        <Button
          title="Фильтровать"
          handler={handlerFilterMenu}
          width="153px"
          height="40px"
          background="rgba(42, 47, 55, 0.08)"
          textColor="#1D1D1D"
          fontSize="14px"
          fontWeight="500"
          margin="8px 16px"
          borderRadius="0"
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.19995 12L16.7999 12" stroke="#2C2D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M3.6001 6L20.4001 6" stroke="#2C2D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M10.8 18L13.2001 18" stroke="#2C2D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} />
        {openFilterMenu ? <Filter /> : ''}
        </div>
        </div>
        <div className={style.adminPageAboutAds}>
            <Button
              title="Название объявления"
              handler={() => null}
              width="auto"
              height="40px"
              background="transparent"
              textColor="#1D1D1D"
              fontSize="12px"
              fontWeight="700"
              margin={null}
              borderRadius={null}
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
              <path d="M12 7L16 11H8L12 7Z" fill="#2C2D2E" />
              <path d="M12 17L8 13L16 13L12 17Z" fill="#2C2D2E" />
              </g>
                    </svg>} />
            <p className={style.adminPageAboutAdsTitle}>Категория</p>
            <p className={style.adminPageAboutAdsTitle}>Дата публикации</p>
            <p className={style.adminPageAboutAdsTitle}>Публикация</p>
        </div>
        <div className={style.adminPageWrapperProductList}>
          <ul className={style.adminPageProductList}>
            <li className={style.adminPageProductItem}>
              <p className={style.adminPageProductItemName}>Чепчик</p>
              <p className={style.adminPageProductItemCategory}>Одежда</p>
              <p className={style.adminPageProductItemDate}>12 апреля 2022</p>
              <p className={style.adminPageProductItemPublication}>Да</p>
              <div className={style.adminPageProductItemBtnWrapper}>
              <Button
                title={null}
                handler={handlerPublishMenu}
                width={null}
                height={null}
                background={openPublishMenu ? 'rgba(44, 45, 46, 0.04)' : 'transparent'}
                textColor={null}
                fontSize={null}
                fontWeight={null}
                margin={null}
                borderRadius={null}
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>} />
              {openPublishMenu ? <PublishMenu /> : ''}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelPage;
