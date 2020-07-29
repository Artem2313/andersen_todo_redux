import React from "react";
import PropTypes from "prop-types";
import styles from "./FilterDateComponent.module.css";
import { connect } from "react-redux";
import * as filterByDateActions from "../../redux/filterByDate/filterByDateActions";
import * as selectors from "../../redux/selectors/selectors";

class FilterDateComponent extends React.Component {
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
        <span className={styles.title}>Filter by Date</span>
        <div>
          <input
            type="date"
            name="date"
            value={filter}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: selectors.filterDate(state),
});

const mapDispatchToProps = {
  onChangeFilter: filterByDateActions.filterByDate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterDateComponent);
