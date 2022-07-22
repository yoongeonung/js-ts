import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import {ItemProp} from "../../src/components/ItemList";
import Item from "../../src/components/Item";


export default function Detail() {
    const [item, setItem] = useState<ItemProp>({
        category: "",
        id: 0,
        image_link: "",
        name: "",
        price: "",
        product_type: ""
    });
    const router = useRouter();
    const {id} = router.query;

    const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

     async function getData() {
         const data:ItemProp = await axios.get(API_URL).then(({data}) => data);
         if (!data) return;
         setItem(data);
    }

    useEffect(() => {
        if (!id) return;
        getData();
    },[]);
    return (
        <Item item={item}/>
    );
}