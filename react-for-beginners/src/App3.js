import {useEffect, useState} from "react";
import {getNewses} from "./Api";


const App = () => {
    const [newses, setNewses] = useState([]);
    const convertDate = (strings) => {
        let replacedString = strings.replace('T', " ").replace('Z', "").split(" ");
        let date = replacedString[0].split('-');
        let time = replacedString[1].split(':');

        return `${date[0]}年 ${date[1]}月 ${date[2]}日 ${time[0]}時 ${time[1]}分`;
    };
    useEffect(() => {
        const success = async () => {
            const data = await getNewses();
            const {data: {articles}} = data;
            console.log(data);
            console.log(articles);
            setNewses(articles);
        };
        success();
    },[])
    return (
        <div>
            <ul>
                {newses && newses.map((value, index) => {
                    return (
                        <div key={index}>
                            <h3>{value.title}</h3>
                            <p><a href={value.url}>Youtube動画</a></p>
                            <p>{convertDate(value.publishedAt)}</p>
                            <img src={value.urlToImage} width="300px" height="300px" alt={value.title}/>
                            <p>{value.description}</p>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default App;