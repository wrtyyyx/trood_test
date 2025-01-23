import React from 'react';

const ProjectButton = ({ type,title, classname, handler,}) => {
    return (
        <>
            <button type={type} className = {classname} onClick={handler}>{title}</button>
        </>
    );
};

export default ProjectButton;