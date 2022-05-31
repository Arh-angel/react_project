import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthHOC from './components/hoc/AuthHOC';
import PageWrapper from './components/common/PageWrapper';

import RegistrationContainer from './containers/RegistrationContainer';
import AuthContainer from './containers/AuthContainer';

import MainContainer from './containers/MainContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import AdsContainer from './containers/AdsContainer';
import ProductEditingContainer from './containers/ProductEditingContainer';
import ErContainer from './containers/ErContainer';
import ProductContainer from './containers/ProductContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<AuthHOC><MainContainer /></AuthHOC>} />
      <Route path="/:id" element={<AuthHOC><ProductContainer /></AuthHOC>} />
      <Route path="ads" element={<AuthHOC><AdsContainer /></AuthHOC>} />
      <Route path="productEditing" element={<AuthHOC><ProductEditingContainer /></AuthHOC>} />
      <Route path="searchResults" element={<AuthHOC><SearchResultsContainer /></AuthHOC>} />
      <Route path="reg" element={<RegistrationContainer />} />
      <Route path="auth" element={<AuthContainer />} />
      <Route path="*" element={<ErContainer />} />
    </Route>
  </Routes>
);

export default App;
