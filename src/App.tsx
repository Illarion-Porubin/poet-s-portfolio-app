import React from 'react';
import "./styles/libs/_normolize.scss";
import "./styles/common.scss";
import { Route, Routes } from "react-router-dom";
import { MainPage } from './pages/main/mainPage';
import { AboutPage } from './pages/about/about';
import { PoemPage } from './pages/poem/poemPage';
import { AdminPage } from './pages/admin/adminPage';
import ArticlesPage from './pages/articles/articlesPage';




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/poem' element={<PoemPage />} />
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
