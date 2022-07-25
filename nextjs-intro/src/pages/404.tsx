import {Icon} from "semantic-ui-react";

export default function ErrorPage() {
    return <>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", textAlign: "center"}}>
            <Icon name={"warning circle"} color={"red"}/>
            <span>404 : 페이지를 찾을 수 없습니다.</span>
        </div>
    </>
}