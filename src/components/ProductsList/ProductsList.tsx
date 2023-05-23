import React from 'react';
import { Wrapper } from './style';

const ProductsList = () => {
    const mock = [
        {
            title: "title1",
            price: 20,
            rating: 4.5,
        },
        {
            title: "title2",
            price: 120,
            rating: 4.0,
        },
        {
            title: "title3",
            price: 320,
            rating: 5.0,
        },
        {
            title: "title4",
            price: 220,
            rating: 4.5,
        },
        {
            title: "title5",
            price: 250,
            rating: 4.5,
        },
        {
            title: "title6",
            price: 230,
            rating: 3.2,
        },
        {
            title: "title7",
            price: 210,
            rating: 4.5,
        },
    ];
    return (
        <Wrapper></Wrapper>
    )
}

export default ProductsList;