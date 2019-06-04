import React, { Component } from "react";
import PropTypes from "prop-types";
import Filters from "./Filters";
import Graphics from "./Graphics";

class Dashboard extends Component {
  render() {
<<<<<<< HEAD
    const dataOriginal = [
      {
        month: 0,
        year: 2018,
        ikea: 1,
        racc: 5,
        cc: 3,
        audi: 3,
        tork: 1
      },
      {
        month: 1,
        year: 2018,
        ikea: 2,
        racc: 15,
        cc: 6,
        audi: 3,
        tork: 2
      },
      {
        month: 2,
        year: 2018,
        ikea: 2,
        racc: 8,
        cc: 9,
        audi: 2,
        tork: 3
      },
      {
        month: 3,
        year: 2018,
        ikea: 2,
        racc: 4,
        cc: 3,
        audi: 1,
        tork: 2
      }
    ];
=======
>>>>>>> fd8aec5c756050f831c7c96011bb2260fc1caae7
    return (
      <div>
        <Filters
          actionSetFilterStartDate={this.props.actionSetFilterStartDate}
          actionSetFilterEndDate={this.props.actionSetFilterEndDate}
<<<<<<< HEAD
          dateStart={this.props.dateStart}
          dateEnd={this.props.dateEnd}
=======
          dateStart={this.props.startDate}
          dateEnd={this.props.endDate}
          allCompanies={this.props.allCompanies}
          getCompanySelected={this.props.getCompanySelected}
          companySelected={this.props.companySelected}
>>>>>>> fd8aec5c756050f831c7c96011bb2260fc1caae7
        />

        <Graphics
          pieData={this.props.pieData}
          pieLoading={this.props.pieLoading}
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
  pieData: PropTypes.arrayOf(PropTypes.array),
  pieLoading: PropTypes.string.isRequired,
<<<<<<< HEAD
  actionSetFilterStartDate: PropTypes.func.isRequired,
  actionSetFilterEndDate: PropTypes.func.isRequired,
  dateStart: PropTypes.string.isRequired,
  dateEnd: PropTypes.string.isRequired
=======
  actionSetFilterStartDate: PropTypes.func,
  actionSetFilterEndDate: PropTypes.func,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
  allCompanies: PropTypes.arrayOf(PropTypes.string),
  getCompanySelecte: PropTypes.func,
  companySelected: PropTypes.string
>>>>>>> fd8aec5c756050f831c7c96011bb2260fc1caae7
};

export default Dashboard;
