import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
