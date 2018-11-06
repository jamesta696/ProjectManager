import React, { Component } from "react";

class ProjectItem extends Component {
    // Refactored - line 14
    // deleteProject = project => {
    //     this.props.onDelete(project);
    //     // console.log("Project Deleted - ", this.props.project);
    // };

    render() {
        return (
            <li className="Project">
                {this.props.project.title} - {this.props.project.category}
                <button onClick={() => this.props.onDelete(this.props.project)}>
                    Delete
                </button>
            </li>
        );
    }
}

export default ProjectItem;
