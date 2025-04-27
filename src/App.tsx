import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import WeaponsPage from './pages/WeaponsPage';
import WeaponDetailPage from './pages/WeaponDetailPage';
import GuidesPage from './pages/GuidesPage';
import GuideDetailPage from './pages/GuideDetailPage';
import NewsDetailPage from './pages/NewsDetailPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="characters" element={<CharacterPage />} />
          <Route path="characters/:id" element={<CharacterDetailPage />} />
          <Route path="weapons" element={<WeaponsPage />} />
          <Route path="weapons/:id" element={<WeaponDetailPage />} />
          <Route path="guides" element={<GuidesPage />} />
          <Route path="guides/:id" element={<GuideDetailPage />} />
          <Route path="news/:id" element={<NewsDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;