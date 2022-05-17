/* eslint-disable react/jsx-indent */
import React from 'react';
import Button from '../../common/Button';

import style from './ProductPage.module.scss';

const ProductPage = () => {
  console.log('Product Page');

  return (
    <div className={style.container}>
      <Button
        title={null}
        handler={() => null}
        width={null}
        height={null}
        background="transparent"
        textColor={null}
        fontSize={null}
        fontWeight={null}
        margin={null}
        borderRadius={null}
        icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 10.5H5.745L14.13 2.115L12 0L0 12L12 24L14.115 21.885L5.745 13.5H24V10.5Z" fill="#2C2D2E" />
              </svg>} />
      <div className={style.productHeader}>
        <div className={style.productHeaderDateTitle}>
          <p className={style.productHeaderDate}>14 апреля 2022</p>
          <h1 className={style.productHeaderTitle}>Стиральная машина Bosch</h1>
          <p className={style.productHeaderDate}></p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
