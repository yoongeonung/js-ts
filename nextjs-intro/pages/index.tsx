import type {NextPage} from 'next'
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Home | Nextjs-intro</title>
                <meta property="og:title"
                      content="My page title"
                      key="title"/>
            </Head>
        </div>
    )
}

export default Home
