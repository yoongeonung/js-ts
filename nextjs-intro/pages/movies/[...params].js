import {useRouter} from "next/router";


export default function Detail({params}) {
    const router = useRouter();
    const [title, id] = params;
    console.log(params);
    return <h1>{title}</h1>
}

export function getServerSideProps({params: {params}}) {
    console.log('detail props : ', params);
    return {
        props: {
            params,
        }
    }
}