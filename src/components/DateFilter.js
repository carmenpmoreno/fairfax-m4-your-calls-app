import React, { Component } from "react";
import PropTypes from "prop-types";
import "react-dates/initialize";

import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class DateFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
    };
  }
  render() {
    return (
      <div>
        <h2>Rango de fecha</h2>
        <div className="App">
          <DateRangePicker
            startDateId="startDate"
            endDateId="endDate"
            startDate={this.props.dateStart}
            endDate={this.props.dateEnd}
            onDatesChange={({ startDate, endDate }) => {
              this.setState({ startDate, endDate });
            }}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => {
              this.setState({ focusedInput });
            }}
          />
        </div>
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
