import React, { Component } from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    const todos = this.props.todos;
    return (
      <div>
        {todos.map((todoItem) => {
          return (
            <Todo
              key={todoItem.id}
              todoProp={todoItem}
              markCompletePropTodos={this.props.markCompletePropApp}
              deleteTodoPropTodos={this.props.deleteTodoPropApp}
            />
          );
        })}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markCompletePropApp: PropTypes.func.isRequired,
  deleteTodoPropApp: PropTypes.func.isRequired,
};

export default Todos;
