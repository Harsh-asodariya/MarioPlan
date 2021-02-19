import React from 'react';
import ProjectSummary from './ProjectSumary';
import { Link } from 'react-router-dom';


const projectList = ({ projects }) => {
    return (
        <div className="project-list section">
            { projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id}>
                        <ProjectSummary project={project} />
                    </Link>
                )
            })}
        </div>
    )
}

export default projectList;