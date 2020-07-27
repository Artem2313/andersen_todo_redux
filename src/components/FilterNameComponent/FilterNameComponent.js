import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./FilterNameComponent.module.css";
import { connect } from "react-redux";
import * as filterByNameActions from "../../redux/filterByName/filterByNameActions";
import * as selectors from "../../redux/selectors/selectors";

class FilterNameComponent extends Component {
  static propTypes = {
    onChangeFilter: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    this.props.onChangeFilter(e.target.value);
  };
  render() {
    const { filter } = this.props;
    return (
      <div className={styles.mainWrapper}>
        <span className={styles.title}>Filter Task By Name</span>
        <input
          type="text"
          value={filter}
          onChange={this.handleChange}
          placeholder="Type to filter tasks..."
          className={styles.input}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: selectors.filterName(state),
});

const mapDispatchToProps = {
  onChangeFilter: filterByNameActions.filterByName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterNameComponent);
