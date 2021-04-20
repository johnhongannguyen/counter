import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters.jsx';
import './App.css';

function App() {
  return (
    <div>
    <NavBar />
    <main className="container">
      <Counters />
    </main>

    </div>
  );
}

export default App;
