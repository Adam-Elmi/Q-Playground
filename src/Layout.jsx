import { useEffect, useState, useRef, useContext } from "react";
import JSONEditor from "./editors/JSONEditor";
import CSSEditor from "./editors/CSSEditor";
import Template from "./Template";
import { ValueContext } from "./ValueContext";

export default function Layout() {
  // Reference to Option btn
  const optionsRef = useRef(null);
  // Shared value
  const { value2 } = useContext(ValueContext);

  useEffect(() => {
    // To update css style
    const styleElement = document.createElement("style");
    styleElement.appendChild(document.createTextNode(value2));
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [value2]);
  // state for active editor
  const [isActive, setIsActive] = useState(true);
  // state for option btn
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    // json btn and css btn
    const btns = [
      document.querySelector("#btn-1"),
      document.querySelector("#btn-2"),
    ];
    // helper function to add active class
    function addClass(e) {
      btns.forEach((btn) => {
        btn.classList.remove("active-editor");
      });

      e.target.classList.add("active-editor");
      const changes = {
        index: btns.indexOf(e.target),
        editor: btns.indexOf(e.target) === 0 ? "json" : "css",
      };
      localStorage.setItem("active-editor", JSON.stringify(changes));
    }

    btns.forEach((btn) => {
      btn.addEventListener("click", addClass);
    });

    return () => {
      btns.forEach((btn) => {
        btn.removeEventListener("click", addClass);
      });
    };
  }, [isActive]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("active-editor"));
    const btns = [
      document.querySelector("#btn-1"),
      document.querySelector("#btn-2"),
    ];
    if (savedData) {
      btns[savedData.index].classList.add("active-editor");

      if (savedData.editor === "json") {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    } else {
      btns[0].classList.add("active-editor");
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionsRef]);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="w-full h-[50px] bg-[#1F222A] border-b-[0.5px] border-slate-700 flex gap-5 items-center fixed top-0 z-10">
        {/* Btns container */}
        <div className="flex gap-5">
          {/* Json btn */}
          <button
            id="btn-1"
            onClick={() => setIsActive(true)}
            className="text-white cursor-pointer mx-6 h-full"
          >
            JSON
          </button>
          {/* Css btn */}
          <button
            id="btn-2"
            onClick={() => setIsActive(false)}
            className="text-white cursor-pointer h-full"
          >
            CSS
          </button>
        </div>
        {/* Other btns container */}
        <div className="ml-auto flex gap-5 pr-2">
          {/* Info btn */}
          <button className="text-white cursor-pointer h-full px-2 py-1 bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 rounded text-sm">
            Info
          </button>
          {/* Option btn container */}
          <div className="relative" ref={optionsRef}>
            {/* Option btn */}
            <button
              className="text-white cursor-pointer h-full px-2 py-1 bg-gray-600 hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 rounded text-sm"
              onClick={() => setShowOptions(!showOptions)}
            >
              Options
            </button>
            {showOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                {/* Export btn */}
                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Export
                </button>
                {/* Import btn */}
                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Import
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Sides */}
      <div className="w-full flex flex-col md:flex-row justify-between min-h-screen pt-[50px]">
        {/* Left side container */}
        <div className="flex-1 md:max-w-[50%] min-h-screen">
          {/* Left side */}
          {isActive ? <JSONEditor /> : <CSSEditor />}
        </div>
        {/* Right side */}
        <Template />
      </div>
    </div>
  );
}
