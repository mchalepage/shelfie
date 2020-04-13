import React, {Component} from 'react'
import axios from 'axios'
import Product from '../product/Product'

class Dashboard extends Component {
    render(){
        let products = this.props.inventory.map((e, i) => {
            return <Product
                    key={i}
                    product={e} 
                    />
        })

        return( 
        <div className='dashboard'>
            Dashboard
            {products}
        </div>
        )
    }
}

export default Dashboard