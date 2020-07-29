import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import * as tasksActions from "../../redux/tasks/tasksActions";
import styles from "./AddTaskComponent.module.css";
import cx from "classnames";

class AddTaskComponent extends Component {
  state = { text: "", date: "", showValidationError: null };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Хендл менять нельзя т.к. я его повесил и на дейт и на текст
  handleSubmit = (e) => {
    e.preventDefault();
    const { text, date } = this.state;

    if (date === "") {
      this.setState({
        showValidationError: "Please, set date",
      });
      return;
    }

    if (text.trim().length === 0) {
      this.setState({
        showValidationError: "Please, enter task",
      });
      return;
    }

    const task = {
      text,
      date,
      showDate: date.split("-").reverse().join("-"),
      completed: false,
      id: uuidv4(),
    };

    console.log({ ...task });
    this.props.onSubmit({ ...task });

    this.setState({ text: "", date: "", showValidationError: null });
  };

  render() {
    const { text, showValidationError, date } = this.state;
    const inputSwitch = showValidationError
      ? styles.inputError
      : styles.inputSuccess;
    const btnSwitch = showValidationError && styles.btnError;

    const textInput = cx(styles.input, inputSwitch);
    const addBtn = cx(styles.btn, btnSwitch);

    return (
      <div className={styles.mainWrapper}>
        <h2 className={styles.title}>Add task</h2>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={this.handleChange}
            placeholder="Write task"
            className={textInput}
          />
          <button type="submit" className={addBtn}>
            Add Todo
          </button>
        </form>
        <div className={styles.dateContainer}>
          <span className={styles.span}>Set date</span>
          <input
            type="date"
            name="date"
            value={date}
            onChange={this.handleChange}
            styles={styles.dateInput}
          />
        </div>
        {showValidationError && (
          <span className={styles.spanError}>{showValidationError}</span>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: tasksActions.addTask,
};

export default connect(null, mapDispatchToProps)(AddTaskComponent);
