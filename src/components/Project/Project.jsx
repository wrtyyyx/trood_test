import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./Project.css";
import ProjectForm from "./ProjectForm/ProjectForm.jsx";
import ProjectView from "./ProjectView/ProjectView.jsx";
import ProjectCheck from "./ProjectCheck/ProjectCheck.jsx";
import ProjectMain from "./ProjectMain/ProjectMain.jsx";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [doneProject, setDoneProject] = useState([]);

  const projectState = { projects, setProjects, doneProject, setDoneProject };

  return (
    <div className="project_container">
      <Routes>
        <Route path="/" element={<ProjectMain to="/" />} />
        <Route path="/projects" element={<ProjectView {...projectState} />} />
        <Route
          path="/projectForm"
          element={<ProjectForm {...projectState} />}
        />
        <Route
          path="/projectCheck/:id"
          element={<ProjectCheck {...projectState} />}
        />
      </Routes>
    </div>
  );
};

export default Project;
