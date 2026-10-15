import React, { Component } from "react";
import "./TodoApp.css";



export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
    editIndex: null,
    completed: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  storeItems = (event) => {
    event.preventDefault();
    const { input, editIndex, items } = this.state;
    this.setState({
      items: [...this.state.items, input],
      input: "",
    });

    if (editIndex !== null) {
      // update existing item
      const updatedItems = [...items];
      updatedItems[editIndex] = input;
      this.setState({
        items: updatedItems,
        input: "",
        editIndex: null,
      });
    } else {
      // add new item
      this.setState({
        items: [...items, input],
        input: "",
      });
    }
  };
  deleteItems = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };
  editItem = (index) => {
    this.setState({
      input: this.state.items[index],
      editIndex: index,
    });
  };

  toggleComplete = (index) => {
    const { completed } = this.state;
    if (completed.includes(index)) {
      this.setState({
        completed: completed.filter((i) => i !== index),
      });
    } else {
      this.setState({
        completed: [...completed, index],
      });
    }
  };

  render() {
    const { input, items } = this.state;

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>TodoApp</h1>
          <div className="input-wrapper">
            <input
              type="text"
              value={input}
              onChange={this.handleChange}
              placeholder="Enter items..."
              required
            />
            <button type="submit" className="add-btn">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </form>

        <ul>
          {items.map((data, index) => (
            <li key={index}>
              <span
                className={`task-text ${
                  this.state.completed.includes(index) ? "completed" : ""
                }`}
              >
                {data}
              </span>

              <div className="actions">
                <i
                  className="fa-solid fa-pen-to-square"
                  onClick={() => this.editItem(index)}
                ></i>
                <i
                  className="fa-solid fa-check"
                  onClick={() => this.toggleComplete(index)}
                ></i>
                <i
                  className="fa-regular fa-trash-can"
                  onClick={() => this.deleteItems(index)}
                ></i>
              </div>
            </li>
          ))}
        </ul>
     
      </div>
    );
  }
}
