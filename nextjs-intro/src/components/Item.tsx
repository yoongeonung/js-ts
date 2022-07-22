import React from 'react';
import {ItemProp} from "./ItemList";

interface ItemDetailProp {
    item: ItemDetail
}

type ItemDetail = Omit<ItemProp, "id">;

const Item = ({item: {name, image_link, price, product_type, category}}: ItemDetailProp) => {
    return (
        <>
            <h1>{name}</h1>
            <img src={image_link} alt={name}/>
            <span>{category}{product_type}</span>
            <span>{price}</span>
        </>
    );
}

export default Item;