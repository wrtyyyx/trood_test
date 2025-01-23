import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const ProjectViewCard = ({project, index}) => {
    const navigate = useNavigate();

    return (
        <>
            <div key={index} className='projectView_card'
                 onClick={() => navigate(`/projectCheck/${project.id}`)}>
                <div className='projectView_card_info'>
                    <h3 className='projectView_card_title'>{project.name}</h3>
                    <p className='projectView_card_desc'>{project.description}</p>
                </div>
            </div>

        </>
    );
};

ProjectViewCard.propTypes = {
    project: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,

}
export default ProjectViewCard;