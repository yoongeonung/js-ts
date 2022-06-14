import React from 'react';
import styled from "styled-components";

interface ContainerProps extends CircleProps {}

interface CircleProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
`;

const Circle = ({bgColor}:CircleProps) => {
  return <Container bgColor={bgColor} />
}

export default Circle;