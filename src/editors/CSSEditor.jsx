import { useEffect, useState, useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";
import { oneDark } from "@codemirror/theme-one-dark"; 
import { cssData } from "../data";
import { ValueContext } from "../ValueContext";

const CSSEditor = () => {
  const { setValue2 } = useContext(ValueContext);
  const [cssValue, setCssValue] = useState(() => {
    const savedData = localStorage.getItem("cssData");
    return savedData ? savedData : cssData;
  });

  useEffect(() => {
    setValue2(cssValue);
    localStorage.setItem("cssData", cssValue);
  }, [cssValue]);
  

  return (
    <CodeMirror
      value={cssValue}
      extensions={[css()]}
      onChange={(value) => setCssValue(value)}
      theme={oneDark}
    />
  );
};

export default CSSEditor;