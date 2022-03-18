import React, { useEffect, useState } from 'react';
import style from './ModalWindowAddProduct.module.scss';

type ModalWindowAddProductPropsType = {
  productName: string,
  productDescription: string,
  price: number,
}

const ModalWindowAddProduct = (props: ModalWindowAddProductPropsType) => {
  const {
    productName, productDescription, price
  } = props;

  const [totalPrice, setTotalPrice] = useState(0);
  const [number, setNumber] = useState(1);
  const [currentPrice, setCurrentPrice] = useState(0);

  const minusNumHeandler = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const plusNumHeandler = () => {
    setNumber(number + 1);
  };
  useEffect(() => {
    setCurrentPrice(price);
  }, [price]);

  useEffect(() => {
    setCurrentPrice(price * number);
  }, [number]);

  useEffect(() => {
    setTotalPrice(currentPrice);
  }, [currentPrice]);

  return (
    <div className={style.ModalWindowAddProductContainer}>
      <div className={style.ModalWindowAddProductImg}>
        <img src="productImg.png" alt="product-img" />
      </div>
      <div className={style.ModalWindowAddProductSetting}>
        <div className={style.ModalWindowAddProductDescription}>
          <h3 className={style.ModalWindowAddProductTitle}>{ productName }</h3>
          <p className={style.ModalWindowAddProductText}>{ productDescription }</p>
        </div>
        <div className={style.ModalWindowAddProductNumberPrice}>
          <div className={style.ModalWindowAddProductNumber}>
            <button type="button" onClick={minusNumHeandler} className={style.ModalWindowAddProductNumberBtn}>
              <svg width="40" height="4" viewBox="0 0 40 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M39.5652 0H0.434783C0.195652 0 0 0.189474 0 0.421053V3.57895C0 3.81053 0.195652 4 0.434783 4H39.5652C39.8043 4 40 3.81053 40 3.57895V0.421053C40 0.189474 39.8043 0 39.5652 0Z"
                  fill="#816348" />
              </svg>
            </button>
            <p className={style.ModalWindowAddProductNumberFig}>{ number }</p>
            <button type="button" onClick={plusNumHeandler} className={style.ModalWindowAddProductNumberBtn}>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.5352 7.42188H26.4648C26.7253 7.42188 26.8555 7.55208 26.8555 7.8125V42.1875C26.8555 42.4479 26.7253 42.5781 26.4648 42.5781H23.5352C23.2747 42.5781 23.1445 42.4479 23.1445 42.1875V7.8125C23.1445 7.55208 23.2747 7.42188 23.5352 7.42188Z"
                  fill="#816348" />
                <path
                  d="M8.59375 23.1445H41.4062C41.6667 23.1445 41.7969 23.2747 41.7969 23.5352V26.4648C41.7969 26.7253 41.6667 26.8555 41.4062 26.8555H8.59375C8.33333 26.8555 8.20312 26.7253 8.20312 26.4648V23.5352C8.20312 23.2747 8.33333 23.1445 8.59375 23.1445Z"
                  fill="#816348" />
              </svg>
            </button>
          </div>
          <p className={style.ModalWindowAddProductPrice}>
            { currentPrice }
            { ' ' }
            руб.
          </p>
        </div>
        <div className={style.ModalWindowAddProductTotalPay}>
          <div className={style.ModalWindowAddProductTotalPayWrapper}>
            <p className={style.ModalWindowAddProductTotal}>
              Итого:
              { ' ' }
              { totalPrice }
              { ' ' }
              руб.
            </p>
            <div className={style.ModalWindowAddProductPayWrapper}>
              <button type="button" className={style.ModalWindowAddProductPay}>
                Добавить в корзину
                <svg width="256" height="24" viewBox="0 0 256 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M255.065 13.0565C255.648 12.4684 255.645 11.5186 255.056 10.9352L245.473 1.42702C244.885 0.843553 243.935 0.847307 243.352 1.4354C242.768 2.0235 242.772 2.97324 243.36 3.55671L251.879 12.0084L243.427 20.5271C242.844 21.1152 242.847 22.065 243.435 22.6484C244.024 23.2319 244.973 23.2282 245.557 22.6401L255.065 13.0565ZM1.00593 14.5L254.006 13.5L253.994 10.5L0.994071 11.5L1.00593 14.5Z"
                    fill="#816348" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindowAddProduct;
