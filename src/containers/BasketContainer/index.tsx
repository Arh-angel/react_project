import React from 'react';
import Basket from '../../components/pages/Basket';

type BasketPropsType = {
  productName: string,
  productDescription: string,
  price: number,
  action: string
}

const BasketContainer = (props: BasketPropsType) => {
  const {
    productName, productDescription, price, action
  } = props;

  return (
    <Basket productName={productName} productDescription={productDescription} price={price} action={action} />
  );
};

export default BasketContainer;
