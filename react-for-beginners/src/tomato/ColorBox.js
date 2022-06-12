import React from 'react';
import ColorContext from "../context/color";

const ColorBox = () => {

  return (
      <ColorContext>
          <div style={{width: "64px", height: "64px", backgroundColor: value.color}}>
          </div>
      </ColorContext>
  );
}

export default ColorBox;