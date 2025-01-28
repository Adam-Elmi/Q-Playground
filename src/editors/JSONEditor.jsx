import { useState, useContext, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark"; 
import { jsonData } from "../data";
import { ValueContext } from "../ValueContext";

const JSONEditor = () => {
  const [jsonValue, setJsonValue] = useState(() => {
    const savedData = localStorage.getItem("jsonData");
    return savedData ? savedData : jsonData;
  });

  const {setValue1} = useContext(ValueContext);
  useEffect(() => {
    setValue1(jsonValue);
    localStorage.setItem("jsonData", jsonValue);
  }, [jsonValue]);


  return (
    <>
    <CodeMirror
      value={jsonValue}
      extensions={[json()]}
      onChange={(jsonValue) => setJsonValue(jsonValue)}
      theme={oneDark}
    />
    </>
  );
};

export default JSONEditor;
