import React, { useState } from 'react';
import style from './ProductCard.module.scss';

type ProductCardPropsType = {
  productName: string,
  price: number
  img: string
}

const ProductCard = (props: ProductCardPropsType) => {
  const { productName, price, img } = props;
  const [condition, setCondition] = useState(1);

  const conditionHeandler = () => {
    setCondition(condition + 1);
  };

  return (
    <div role="presentation" className={style.ProductCardContainer} onClick={conditionHeandler}>
      <div className={style.ProductCardImgWrapper}>
        <img className={style.ProductCardImg} src={img} alt="imgProduct" />
      </div>
      <div className={style.ProductCardDescription}>
        <h5 className={style.ProductCardTitle}>{ productName }</h5>
        <p className={style.ProductCardPrice}>
          { price }
          {' '}
          руб.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
