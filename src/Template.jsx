import { useContext, useState, useEffect, useCallback } from "react";
import { ValueContext } from "./ValueContext";

export default function Template() {
  const { value1 } = useContext(ValueContext);
  const [catchError, setCatchError] = useState("");
  const [isError, setIsError] = useState(false);
  const [func, setFunc] = useState(null);

  useEffect(() => {
    try {
      if (value1) {
        setIsError(false);
      }
    } catch (error) {
      setIsError(true);
      setCatchError(error.message);
    }
  }, [value1]);

  const keys = useCallback(() => {
    try {
      setIsError(false);
      sections(JSON.parse(value1));
    } catch (error) {
      setIsError(true);
      setCatchError(error.message);
      console.error(error.message);
    }
  }, [value1]);

  useEffect(() => {
    if (value1) {
      setFunc(() => keys);
    }
  }, [value1, keys]);

  useEffect(() => {
    if (func) {
      func();
    }
  }, [func]);

  function sections(obj) {
    const arrObj = Object.entries(obj);
    for (const [key, value] of arrObj) {
      if (key === "sections") {
        if (Array.isArray(value)) {
          value.forEach(section => {
            switch (section.id) {
              case "header":
                console.log(section);
                break;
            }
          });
        }
        break;
      }
    }
  }

  return (
    <div className="md:max-w-[50%] flex-1 min-h-screen bg-white">
      {isError ? (
        <p className="w-full text-center text-red-400 font-medium font-mono p-2 pt-4">
          {catchError}
        </p>
      ) : null}
    </div>
  );
}
