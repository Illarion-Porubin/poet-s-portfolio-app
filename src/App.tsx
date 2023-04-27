import React, { useEffect } from 'react';
import "./styles/libs/_normolize.scss";
import "./styles/common.scss";
import { Route, Routes } from "react-router-dom";
import { MainPage } from './pages/main/mainPage';
import { PoemPage } from './pages/poem/poemPage';
import { AdminPage } from './pages/admin/adminPage';
import ArticlesPage from './pages/articles/articlesPage';
import { fetchAuthMe } from "./redux/slices/authSlice";
import { useCustomDispatch } from './hooks/store';




function App() {
  const dispatch = useCustomDispatch();
  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/poem' element={<PoemPage />} />
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
