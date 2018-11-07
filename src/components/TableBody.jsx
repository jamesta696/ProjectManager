import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";

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

TableBody.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
};

export default TableBody;
