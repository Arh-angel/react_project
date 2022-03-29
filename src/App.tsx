import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PageWrapper from './components/common/PageWrapper';
import MainContainer from './containers/MainContainer';

import AccessoriesContainer from './containers/AccessoriesContainer';
import CarsContainer from './containers/CarsContainer';
import ClothesContainer from './containers/ClothesContainer';
import ForHomeContainer from './containers/ForHomeContainer';
import FurniturerContainer from './containers/FurniturerContainer';
import SportContainer from './containers/SportContainer ';
import TechniqueContainer from './containers/TechniqueContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<MainContainer />} />
      <Route path="cars" element={<CarsContainer />} />
      <Route path="accessories" element={<AccessoriesContainer />} />
      <Route path="furniture" element={<FurniturerContainer />} />
      <Route path="clothes" element={<ClothesContainer />} />
      <Route path="sport" element={<SportContainer />} />
      <Route path="technique" element={<TechniqueContainer />} />
      <Route path="forhome" element={<ForHomeContainer />} />
    </Route>
  </Routes>
);

export default App;
