import React, { Component } from "react";

class ProjectItem extends Component {
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
