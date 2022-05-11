/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';

import AdminMenu from '../../common/AdminMenu';
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
      <AdminMenu />
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
