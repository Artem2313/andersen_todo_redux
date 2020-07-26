import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import * as tasksActions from "../../redux/tasks/tasksActions";

class AddTaskComponent extends Component {
  state = { text: "", date: new Date() };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text, date } = this.state;

    const task = {
      text,
      date,
      completed: false,
      id: uuidv4(),
    };

    console.log({ ...task });
    this.props.onSubmit({ ...task });

    this.setState({ text: "", date: new Date() });
  };

  render() {
    const { text, date } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="text" value={text} onChange={this.handleChange} />
        <input
          type="date"
          name="date"
          value={date}
          onChange={this.handleChange}
        />
        <button type="submit">Add Post</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: tasksActions.addTask,
};

export default connect(null, mapDispatchToProps)(AddTaskComponent);
