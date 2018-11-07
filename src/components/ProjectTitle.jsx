import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class ProjectTitle extends Component {
    render() {
        return (
            <div
                className="input-group mb-3 Project-Tile"
                style={{ width: "50%", minWidth: "320px" }}
            >
                <div className="input-group-prepend">
                    <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                        style={{
                            color: "#fff",
                            backgroundColor: "#007bff",
                            fontWeight: "600"
                        }}
                    >
                        Project Title
                    </span>
                </div>
                <input
                    required="required"
                    ref="title"
                    type="text"
                    className="form-control"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </div>
        );
    }
}

export default ProjectTitle;
