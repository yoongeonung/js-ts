import React from "react";

interface ProductsProps {
    key:string,
    name:string,
    imagePath: string;
}

const Products = ({key, name, imagePath}:ProductsProps) => {
    return (<div>
        <img src={`http://localhost:5000/${imagePath}`} alt={`${name} product`} />
        <form>
            <label htmlFor={"quantity"}>{name}</label>
            <input type={"number"} min={0} defaultValue={0} id={"quantity"}/>
        </form>
    </div>);
}
export default Products;