import styled from "styled-components";

function App() {
    const Father = styled.div`
      display: flex;
    `;
    const Box = styled.div`
      background-color: ${props => props.bgColor};
      width: 100px;
      height: 100px;
    `;
    const Circle = styled(Box)`
      border-radius: 50px;
    `;

    return (
        <Father>
            <Box bgColor={"green"}/>
            <Box bgColor={"blueviolet"}/>
            <Circle bgColor={"whitesmoke"} />
        </Father>
    )
}

export default App;
