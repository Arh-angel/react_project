import React from 'react';
import ModalWindow from '../../components/pages/ModalWindow/Index';

type ModalWindowContainerPropsType = {
  productName: string,
  productDescription: string,
  price: number,
}

const ModalWindowContainer = (props: ModalWindowContainerPropsType) => {
  const { productName, productDescription, price } = props;

  return (
    <ModalWindow productName={productName} productDescription={productDescription} price={price} />
  );
};

export default ModalWindowContainer;
