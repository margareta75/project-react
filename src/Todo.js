import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  getStyle() {
    return {
      marginLeft: "10px",
      marginRight: "10px",
      backgroundColor: "turquoise",
      padding: "10px",
      borderBottom: "1px #708090 dotted",
      textDecoration: this.props.todoProp.completed ? "line-through" : "none",
    };
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <div>
          <input
            type="checkbox"
            onChange={this.props.markCompletePropTodos.bind(
              this,
              this.props.todoProp.id
            )}
          />{" "}
          {this.props.todoProp.title}
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  todoProp: PropTypes.object.isRequired,
};

export default Todo;
