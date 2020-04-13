import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            imgurl: '',
            name: '',
            price: 0,
            editingId: null
        }   
    }

    componentDidUpdate(prevProps){
        if(this.props.selectedProduct && prevProps.selectedProduct !== this.props.selectedProduct && !this.state.editingId){
            const {id, imgurl, name, price} = this.props.selectedProduct
            this.setState({
                imgurl: imgurl,
                name: name,
                price: price,
                editingId: id
            })
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


    handleAddProduct = (imgurl, name, price) => {
        axios.post(`/api/product`, {imgurl, name, price}).then(res => {
            console.log(res.data)
            this.props.handleGetInventory()
        }).catch(err => console.log(err))
        this.handleResetInputValues()
    }

    handleUpdateProduct = () => {
        const {editingId, imgurl, name, price} = this.state
        axios.put(`/api/inventory/${editingId}`, {imgurl, name, price}).then(res => {
            console.log(res)
            this.props.handleGetInventory()
        }).catch(err => console.log(err))
        this.handleResetInputValues()
    }

    render(){
        const {imgurl, name, price, editingId} = this.state
        return( 
            <div className='form'>
                <img src={this.state.imgurl}
                className="form-image" />

                <div className='form-inputs'>
                    {editingId ?
                    <div>
                        <input
                        value={imgurl}
                        placeholder="Paste Image URL here."
                        onChange={e => this.handleImageURL(e.target.value)}/>
                        editing
                    </div>
                    :
                    <div>
                        <input 
                            className="image-url-input" 
                            value={this.state.imgurl}
                            placeholder='Image URL'
                            onChange={(e) => this.handleImageURL(e)}/>
                        not editing
                    </div>
                    }
                    <input 
                        className="product-name-input" 
                        value={this.state.name}
                        placeholder='Product Name'
                        onChange={(e) => this.handleName(e)}
                    />
                    <input 
                        className="price-input"
                        value={this.state.price}
                        placeholder='Product Price'
                        onChange={(e) => this.handlePrice(e)}
                        />
                </div>
                <div className="form-buttons">
                    <button 
                        className="cancel-button"
                        onClick={() => this.handleResetInputValues()}    
                    >Cancel</button>

                    {editingId ? 
                    <button
                    onClick={() => this.handleUpdateProduct()}>Update</button>
                    :
                    <button 
                    onClick={() => this.handleAddProduct(imgurl, name, price)}
                    >Add to Inventory</button>
                    
                    }
                </div>
                </div>
        )
    }
}

export default Form