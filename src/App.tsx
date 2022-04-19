import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthHOC from './components/hoc/AuthHOC';
import PageWrapper from './components/common/PageWrapper';
import MainContainer from './containers/MainContainer';

import AccessoriesContainer from './containers/AccessoriesContainer';
import CarsContainer from './containers/CarsContainer';
import ClothesContainer from './containers/ClothesContainer';
import ForHomeContainer from './containers/ForHomeContainer';
import FurniturerContainer from './containers/FurniturerContainer';
import SportContainer from './containers/SportContainer ';
import TechniqueContainer from './containers/TechniqueContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import AuthContainer from './containers/AuthContainer';
import NotFoundContainer from './containers/NotFoundContainer';
import Pers from './components/pages/Pers';
import PersContainer from './containers/PersContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<AuthHOC><MainContainer /></AuthHOC>} />
      <Route path="/:id" element={<AuthHOC><PersContainer /></AuthHOC>} />
      <Route path="cars" element={<AuthHOC><CarsContainer /></AuthHOC>} />
      <Route path="accessories" element={<AuthHOC><AccessoriesContainer /></AuthHOC>} />
      <Route path="furniture" element={<AuthHOC><FurniturerContainer /></AuthHOC>} />
      <Route path="clothes" element={<AuthHOC><ClothesContainer /></AuthHOC>} />
      <Route path="sport" element={<AuthHOC><SportContainer /></AuthHOC>} />
      <Route path="technique" element={<AuthHOC><TechniqueContainer /></AuthHOC>} />
      <Route path="forhome" element={<AuthHOC><ForHomeContainer /></AuthHOC>} />
      <Route path="reg" element={<RegistrationContainer />} />
      <Route path="auth" element={<AuthContainer />} />
      <Route path="*" element={<NotFoundContainer />} />
    </Route>
  </Routes>
);

export default App;
