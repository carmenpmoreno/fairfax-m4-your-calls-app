import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DateFilter extends Component {
  render() {
    return (
      <fieldset className="dateFilterContainer">
        <legend className="dateFilterLegend">Rango de fecha</legend>
        <div className="main__subtitle--date-container">
          <div className="dateStart">
            <label htmlFor="dateStart" />
            <input
              id="dateStart"
              value={this.props.dateStart}
              type="date"
              className="input-date"
              onChange={this.props.actionSetFilterStartDate}
            />
          </div>
          <div className="dateEnd">
            <label htmlFor="dateEnd" />
            <input
              id="dateEnd"
              value={this.props.dateEnd}
              type="date"
              className="input-date"
              onChange={this.props.actionSetFilterEndDate}
            />
          </div>
        </div>
      </fieldset>
    );
  }
}

DateFilter.propTypes = {
  actionSetFilterStartDate: PropTypes.func.isRequired,
  actionSetFilterEndDate: PropTypes.func.isRequired,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string
};

export default DateFilter;
