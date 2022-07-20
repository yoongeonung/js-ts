import {Header} from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return (
        <div>
            <div style={{display:"flex"}}>
                <img src={"/images/koma.jpeg"} alt={"koma"} style={{borderRadius:"40px" ,width:"75px", height:"75px"}}/>
                <Header as={"h1"}>Koma</Header>
            </div>
            <Gnb />
        </div>)
};