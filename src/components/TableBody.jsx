import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class TableBody extends Component {
    render() {
        const { projects } = this.props;
        return (
            <tbody>
                {projects.map(project => (
                    <tr key={project.id}>
                        <th scope="row" />
                        <td key={project.title}>{project.title}</td>
                        <td key={project.category}>{project.category}</td>
                        <td key={project.id}>
                            <button
                                onClick={() => this.props.onDelete(project)}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    }
}

export default TableBody;
