import React, { Component } from "react";
import AddProject from "./components/AddProject";
import Projects from "./components/Projects";
import uuid from "uuid";

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        this.setState({
            projects: [
                {
                    id: uuid.v4(),
                    title: "Business Website",
                    category: "Web Design"
                },
                {
                    id: uuid.v4(),
                    title: "Social Application",
                    category: "Mobile Development"
                },
                {
                    id: uuid.v4(),
                    title: "E-Commerce Shopping Cart",
                    category: "Web Development"
                }
            ]
        });
    }

    onHandleAddProject = project => {
        const projects = [...this.state.projects];
        projects.push(project);
        this.setState({ projects });
        console.log("Project Added - ", project);
    };

    onHandleDeleteProject = project => {
        const projects = [...this.state.projects];
        let index = projects.findIndex(p => p.id === project.id);
        projects.splice(index, 1);
        this.setState({ projects });
        console.log("Project Removed - ", project);
    };

    render() {
        const { projects } = this.state;
        return (
            <div className="App">
                <AddProject onAddProject={this.onHandleAddProject} />
                <Projects
                    projects={projects}
                    onDelete={this.onHandleDeleteProject}
                />
            </div>
        );
    }
}

export default App;
