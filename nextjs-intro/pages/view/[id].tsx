import axios from "axios";
import {ItemProp} from "../../src/components/ItemList";
import Item from "../../src/components/Item";

interface DetailProps {
    item: ItemProp;
    name: string;
}

interface DetailServerSideProps {
    params: {
        id: string;
    }
}

export default function Detail({item, name}: DetailProps) {
    return (
        <>
            <Item item={item}/>
            {name}환경변수입니다.
        </>
    );
}

export async function getServerSideProps({params: {id}}: DetailServerSideProps) {
    const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const item = await axios.get(API_URL).then(({data}) => data);
    const name = process.env.NAME;
    return {
        props: {
            item,
            name,
        }
    };
}
