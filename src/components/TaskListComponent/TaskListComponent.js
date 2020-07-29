import React from "react";
import PropTypes from "prop-types";
import styles from "./TaskListComponent.module.css";
import classNames from "classnames";
import cx from "classnames";
import * as tasksActions from "../../redux/tasks/tasksActions";
import { connect } from "react-redux";
import * as selectors from "../../redux/selectors/selectors";

const TaskListComponent = ({ tasks, onUpdateCompleted, onDeleteTask }) => {
  const firstLine = cx(styles.listItem, styles.firstLine);
  return (
    <div className={styles.mainWrapper}>
      <h2 className={styles.title}>Hello from TodoList</h2>
      <ul className={styles.list}>
        <li className={firstLine}>
          <div>
            <p>Task Name</p>
          </div>
          <div>
            <p>Task Date</p>
          </div>
          <div>
            <p>Task Status</p>
          </div>
          <div>
            <p>Delete Task</p>
          </div>
        </li>
        {tasks &&
          tasks.map((task) => {
            const { completed, notcompleted } = styles;
            const textDecor = classNames(
              task.completed ? completed : notcompleted
            );
            return (
              <li key={task.id} className={styles.listItem}>
                <div>
                  <p className={textDecor}>{task.text}</p>
                </div>
                <div>
                  <p>{task.showDate}</p>
                </div>
                <div>
                  <label>
                    Completed:
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => onUpdateCompleted(task.id)}
                    />
                  </label>
                </div>
                <div>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={() => onDeleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

TaskListComponent.propTypes = {
  onDeleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  tasks: selectors.sortedArray(state),
});

const mapDispatchToProps = {
  onUpdateCompleted: tasksActions.completeTask,
  onDeleteTask: tasksActions.deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);
