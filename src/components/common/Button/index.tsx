import React from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
  title: string;
  width: string;
  height: string;
  background: string | null;
  textColor: string | null;
  fontSize: string | null;
  fontWeight: string | null;
  margin: string | null,
  borderRadius: string | null
};

const Button = (props: ButtonPropsType) => {
  // eslint-disable-next-line max-len
  const { title, width, height, background, textColor, fontSize, fontWeight, margin, borderRadius } = props;

  return (
    <button className={style.wrapper} type="button" style={{ width: `${width}`, height: `${height}`, background: `${background}`, color: `${textColor}`, fontSize: `${fontSize}`, fontWeight: `${fontWeight}`, margin: `${margin}`, borderRadius: `${borderRadius}` }}>
      {title}
    </button>
  );
};

export default Button;
