import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SortTasksComponent.module.css";
import { connect } from "react-redux";
import * as sortActions from "../../redux/sort/sortActions";

class SortTasksComponent extends Component {
  static propTypes = {
    onSort: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
    filtered: PropTypes.array.isRequired,
  };

  state = {
    sortDirectionNameAsc: true,
    sortDirectionDateAsc: true,
  };

  sortDirectionChange = (e) => {
    const sort = e.target.name;
    const { onSort } = this.props;
    onSort(sort);
    if (sort === "nameAsc" || sort === "nameDsc") {
      this.setState((prevState) => ({
        sortDirectionNameAsc: !prevState.sortDirectionNameAsc,
      }));
    } else if (sort === "dateAsc" || sort === "dateDsc") {
      this.setState((prevState) => ({
        sortDirectionDateAsc: !prevState.sortDirectionDateAsc,
      }));
    }
  };

  render() {
    const { sortDirectionNameAsc, sortDirectionDateAsc } = this.state;
    return (
      <div onClick={this.sortDirectionChange} className={styles.mainWrapper}>
        <span className={styles.title}>Sort Task</span>
        <div className={styles.btnContainer}>
          <button
            type="button"
            name={sortDirectionNameAsc ? "nameAsc" : "nameDsc"}
            onClick={this.sort}
            className={styles.btn}
          >
            {sortDirectionNameAsc ? "A-Z" : "Z-A"}
          </button>
          <button
            type="button"
            name={sortDirectionDateAsc ? "dateAsc" : "dateDsc"}
            onClick={this.sort}
            className={styles.btn}
          >
            {sortDirectionDateAsc ? "New-Old" : "Old-New"}
          </button>
          <button
            type="button"
            name="sortClear"
            onClick={this.sort}
            className={styles.btn}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onSort: sortActions.sortBy,
};

export default connect(null, mapDispatchToProps)(SortTasksComponent);
