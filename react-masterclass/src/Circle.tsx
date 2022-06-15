import React from 'react';
import styled from "styled-components";

// interface ContainerProps extends CircleProps {}

interface ContainerProps {
  bgColor:string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border: 1px solid ${props => props.borderColor};;
  border-radius: 100px;
`;

const Circle = ({bgColor, borderColor}:CircleProps) => {
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />
}

export default Circle;