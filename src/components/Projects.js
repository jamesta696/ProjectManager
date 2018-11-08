import React, { Component } from "react";
import TableBody from "./TableBody";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";

class Projects extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div className="Projects" style={{ marginTop: "20px" }}>
                <p style={{ fontSize: "20px", marginLeft: "20px" }}>
                    Showing {projects.length} Projects in the database.
                </p>
                <div>
                    <table className="table table-striped table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col" />
                                <th scope="col">Title</th>
                                <th scope="col">Category</th>
                            </tr>
                        </thead>
                        <TableBody
                            onDelete={project => this.props.onDelete(project)}
                            projects={projects}
                        />
                    </table>
                </div>
                <footer className="footer">
                    <div className="container">
                        <span className="text-muted">
                            © 2018 Copyright: Built With ReactJS/JavaScript
                        </span>
                    </div>
                </footer>
            </div>
        );
    }
}

Projects.propTypes = {
    projects: PropTypes.array,
    onDelete: PropTypes.func
};

export default Projects;
