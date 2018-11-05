import React, { Component } from "react";

class ProjectItem extends Component {
    deleteProject = id => {
        this.props.onDelete(id);
        console.log("Project Deleted - ", this.props.project);
    };

    render() {
        return (
            <li className="Project">
                {this.props.project.title} - {this.props.project.category}
                <button
                    onClick={() => this.deleteProject(this.props.project.id)}
                >
                    Delete
                </button>
            </li>
        );
    }
}

export default ProjectItem;
