import React, { Component } from 'react';
import DateFilter from './DateFilter';
import CompanyFilter from './CompanyFilter';
import PropTypes from 'prop-types';
import '../styles/Filters.scss';

class Filters extends Component {
  render() {
    return (
      <form className="filtersForm">
        <DateFilter
          actionSetFilterStartDate={this.props.actionSetFilterStartDate}
          actionSetFilterEndDate={this.props.actionSetFilterEndDate}
          dateStart={this.props.dateStart}
          dateEnd={this.props.dateEnd}
        />
        <CompanyFilter 
          allCompanies={this.props.allCompanies}
          getCompanySelected={this.props.getCompanySelected}
          companySelected={this.props.companySelected}
        />
      </form>
    );
  }
}

Filters.propTypes = {
    actionSetFilterStartDate: PropTypes.func,
    actionSetFilterEndDate: PropTypes.func,
    dateStart: PropTypes.string,
    dateEnd: PropTypes.string,
    allCompanies: PropTypes.arrayOf(PropTypes.string),
    getCompanySelecte: PropTypes.func,
    companySelected: PropTypes.string,
};

export default Filters;
