import { useEffect, useState } from "react";

const TextLoop = ({ children }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1);
    }, 1125);
    return () => clearInterval(interval);
  }, [index]);
  return <div>{children[index % children.length]}</div>;
};

export default TextLoop;
