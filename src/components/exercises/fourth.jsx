import React from 'react'

import Products from '../data/products'

export default () => {

    function getProducts() {
        return Products.map(prod => {
            return <li key = {prod.id}>
                {prod.id} - {prod.name} = $ {prod.price}
            </li>
        })
    }

    return (
        <div>
            <h1>Fourth Component</h1>
            <h2>Repetition Component - Example React</h2>
            <ul>
                <li>{getProducts()}</li>
            </ul>
        </div>
    )
}