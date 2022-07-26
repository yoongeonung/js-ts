import {motion} from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  width: 200px;
  height: 200px;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


const boxVariants = {
    hover: {
        scale: 1.5, rotateZ: 90
    },
    tap: {borderRadius: "50%"},
    drag: {backgroundColor: "#0984e3", transition: {duration: 1}}
};

function App() {
    return (
        <Wrapper>
            <Box drag variants={boxVariants}
                 whileHover={"hover"} whileTap={"tap"}
                 whileDrag={"drag"}/>
        </Wrapper>
    )
}
export default App;
