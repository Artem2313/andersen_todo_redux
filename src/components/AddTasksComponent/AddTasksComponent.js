import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import * as tasksActions from "../../redux/tasks/tasksActions";
import styles from "./AddTaskComponent.module.css";
import cx from "classnames";

class AddTaskComponent extends Component {
  state = { text: "", date: null, showValidationError: null };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text, date } = this.state;

    if (date === null) {
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

    const takenDate = new Date(date);

    const createdDate = `${takenDate.getDate()}/${
      takenDate.getMonth() + 1
    }/${takenDate.getFullYear()}`;

    const task = {
      text,
      date: createdDate,
      completed: false,
      id: uuidv4(),
    };

    console.log({ ...task });
    this.props.onSubmit({ ...task });

    this.setState({ text: "", date: null, showValidationError: null });
  };

  render() {
    const { text, showValidationError, date } = this.state;
    const inputSwitch = showValidationError
      ? styles.inputError
      : styles.inputSuccess;
    const btnSwitch = showValidationError && styles.btnError;

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
            className={cx(styles.input, inputSwitch)}
          />
          <button type="submit" className={cx(styles.btn, btnSwitch)}>
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
