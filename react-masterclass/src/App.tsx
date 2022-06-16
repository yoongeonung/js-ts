import {useState} from "react";
import styled from "styled-components";


const Container = styled.body`
  background-color: ${props => props.theme.bgColor};
  width: 100vw;
  height: 100vh;
  h1 {
    color: ${props => props.theme.textColor};
  }
`;

function App() {
    return (
        <Container>
            <h1>kakao</h1>
        </Container>
    )
}

export default App;
