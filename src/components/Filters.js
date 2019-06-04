import React, { Component } from 'react';
import DateFilter from './DateFilter';
// import CompanyFilter from './CompanyFilter';
import CompanyFilter from './CompanyFilter';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    return (
      <form>
        <DateFilter
          actionSetFilterStartDate={this.props.actionSetFilterStartDate}
          actionSetFilterEndDate={this.props.actionSetFilterEndDate}
          dateStart={this.props.dateStart}
          dateEnd={this.props.dateEnd}
        />
        <CompanyFilter 
          allCompanies={this.props.allCompanies}
        />
      </form>
    );
  }
}

// Filters.propTypes = {
//     actionSetFilterStartDate: PropTypes.func.isRequired,
//     actionSetFilterEndDate: PropTypes.func.isRequired,
//     dateStart: PropTypes.string.isRequired,
//     dateEnd: PropTypes.string.isRequired,
// };

export default Filters;
