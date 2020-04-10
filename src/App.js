import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import Form from './components/form/Form'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Dashboard>
        </Dashboard>
        <Form />
      </div>
    );
  }
}

export default App;
