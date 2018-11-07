import React, { Component } from "react";
import ProjectTitle from "./ProjectTitle";
import CategoryOptions from "./CategoryOptions";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.css";

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        };
    }

    onHandleSubmit = e => {
        this.projectTitle = document.querySelector(".form-control");
        this.categorySelect = document.querySelector(".custom-select");

        if (this.projectTitle.value === "") {
            alert("please enter title");
        } else {
            this.setState(
                {
                    newProject: {
                        id: uuid.v4(),
                        title: this.projectTitle.value,
                        category: this.categorySelect.value
                    }
                },
                () => {
                    this.props.onAddProject(this.state.newProject);
                }
            );
        }
        e.preventDefault();
        return (this.projectTitle.value = "");
    };

    render() {
        return (
            <div style={{ marginLeft: "20px" }}>
                <h4 className="display-4" style={{ fontSize: "40px" }}>
                    Add New Projects:
                </h4>
                <br />
                <form onSubmit={this.onHandleSubmit}>
                    <ProjectTitle />
                    <CategoryOptions />
                    <br />
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        );
    }
}

export default AddProject;
