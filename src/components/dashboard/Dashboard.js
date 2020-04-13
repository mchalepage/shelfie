import React, {Component} from 'react'
import axios from 'axios'
import Product from '../product/Product'

class Dashboard extends Component {
    handleDeleteProduct = id => {
        axios.delete(`api/inventory/${id}`).then(res => {
            this.props.handleGetInventory()
        }).catch(err => console.log(err))
    }

    render(){
        let products = this.props.inventory.map((e, i) => {
            return <Product
                    key={i}
                    product={e}
                    handleDeleteProduct={this.handleDeleteProduct}
                    handleSelectProduct={this.props.handleSelectProduct}
                    />
        })

        return( 
        <div className='dashboard'>
            {products}
        </div>
        )
    }
}

export default Dashboard