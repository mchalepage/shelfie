import React, {Component} from 'react'

class Product extends Component {
    render(){
        let {imgurl, name, price, id} = this.props.product
        return( 
            <div className='product'>
                <img src={imgurl} alt={name} className='product-image'/>
                {name} &nbsp;
                {price}
                <button onClick={() => this.props.handleDeleteProduct(id)}>Delete</button>
                <button onClick={() => this.props.handleSelectProduct(id)}>Edit</button>
            </div>
        )
    }
}

export default Product