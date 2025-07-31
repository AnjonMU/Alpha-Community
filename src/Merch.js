import React from 'react';
import './Merch.css';
import merch1 from './media/merch/merch1.jpeg';
import merch2 from './media/merch/merch2.jpeg';
import merch3 from './media/merch/merch3.jpeg';

const merchItems = [{
        id: 1,
        name: 'Alpha T-Shirt',
        price: '৳499',
        image: merch1,
        description: 'Premium cotton, drop shoulder design.',
    },
    {
        id: 2,
        name: 'Alpha Hoodie',
        price: '৳999',
        image: merch2,
        description: 'Warm, stylish and comfy hoodie.',
    },
    {
        id: 3,
        name: 'Alpha Cap',
        price: '৳299',
        image: merch3,
        description: 'Breathable material, adjustable size.',
    },
];

const Merch = () => {
    return ( <
        div className = "merch-page" >
        <
        h1 className = "page-title" > 🛍️Our Merch Collection < /h1> <
        div className = "merch-grid" > {
            merchItems.map((item) => ( <
                div key = { item.id }
                className = "merch-card" >
                <
                img src = { item.image }
                alt = { item.name }
                className = "merch-img" / >
                <
                h2 > { item.name } < /h2> <
                p className = "description" > { item.description } < /p> <
                p className = "price" > { item.price } < /p> <
                button className = "buy-btn" > 🛒Order Now < /button> < /
                div >
            ))
        } <
        /div> < /
        div >
    );
};

export default Merch;