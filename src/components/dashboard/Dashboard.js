import React, {Component} from 'react'
import axios from 'axios'
import Product from '../product/Product'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return( 
            <div className='dashboard'>
                Dashboard
                <Product />
            </div>
        )
    }
}

export default Dashboard