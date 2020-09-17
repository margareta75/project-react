import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  getStyle() {
    return {
      marginLeft: "10px",
      marginRight: "10px",
      backgroundColor: "turquoise",
      padding: "10px",
      border: "1px #708090 inset",
      textDecoration: this.props.todoProp.completed ? "line-through" : "none",
    };
  }

  render() {
    const { id, title } = this.props.todoProp;
    return (
      <div style={this.getStyle()}>
        <div>
          <input
            type="checkbox"
            onChange={this.props.markCompletePropTodos.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.deleteTodoPropTodos.bind(this, id)}
            style={buttonStyle}
          >
            x
          </button>
        </div>
      </div>
    );
  }
}

const buttonStyle = {
  background: "DeepPink",
  color: "white",
  border: "outset",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

Todo.propTypes = {
  todoProp: PropTypes.object.isRequired,
  markCompletePropTodos: PropTypes.func.isRequired,
  deleteTodoPropTodos: PropTypes.func.isRequired,
};

export default Todo;
