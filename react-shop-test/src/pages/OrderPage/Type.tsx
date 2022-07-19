import React, {useEffect, useState} from 'react';
import Products from "./Products";
import Options from "./Options";
import axios from "axios";
import ErrorBanner from "./ErrorBanner";

interface TypeProps {
    orderType: "products" | "options";
}

interface Item {
    key: string,
    name: string,
    imagePath: string;
}

const Type = (props: TypeProps) => {
    const [error, setError] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:5000/${props.orderType}`);
                setItems(response.data);
            } catch (e) {
                setError(true);
            }
        })();

    }, [props.orderType]);
    if (error) return <ErrorBanner message={"에러가 발생했습니다."}/>;
    return (
        <div>
            {items.map((item: Item) => {
                return (
                    props.orderType === "products" ? (
                        <Products
                            key={item.key}
                            name={item.name}
                            imagePath={item.imagePath}
                        />
                    ) : <Options/>
                );
            })}
        </div>);
}

export default Type;