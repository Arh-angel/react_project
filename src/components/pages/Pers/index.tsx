import React from 'react';

type PersType = {
  userInfo: { id: number; name: string; species: string; url: string; image: string } | undefined;
}

const Pers = ({ userInfo }:PersType) => {
  console.log('pers');
  return (
    <>
      <h1>USER INFO</h1>
      <img src={userInfo?.image} alt="" />
      <h2>{userInfo?.name}</h2>
      <h2>{userInfo?.species}</h2>
    </>
  );
};

export default Pers;
