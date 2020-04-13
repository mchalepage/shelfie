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
      inventory: [],
      selectedProduct: null
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

  handleSelectProduct = id => {
    this.state.inventory.map(e => {
      if(e.id === id){
        this.setState({
          selectedProduct: e
        })
      }
    })
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Dashboard
        inventory={this.state.inventory}
        handleGetInventory={this.handleGetInventory}
        handleSelectProduct={this.handleSelectProduct} />
        <Form
        handleGetInventory={this.handleGetInventory}
        selectedProduct={this.state.selectedProduct} />
      </div>
    );
  }
}

export default App;
