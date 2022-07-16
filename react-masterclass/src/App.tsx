import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Box = styled(motion.div)`
  background-color: blueviolet;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BoxVar = {
    start: {
        scale: 0,
    },
    end: {
        scale: 1,
        rotateZ: 360,
        transition: {
            type: 'spring',
            delay: 0.5,
        }
    }
};

function App() {
    return (
        <Wrapper>
            <Box variants={BoxVar} initial={'start'} animate={'end'} />
        </Wrapper>
    )
}

export default App;
