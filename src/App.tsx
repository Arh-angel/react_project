import React from 'react';
import MainContainer from './containers/MainContainer';
import AuthContainer from './containers/AuthContainer';
import RegistrationContainer from './containers/RegistrationContainer';

const App = () => {
  console.log('APP => start');
  return (
    <>
      {/* <MainContainer /> */}
      {/* <AuthContainer /> */}
      <RegistrationContainer />
    </>
  );
};

export default App;
