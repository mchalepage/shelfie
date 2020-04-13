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

  componentDidMount(){
    this.handleGetInventory()
  }

  handleGetInventory = () => {
    axios.get(`/api/inventory`).then(res => {
      this.setState({
        inventory: res.data,
      })
    })
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Dashboard
        inventory={this.state.inventory}
        handleGetInventory={this.handleGetInventory} />
        <Form
        handleGetInventory={this.handleGetInventory} />
      </div>
    );
  }
}

export default App;
