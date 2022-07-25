import type {NextPage} from 'next'
import Head from "next/head";
import {useEffect, useState} from "react";
import axios from "axios";
import {Divider, Header, Loader} from "semantic-ui-react";
import ItemList, {ItemProp} from '../src/components/ItemList';

interface Props {
    list:ItemProp[]
}

// const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_URL = process.env.API_URL as string;

const Home: NextPage<Props> = ({list}) => {
    // const [list, setList] = useState<ItemProp[]>([]);
    // const [loading, setLoading] = useState(true);
    // async function getData() {
    //     const {data} = await axios.get(API_URL!);
    //     setList(data);
    //     setLoading(false);
    // }
    // useEffect(() => {
    //     getData();
    // }, [])
    return (
        <div>
            <Head>
                <title>Home | Nextjs-intro</title>
                <meta property="og:title"
                      content="Nextjs-intro home"
                      key="title"/>
            </Head>
            <Header as={"h3"} style={{paddingTop: "30px"}}>Best item</Header>
            <Divider/>
            {/*{loading ? <Loader inline={"centered"} active content='Loading'/> : (*/}
            {/*    <ItemList list={list}/>*/}
            {/*)}*/}
            <ItemList list={list}/>
        </div>
    )
}
export default Home;

export const getStaticProps = async () => {
    const {data:list} = await axios.get(API_URL);
    return {
        props:{
            list
        }
    }
}

