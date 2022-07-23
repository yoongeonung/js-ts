import axios from "axios";
import {ItemProp} from "../../src/components/ItemList";
import Item from "../../src/components/Item";

interface DetailProps {
    item: ItemProp
}

interface DetailServerSideProps {
    params: {
        id: string;
    }
}

export default function Detail({item}: DetailProps) {
    return (
        item && <Item item={item}/>
    );
}

export async function getServerSideProps({params: {id}}: DetailServerSideProps) {
    const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const item = await axios.get(API_URL).then(({data}) => data);
    return {
        props: {
            item,
        }
    };
}
