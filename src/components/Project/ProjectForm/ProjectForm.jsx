import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { storageKey } from '../../../constants.js';
import './ProjectForm.scss';
import ProjectButton from "../ProjectButton/ProjectButton.jsx";


const ProjectForm = ({ setProjects, projects }) => {
    const navigate = useNavigate();
    const generateId = () =>  crypto.randomUUID();


    const initialValues = {
        name: '',
        field: '',
        experience: '',
        deadline: '',
        description: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Set name!'),
        field: Yup.string().required('Set field!'),
        experience: Yup.string().required('Set experience!'),
        deadline: Yup.date().required('Set deadline!'),
        description: Yup.string().required('Set description!'),
    });

    const handleSubmit = (values, { resetForm }) => {
        const newProject = { ...values, id: generateId(), done: false };
        console.log('Project Created:', newProject);

        const updatedProjects = [...projects, newProject];
        setProjects(updatedProjects);
        localStorage.setItem(storageKey, JSON.stringify(updatedProjects));

        resetForm();
        navigate('/projects');
    };


    return (
        <>
            <h2 className='title'>Creating project</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnBlur={true}
            >
                {() => (
                    <Form className='projectForm'>
                        <div className='projectForm_input'>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' name='name' />
                            <ErrorMessage name='name' component='div' className='error' />
                        </div>

                        <div className='form_input'>
                            <label htmlFor='field'>Field</label>
                            <Field as='select' name='field' className='form_field'>
                                <option value=''>Select Field</option>
                                <option value='Design'>Design</option>
                                <option value='Development'>Development</option>
                                <option value='Marketing'>Marketing</option>
                            </Field>
                            <ErrorMessage name='field' component='div' className='error' />
                        </div>

                        <div className='form_input'>
                            <label htmlFor='experience'>Experience</label>
                            <Field type='text' name='experience' />
                            <ErrorMessage name='experience' component='div' className='error' />
                        </div>

                        <div className='form_input deadline'>
                            <label htmlFor='deadline'>Deadline</label>
                            <Field type='date' name='deadline' className='form_deadline' />
                            <ErrorMessage name='deadline' component='div' className='error' />
                        </div>

                        <div className='form_input desc'>
                            <label htmlFor='description'>Description</label>
                            <Field as='textarea' name='description' />
                            <ErrorMessage name='description' component='div' className='error' />
                        </div>
                        <ProjectButton title={'Create project'} type='submit' className={'project_create form_btn'}/>
                    </Form>
                )}
            </Formik>
        </>
    );
};

ProjectForm.propTypes = {
    projects: PropTypes.array.isRequired,
    setProjects: PropTypes.func.isRequired,
};

export default ProjectForm;
