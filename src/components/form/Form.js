import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            imgurl: '',
            name: '',
            price: 0
        }   
    }

    handleImageURL = (e) => {
        this.setState({
            imgurl: e.target.value
        })
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handlePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }


    handleResetInputValues = () => {
        this.setState({
            imgurl: '',
            name: '',
            price: 0
        })
    }

    render(){
        return( 
            <div className='form'>
                <input 
                    className="image-url-input" 
                    value={this.state.imgurl}
                    onChange={(e) => this.handleImageURL(e)}
                />
                <input 
                    className="product-name-input" 
                    value={this.state.name}
                    onChange={(e) => this.handleName(e)}
                />
                <input 
                    className="price-input"
                    value={this.state.price}
                    onChange={(e) => this.handlePrice(e)}
                />
                <button 
                    className="cancel-button"
                    onClick={() => this.handleResetInputValues()}    
                >Cancel</button>
                <button className="add-to-inventory-button">Add to Inventory</button>
            </div>
        )
    }
}

export default Form