import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Soveteria from './pages/gramas/index.js';
import Acai from './pages/acai/index.js';
import Signos from './pages/signos/index.js';
import Gasosa from './pages/tanque/index.js'
import Febre from './pages/febre/index.js';
import SalarioLiquido from './pages/salario/index.js'
import Orcamento from './pages/orcamento/index.js';
import ContaraAte from './pages/contar/index.js';
import Linhas from './pages/linha/index.js'
import Cafe from './pages/cafe/index.js';
import Media from './pages/media/index.js'
import Cinema from './pages/cinema/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/cafe' element={<Cafe/>} />
      <Route path='/acai' element={<Acai/>} />
        <Route path='/signos' element={<Signos/>} />
        <Route path='/orcPamento' element={<Orcamento/>} />
        <Route path='/linha' element={<Linhas/>} />
        <Route path='/contador' element={<ContaraAte/>} />
        <Route path='/tanque' element={<Gasosa/>} />
        <Route path='/situacao' element={<Febre/>} />
        <Route path='/salario' element={<SalarioLiquido/>} />
        <Route path='/media' element={<Media />} />
        <Route path='/sorvete' element={<Soveteria />} />
        <Route path='/cinema' element={<Cinema />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);