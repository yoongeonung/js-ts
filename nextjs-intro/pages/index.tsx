import type {NextPage} from 'next'
import Head from "next/head";
import {useEffect, useReducer, useState} from "react";
import axios from "axios";
import {Divider, Header} from "semantic-ui-react";
import ItemList, {ItemProp} from '../src/components/ItemList';

const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

const Home: NextPage = () => {
    const [list, setList] = useState<ItemProp[]>([]);

    async function getData() {
        const {data} = await axios.get(API_URL);
        setList(data);
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <Head>
                <title>Home | Nextjs-intro</title>
                <meta property="og:title"
                      content="My page title"
                      key="title"/>
            </Head>
            <Header as={"h3"} style={{paddingTop: "30px"}}>Best item</Header>
            <Divider/>
            <ItemList list={list} />
        </div>
    )
}

export default Home
