import React from 'react';
import "./styles/libs/_normolize.scss";
import "./styles/common.scss";
import { Route, Routes } from "react-router-dom";
import Test from './pages/test/test';
import { MainPage } from './pages/main/mainPage';
import About from './pages/about/about';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
