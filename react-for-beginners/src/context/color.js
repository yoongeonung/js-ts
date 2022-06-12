import { createContext, useState } from "react";

const ColorContext = createContext({
  state: {
    color1: "black",
    color2: "violet",
  },
  action: {
    setColor1: () => {},
    setColor2: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color1, setColor1] = useState("black");
  const [color2, setColor2] = useState("violet");
  const value = {
    state: {
      color1,
      color2,
    },
    action: {
      setColor1,
      setColor2,
    },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorConsumer, ColorProvider };
export default ColorContext;
