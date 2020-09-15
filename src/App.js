import React, { Component } from "react";
import Todos from "./Todos";
import Header from "./Header";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "städa", completed: false },
      { id: 2, title: "handla", completed: false },
      { id: 3, title: "diska", completed: false },
    ],
  };

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

  deleteTodo = (id) => {
    console.log("deleted todo: ", id);
    const newState = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newState });
  };

  render() {
    return (
      <div className="App">
        <Header />
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
