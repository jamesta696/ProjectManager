import React, { Component } from "react";
import ProjectItem from "./projectItem";

class Projects extends Component {
    deleteProject = id => {
        this.props.onDelete(id);
    };

    render() {
        let projectItems;

        if (this.props.projects) {
            projectItems = this.props.projects.map(project => {
                //console.log(project);
                return (
                    <ProjectItem
                        project={project}
                        key={project.title}
                        onDelete={id => this.deleteProject(id)}
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
