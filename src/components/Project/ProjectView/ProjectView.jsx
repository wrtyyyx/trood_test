import {useEffect} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import './ProjectView.scss'
import ProjectViewCard from "./ProjectViewCard.jsx";
import userLogo from '../../../assets/images/mdi_account.svg'
import notify from '../../../assets/images/mingcute_notification-fill.svg'
import user from '../../../assets/images/mdi_account.svg'
import {storageKey, storageDoneKey} from "../../../constants.js";
const ProjectView = ({projects, setProjects, doneProject ,setDoneProject}) => {

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem(storageKey)) || [];
        const storedDoneProjects = JSON.parse(localStorage.getItem(storageDoneKey)) || [];
        setProjects(storedProjects);
        setDoneProject(storedDoneProjects)
    }, []);

    const generateId = () =>  crypto.randomUUID();


    return (
        <div className="container projectView">
            <div className="project_line">
                <h2 className="title">Active projects</h2>
                <Link className="project_create" to="/projectForm">
                    Create project
                </Link>
            </div>

            {projects.length === 0 ? (
                <div>No projects yet, create some project</div>
            ) : (
                <div className='projectView_box'>
                    {projects.map((project,index) => (
                        <ProjectViewCard key = {generateId()} project={project} index={index}/>
                    ))}
                </div>
            )}
            {doneProject.length !== 0 ? (
                <div className='projectDone_box'>
                    <h2 className='title'>Passed projects</h2>
                    <div className='projectView_box projectDone'>
                        {doneProject.map((done) => (
                            <div key={generateId()} className='projectDone_card'>
                                <div className='projectDone_card_title'>
                                    {done.name}
                                </div>
                                <div className='projectDone_card_user'>
                                    <div className='projectDone_card_user_info'>
                                        <img src={userLogo} alt=""/>
                                        <div className='projectDone_card_user_info_name'>Anna Lenram</div>
                                    </div>
                                    <div className='projectDone_card_user_icons'>
                                        <img src={notify} alt="" width={24} height={24}/>
                                        <img src={user} alt=""width={24} height={24}/>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            ) : ''}
        </div>
    );
};

ProjectView.propTypes = {
    projects: PropTypes.array.isRequired,
    setProjects: PropTypes.func.isRequired,
    doneProject: PropTypes.array.isRequired,
    setDoneProject: PropTypes.func.isRequired,
}

export default ProjectView;
