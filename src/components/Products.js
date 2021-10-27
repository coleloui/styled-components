import React from 'react'
import {ComplexTitle} from './ComplexTitle';
import { Product } from './Product';

const products = [
    {
        id: 1,
        name: 'chair',
        price: 30
    },
    {
        id: 2,
        name: 'bed',
        price: 150
    },
    {
        id: 3,
        name: 'couch',
        price: 550
    }
]

export const Products = () => {
    return (
        <div>
            <ComplexTitle title='all products' />
            {products.map((product) => {
                return <Product {...product} key={product.id} />
})}
        </div>
    )
}
