import './TitlePage.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from './Introduction';
import Instructions from './Instructions';
import Questions from './questions';
import Title from './TitlePage';
function App() {
  return (
      <BrowserRouter>
            <Routes>
              <Route path="" element={<Title/>}/>
              <Route path="intro" element={<Introduction />}/>
              <Route path="instructions" element={<Instructions />}/>
              <Route path="instructions" element={<Questions />}>
              </Route>
            </Routes>
          </BrowserRouter>
  );
}

export default App;
