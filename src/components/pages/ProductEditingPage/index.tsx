/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import { Radio } from 'antd';
import React, { useState } from 'react';
import AdminMenu from '../../common/AdminMenu';
import Button from '../../common/Button';
import Input from '../../common/Form/Input';
import Select from '../../common/Form/Select';

import 'antd/dist/antd.css';
import style from './ProductEditingPage.module.scss';

const ProductEditingPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
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
          <div className={style.productEditingBlockDatePhone}>
            {isAdmin ? <div className={style.productEditingBlockDate}>
              <p>Дата публикации</p>
              <Input id="price" placeholder="12.04.2022" type="text" />
                       </div> : ''}
            <div className={style.productEditingBlockPhone}>
              <p>Телефон</p>
              <Input id="price" placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _" type="tel" />
            </div>
          </div>
          <div className={style.productEditingBlockDescription}>
            <p>Описание</p>
            <textarea name="description" id="description" placeholder="Введите текст (до 3000 символов)" />
          </div>
          <div className={style.productEditingBlockAddFile}>
            <p>Фотография</p>
            <Input id="foto" placeholder={null} type="file" />
          </div>
          <div className={style.productEditingBlockLocation}>
            <p>Местоположение</p>
            <Input id="location" placeholder="Введите адрес" type="text" />
          </div>
          <div className={style.productEditingBlockMap}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25037.141751332634!2d43.95456789538833!3d56.312718334544094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1634754578909!5m2!1sru!2sru" width="100%" height="457" allowFullScreen loading="lazy" title="Map" />
          </div>
          <div className={style.productEditingBlockPublication}>
            <p>Публикация</p>
            <div className={style.productEditingBlockPublicationBtn}>
              <Radio.Group name="radiogroup" defaultValue={1} className={style.productEditingBlockBtn}>
                <Radio value={1}>Показать</Radio>
                <Radio value={2}>Скрыть</Radio>
              </Radio.Group>
              <Button
                title="Сбросить выбор"
                handler={() => null}
                width="auto"
                height={null}
                background="transparent"
                textColor="#2A2F37"
                fontSize="16px"
                fontWeight="400"
                margin={null}
                borderRadius={null}
                icon={null} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEditingPage;
