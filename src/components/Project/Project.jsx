import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./Project.css";
import ProjectForm from "./ProjectForm/ProjectForm.jsx";
import ProjectView from "./ProjectView/ProjectView.jsx";
import ProjectCheck from "./ProjectCheck/ProjectCheck.jsx";

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [doneProject, setDoneProject] = useState([])

    return (
        <div className="project_container">
            <Routes>
                <Route path="/projects" element={<ProjectView projects={projects} setProjects={setProjects} setDoneProject = {setDoneProject}  doneProject = {doneProject}/>} />
                <Route path="/projectForm" element={<ProjectForm setProjects={setProjects} projects = {projects}  />} />
                <Route path="/projectCheck/:id" element={<ProjectCheck projects={projects} setProjects={setProjects} setDoneProject = {setDoneProject} doneProject = {doneProject} />}/>
            </Routes>
        </div>
    );
};

export default Project;
