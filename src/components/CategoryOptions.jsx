import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class CategoryOptions extends Component {
    static defaultProps = {
        categories: ["Web Design", "Web Development", "Mobile Development"]
    };

    render() {
        const { categories } = this.props;
        let categoryOptions = categories.map(category => {
            return (
                <option key={category} value={category}>
                    {category}
                </option>
            );
        });
        return (
            <div className="Project-Category">
                <label>Category</label>
                <br />
                <select
                    ref="category"
                    className="custom-select custom-select-md mb-3"
                    id="inputGroupSelect01"
                    style={{ width: "50%", minWidth: "320px" }}
                >
                    {categoryOptions}
                </select>
            </div>
        );
    }
}

export default CategoryOptions;
