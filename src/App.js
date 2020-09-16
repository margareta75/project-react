import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Todos from "./Todos";
import Header from "./Header";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import About from "./pages/About";

class App extends Component {
  state = {
    todos: [
      { id: uuidv4(), title: "städa", completed: false },
      { id: uuidv4(), title: "handla", completed: false },
      { id: uuidv4(), title: "diska", completed: false },
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
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markCompletePropApp={this.markComplete}
                    deleteTodoPropApp={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
