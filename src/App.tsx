import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes'

function App() {
  return (
    <BrowserRouter>
    <Routes />
  </BrowserRouter>
  );
}

export default App;
