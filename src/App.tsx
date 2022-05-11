import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthHOC from './components/hoc/AuthHOC';
import PageWrapper from './components/common/PageWrapper';

import RegistrationContainer from './containers/RegistrationContainer';
import AuthContainer from './containers/AuthContainer';
import NotFoundContainer from './containers/NotFoundContainer';

import MainContainer from './containers/MainContainer';
import AdminPanelContainer from './containers/AdminPanelContainer';
import ProductEditingContainer from './containers/ProductEditingContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<AuthHOC><MainContainer /></AuthHOC>} />
      <Route path="adminPanel" element={<AuthHOC><AdminPanelContainer /></AuthHOC>} />
      <Route path="productEditing" element={<AuthHOC><ProductEditingContainer /></AuthHOC>} />
      <Route path="reg" element={<RegistrationContainer />} />
      <Route path="auth" element={<AuthContainer />} />
      <Route path="*" element={<NotFoundContainer />} />
    </Route>
  </Routes>
);

export default App;
