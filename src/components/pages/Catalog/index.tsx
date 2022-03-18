import React from 'react';

import style from './Catalog.module.scss';
import ProductCard from '../ProductCard';

const Catalog = () => (
  <div className={style.CatalogContainer}>
    <ProductCard productName="Text" price={150} img="productImg.png" />
    <ProductCard productName="Text" price={150} img="productImg.png" />
    <ProductCard productName="Text" price={150} img="productImg.png" />
    <ProductCard productName="Text" price={150} img="productImg.png" />
    <ProductCard productName="Text" price={150} img="productImg.png" />
    <ProductCard productName="Text" price={150} img="productImg.png" />
    <ProductCard productName="Text" price={150} img="productImg.png" />
    <ProductCard productName="Text" price={150} img="productImg.png" />
    <ProductCard productName="Text" price={150} img="productImg.png" />
  </div>
);

export default Catalog;
