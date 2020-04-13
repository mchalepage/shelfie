import React, {Component} from 'react'
import axios from 'axios'

class Product extends Component {
    render(){
        let {imgurl, name, price} = this.props.product
        return( 
            <div className='product'>
                <img src={imgurl} alt={name} className='product-image'/>
                {name}
                {price}
            </div>
        )
    }
}

export default Product