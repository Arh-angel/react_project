import React, { useEffect, useState } from 'react';
import style from './Basket.module.scss';

import ProductItem from '../ProductItem';

type BasketPropsType = {
  productName: string,
  productDescription: string,
  price: number,
  action: string
}

const Basket = (props: BasketPropsType) => {
  const {
    productName, productDescription, price, action
  } = props;

  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalChenge = (currentPrice:any) => {
    setTotalPrice(() => totalPrice + currentPrice);
  };

  return (
    <div className="Basket-container">
      <ProductItem chengeTotal={handleTotalChenge} productName={productName} productDescription={productDescription} price={price} action={action} />
      <ProductItem chengeTotal={handleTotalChenge} productName={productName} productDescription={productDescription} price={price} action={action} />
      <p className={style.BasketTotalPrice}>{`Итог ${totalPrice}`}</p>
    </div>
  );
};

export default Basket;
