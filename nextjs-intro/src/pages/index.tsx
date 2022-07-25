import type {NextPage} from 'next'
import Head from "next/head";
import axios from "axios";
import {Divider, Header} from "semantic-ui-react";
import ItemList, {ItemProp} from '../components/ItemList';

interface Props {
    list: ItemProp[]
}

const API_URL = process.env.API_URL as string;

const Home: NextPage<Props> = ({list}) => {
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
            <ItemList list={list}/>
        </div>
    )
}
export default Home;

export const getStaticProps = async () => {
    const {data: list} = await axios.get(API_URL);
    return {
        props: {
            list
        }
    }
}

