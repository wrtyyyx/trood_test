import {Formik, Form, Field, ErrorMessage} from 'formik';

import {useParams, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import './ProjectCheck.scss'
import {storageKey, storageDoneKey} from "../../../constants.js";
import ProjectButton from "../ProjectButton/ProjectButton.jsx";
import * as Yup from "yup";

const ProjectCheck = ({projects, setProjects, setDoneProject, doneProject}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const project = projects.find(project => project.id === id);
    if (!project) {
        return <h2 className="title">Project not found</h2>;
    }


    const initialValues = {
        name: project.name,
        field: project.field,
        experience: project.experience,
        deadline: project.deadline,
        description: project.description,
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Set name!'),
        field: Yup.string().required('Set field!'),
        experience: Yup.string().required('Set experience!'),
        deadline: Yup.date().required('Set deadline!'),
        description: Yup.string().required('Set description!'),
    });

    const handleDelete = () => {
        const updatedProjects = projects.filter(p => p.id !== id);
        setProjects(updatedProjects);
        localStorage.setItem(storageKey, JSON.stringify(updatedProjects));

        const updatedDoneProjects = [...doneProject, {...project, done: true}];
        setDoneProject(updatedDoneProjects);
        localStorage.setItem(storageDoneKey, JSON.stringify(updatedDoneProjects));
        console.log('Delete project success', updatedDoneProjects)
        navigate('/projects');
    };


    const handleSubmit = (values) => {
        const updatedProjects = projects.map(p => p.id === project.id ? {...p, ...values} : p);
        setProjects(updatedProjects);
        localStorage.setItem(storageKey, JSON.stringify(updatedProjects));
        navigate('/projects');
    };

    return (
        <div className='container'>
            <div className="project_line">
                <h2 className="title">{project.name}</h2>
                <ProjectButton className={'project_create delete_btn'} title={'Delete project'} handler={handleDelete}/>
            </div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                {() => (<Form className="project_edit">
                        <div className="form_input">
                            <label htmlFor="field">Field</label>
                            <Field as='select'
                                   className='form_field form_field_edit'
                                   name="field"
                            >
                                <option value="">Select Field</option>
                                <option value="Design">Design</option>
                                <option value="Development">Development</option>
                                <option value="Marketing">Marketing</option>
                            </Field>
                            <ErrorMessage name='field' component='div' className='erorr'/>
                        </div>
                        <div className="form_input">
                            <label htmlFor="experience">Experience</label>
                            <Field
                                type='text'
                                name="experience"
                            />
                            <ErrorMessage name='experience' component='div' className='erorr'/>
                        </div>
                        <div className="form_input deadline">
                            <label htmlFor="deadline">Deadline</label>
                            <Field
                                className='form_deadline'
                                type="date"
                                name="deadline"
                            />
                            <ErrorMessage name='deadline' component='div' className='error'/>
                        </div>
                        <div className="form_input desc_edit">
                            <label htmlFor="description">Description</label>
                            <Field
                                as='textarea'
                                name="description"
                            />
                            <ErrorMessage name='description' component='div' className='error'/>

                        </div>
                        <ProjectButton type='submit' className={'edit-project-btn'} title={'Save changes'}/>
                    </Form>
                )}
            </Formik>
            <div>


            </div>
        </div>
    );
};

ProjectCheck.propTypes = {
    projects: PropTypes.array.isRequired,
    doneProject: PropTypes.array.isRequired,
    setProjects: PropTypes.func.isRequired,
    setDoneProject: PropTypes.func.isRequired,

}
export default ProjectCheck;
