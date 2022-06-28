import {createGlobalStyle} from "styled-components";
import TodoLIst from "./components/TodoLIst";

const GlobalStyle = createGlobalStyle`
`;

function App() {
    return (
        <>
            <GlobalStyle/>
            <TodoLIst />
        </>
    )

}

export default App;
