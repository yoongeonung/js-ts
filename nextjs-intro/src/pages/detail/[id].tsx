import axios from "axios";
import {ItemProp} from "../../components/ItemList";
import Item from "../../components/Item";
import {useRouter} from "next/router";
import {Dimmer, Loader} from "semantic-ui-react";

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
    const router = useRouter();
    if (router.isFallback) {
        return (
            <Dimmer active>
                <Loader inline={"centered"} size='big'>Loading</Loader>
            </Dimmer>
        );
    }
    return (
        <>
            {item && (
                <><Item item={item}/>
                    {name}환경변수입니다.
                </>)}
        </>
    );
}

export async function getStaticPaths() {
    const API_URL = process.env.API_URL as string;
    const {data} = await axios.get(API_URL);
    return {
        paths: data.slice(0, 15).map((item: any) => {
            return {
                params: {
                    id: String(item.id),
                }
            }
        }),
        fallback: true,
    }
}

export async function getStaticProps({params: {id}}: DetailServerSideProps) {
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
