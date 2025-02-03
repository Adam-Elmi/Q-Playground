import { useContext, useState, useEffect } from "react";
import React from "react";
import { ValueContext } from "./ValueContext";
import Header from "./sections/Header";
import Contact from "./sections/Contact";
import Summary from "./sections/Summary";
import Experience from "./sections/Experience";
import Eduction from "./sections/Education";
import Skills from "./sections/Skills";
import Languages from "./sections/Languages";
import Projects from "./sections/Projects";
import GroupOne from "./groups/group-1";
import GroupTwo from "./groups/group-2";
import GroupThree from "./groups/group-3";

export default function Template() {
  const { value1 } = useContext(ValueContext);
  const [catchError, setCatchError] = useState("");
  const [isError, setIsError] = useState(false);
  const [renderGroupOne, setRenderGroupOne] = useState(null);
  const [renderGroupTwo, setRenderGroupTwo] = useState(null);
  const [renderGroupThree, setRenderGroupThree] = useState(null);
  const [sections, setSections] = useState({});
  const [memberOne, setMemberOne] = useState([]);
  const [memberTwo, setMemberTwo] = useState([]);
  const [memberThree, setMemberThree] = useState([]);
  const [defaultValues, setDefaultValues] = useState({});
  const [group, setGroup] = useState({});

  useEffect(() => {
    try {
      const parsedValue = JSON.parse(value1);
      const properties = parsedValue?.config?.defaultValues || {};
      const groups = parsedValue?.groups;
      setDefaultValues({
        summary: properties.summary,
        skills: properties.skills,
        header: properties.header,
        contact: properties.contact,
        experience: properties.experience,
        education: properties.education,
        languages: properties.languages,
        projects: properties.projects,
      });
      setGroup(groups);
    } catch (error) {
      console.error("Error parsing default values:", error.message);
      setDefaultValues({});
    }
  }, [value1]);

  useEffect(() => {
    try {
      const parsedValue = JSON.parse(value1);
      if (parsedValue) {
        setIsError(false);
        for (const [key, value] of Object.entries(parsedValue)) {
          // Section property
          if (key === "sections") {
            if (value) {
              value.forEach((prop) => {
                // Header property
                if (prop.id === "header") {
                  setSections((prev) => ({
                    ...prev,
                    header: (
                      <Header
                        header={prop}
                        defaultValue={defaultValues.header}
                      />
                    ),
                  }));
                }
                // Contact Property
                if (prop.id === "contact") {
                  setSections((prev) => ({
                    ...prev,
                    contact: (
                      <Contact
                        contact={prop}
                        defaultValue={defaultValues.contact}
                      />
                    ),
                  }));
                }
                // Summary Property
                if (prop.id === "summary") {
                  setSections((prev) => ({
                    ...prev,
                    summary: <Summary summary={prop} defaultValue={defaultValues.summary} />,
                  }));
                }
                // Experience property
                if (prop.id === "experience") {
                  setSections((prev) => ({
                    ...prev,
                    experience: (
                      <Experience
                        experience={prop}
                        defaultValue={defaultValues.experience}
                      />
                    ),
                  }));
                }
                // Education property
                if (prop.id === "education") {
                  setSections((prev) => ({
                    ...prev,
                    education: (
                      <Eduction
                        education={prop}
                        defaultValue={defaultValues.education}
                      />
                    ),
                  }));
                }
                // Skills property
                if (prop.id === "skills") {
                  setSections((prev) => ({
                    ...prev,
                    skills: (
                      <Skills
                        skills={prop}
                        defaultValue={defaultValues.skills}
                      />
                    ),
                  }));
                }
                // Languages property
                if (prop.id === "languages") {
                  setSections((prev) => ({
                    ...prev,
                    languages: (
                      <Languages
                        languages={prop}
                        defaultValue={defaultValues.languages}
                      />
                    ),
                  }));
                }
                // Projects property
                if (prop.id === "projects") {
                  setSections((prev) => ({
                    ...prev,
                    projects: (
                      <Projects
                        projects={prop}
                        defaultValue={defaultValues.projects}
                      />
                    ),
                  }));
                }
              });
            }
          }
          if (key) {
          }
        }
      }
    } catch (error) {
      setIsError(true);
      setCatchError(error.message);
    }
  }, [value1, defaultValues, group]);

  useEffect(() => {
    try {
      const parsedValue = JSON.parse(value1);
      if (parsedValue) {
        for (const [key, value] of Object.entries(parsedValue)) {
          if (key === "groups") {
            value.forEach((group) => {
              if (group.groupId === "group-1") {
                if (sections) {
                  const newElements = Object.entries(sections);

                  const uniqueElements = new Set();
                  for (const [k, v] of newElements) {
                    if (group.sections.includes(k)) {
                      uniqueElements.add({ key: k, element: v });
                    }
                  }
                  setMemberOne(
                    Array.from(uniqueElements).map(({ key, element }) =>
                      React.cloneElement(element, { key })
                    )
                  );
                }
              }
              if (group.groupId === "group-2") {
                if (sections) {
                  const newElements = Object.entries(sections);

                  const uniqueElements = new Set();
                  for (const [k, v] of newElements) {
                    if (group.sections.includes(k)) {
                      uniqueElements.add({ key: k, element: v });
                    }
                  }
                  setMemberTwo(
                    Array.from(uniqueElements).map(({ key, element }) =>
                      React.cloneElement(element, { key })
                    )
                  );
                }
              }
              if (group.groupId === "group-3") {
                if (sections) {
                  const newElements = Object.entries(sections);

                  const uniqueElements = new Set();
                  for (const [k, v] of newElements) {
                    if (group.sections.includes(k)) {
                      uniqueElements.add({ key: k, element: v });
                    }
                  }
                  setMemberThree(
                    Array.from(uniqueElements).map(({ key, element }) =>
                      React.cloneElement(element, { key })
                    )
                  );
                }
              }
            });
          }
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  }, [sections, group]);

  useEffect(() => {
    try {
      if (GroupOne && GroupTwo && GroupThree) {
        setRenderGroupOne(<GroupOne members={memberOne} />);
        setRenderGroupTwo(<GroupTwo members={memberTwo} />);
        setRenderGroupThree(<GroupThree members={memberThree} />);
      }
    } catch (error) {
      console.error(error.message);
    }
  }, [memberOne, memberTwo, memberThree]);

  return (
    <div className="md:max-w-[50%] flex-1 min-h-screen bg-white">
      {isError ? (
        <p className="w-full text-center text-red-400 font-medium font-mono p-2 pt-4">
          {catchError}
        </p>
      ) : (
        <div id="group-container">
          {renderGroupOne}
          <div id="group-wrapper">
            {renderGroupTwo}
            {renderGroupThree}
          </div>
        </div>
      )}
    </div>
  );
}
