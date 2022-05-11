/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import React from 'react';
import AdminMenu from '../../common/AdminMenu';
import Button from '../../common/Button';
import Input from '../../common/Form/Input';
import Select from '../../common/Form/Select';

import style from './ProductEditingPage.module.scss';

const ProductEditingPage = () => {
  console.log('product editing');

  return (
    <div className={style.container}>
      <AdminMenu />
      <div className={style.productEditingWrapper}>
        <Button
          title="Вернуться назад"
          handler={() => null}
          width="auto"
          height={null}
          background="transparent"
          textColor="#2A2F37"
          fontSize="14px"
          fontWeight="400"
          margin={null}
          borderRadius={null}
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 10.5H5.745L14.13 2.115L12 0L0 12L12 24L14.115 21.885L5.745 13.5H24V10.5Z" fill="#2C2D2E" />
                </svg>} />
        <div className={style.productEditingHeaderBlock}>
          <h3 className={style.productEditingHeaderBlockTitle}>Чепчик</h3>
          <Button title="Сохранить" handler={() => null} width="147px" height="40px" background="#3A95FF" textColor="#FFFFFF" fontSize="14px" fontWeight="500" margin={null} borderRadius={null} icon={null} />
        </div>
        <div className={style.productEditingBlock}>
          <div className={style.productEditingBlockName}>
            <p>Название товара</p>
            <Input id="name" placeholder="Чепчик" type="text" />
          </div>
          <div className={style.productEditingBlockSelectPrice}>
            <div className={style.productEditingBlockSelect}>
              <p>Категория</p>
              <Select />
            </div>
            <div className={style.productEditingBlockPrice}>
              <p>Стоимость</p>
              <Input id="price" placeholder="15000" type="text" />
            </div>
          </div>
          <div className={style.productEditingBlockPhone}>
            <p>Телефон</p>
            <Input id="price" placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _" type="tel" />
          </div>
          <div className={style.productEditingBlockDescription}>
            <p>Описание</p>
            <textarea name="description" id="description" placeholder="Введите текст (до 3000 символов)" />
          </div>
          <div className={style.productEditingBlockAddFile}>
            <p>Фотография</p>
            <Input id="foto" placeholder={null} type="file" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEditingPage;
