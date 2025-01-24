import PropTypes from "prop-types";
const ProjectButton = ({ type,title, className, handler,}) => {
    return (
        <>
            <button type={type} className = {className} onClick={handler}>{title}</button>
        </>
    );
};

ProjectButton.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
}
export default ProjectButton;