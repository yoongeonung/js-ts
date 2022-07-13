import Seo from "../components/Seo";
import Link from "next/link";
import {useRouter} from "next/router";


export default function Hello({results}) {
    const router = useRouter();
    const onClick = (id, title) => {
        console.log(id, title);
        router.push(`/movies/${title}/${id}`);
    }
    console.log(results);
    return (
        <div className={'container'}>
            <Seo title={"Home"}/>
            {results?.map(movie => <div onClick={() => onClick(movie.id, movie.original_title)} className={'movie'} key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                    <a>{movie.original_title}</a>
                </Link>
            </div>)}
            <style jsx>{`
              .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
              }

              .movie {
                cursor: pointer;
              }

              .movie img {
                max-width: 100%;
                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
              }

              .movie:hover img {
                transform: scale(1.05) translateY(-10px);
              }

              .movie h4 {
                font-size: 18px;
                text-align: center;
              }
            `}</style>
        </div>
    );
}

export async function getServerSideProps() {
    const {results} = await (await fetch('http://localhost:3000/api/movies')).json();
    return {
        props: {
            results,
        }
    }
}