import React, { useState, useEffect, useRef } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import AgregarCenso from './components/AgregarCenso';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ContentBody from './components/ContentBody';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ContentBody />}>
          <Route index element={<Home />} />
          <Route path="nuevo-censo" element={<AgregarCenso />} />
        </Route>
        <Route path="*" element={<Navigate replace to={"/"}></Navigate>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
