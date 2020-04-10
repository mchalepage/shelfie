import React from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import Form from './components/form/Form'

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard>
      </Dashboard>
      <Form />
    </div>
  );
}

export default App;
