import React, { Component } from "react";
import Todos from "./Todos";
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

  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          markCompletePropApp={this.markComplete}
        />
      </div>
    );
  }
}

export default App;
