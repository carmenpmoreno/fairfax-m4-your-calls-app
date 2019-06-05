import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MonthYearDropdownOptions from './DatePikers';

class DateFilter extends Component {
  render() {
    return (
      <div>

        <MonthYearDropdownOptions />
        {/* <h2>Rango de fecha</h2>
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
        </div> */}
      </div>
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
