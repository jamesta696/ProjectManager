import React, { Component } from "react";
import ProjectItem from "./projectItem";

class Projects extends Component {
    render() {
        const { onDelete } = this.props;

        let projectItems;
        if (this.props.projects) {
            projectItems = this.props.projects.map(project => {
                //console.log(project);
                return (
                    <ProjectItem
                        project={project}
                        key={project.title}
                        onDelete={onDelete}
                    />
                );
            });
        }

        return (
            <div className="Projects">
                <h3>Latest Projects</h3>
                {projectItems}
            </div>
        );
    }
}

export default Projects;
