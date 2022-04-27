import React from 'react';
import { Link } from 'react-router-dom';

import { Menu, Dropdown, message, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import style from './DropDownMenu.module.scss';

const onClick = ({ key }:any) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu
    onClick={onClick}
    items={[
      {
        label: '1st menu item',
        key: '1',
      },
      {
        label: '2nd menu item',
        key: '2',
      },
      {
        label: '3rd menu item',
        key: '3',
      },
    ]}
  />
);

export default () => (
  <Dropdown className={style.list} overlay={menu}>
    <Link to="/profile">
      <Space>
        Профиль
      </Space>
    </Link>
  </Dropdown>
);
