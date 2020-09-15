import React, { Component } from "react";
import Todos from "./Todos";
import Header from "./Header";
import AddTodo from "./AddTodo";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "städa", completed: false },
      { id: 2, title: "handla", completed: false },
      { id: 3, title: "diska", completed: false },
    ],
  };

  // Toggle completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
    console.log(id);
    console.log("clicked");
  };

  // Delete Todo
  deleteTodo = (id) => {
    console.log("deleted todo: ", id);
    const newState = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newState });
  };

  //Add Todo
  addTodo = (title) => {
    console.log(title);
    const newTodo = {
      id: 4,
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markCompletePropApp={this.markComplete}
          deleteTodoPropApp={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
