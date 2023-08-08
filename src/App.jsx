import React, { useState, useEffect, useRef } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ContentBody from './components/ContentBody';
import Censo from './components/Censo';
import Graficas from './components/Graficas';
import MapaCensosDep from './components/MapaCensosDep';
import Register from './components/Register';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<ContentBody />}>
          <Route index element={<Home />} />
          <Route path="censos" element={<Censo />} />
          <Route path="graficas" element={<Graficas />} />
          <Route path="maps" element={<MapaCensosDep />} />
        </Route>
        <Route path="*" element={<Navigate replace to={"/"}></Navigate>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
