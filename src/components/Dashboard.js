import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters';
import Graphics from './Graphics';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Filters
          // actionShowList={this.props.actionShowList}
          // results={this.props.results}
          actionGetStartDate={this.props.actionGetStartDate}
          actionGetEndDate={this.props.actionGetEndDate}
          actionFilterDate={this.props.actionFilterDate}
        />

        <Graphics
          pieData={this.props.pieData}
          pieLoading={this.props.pieLoading}
          barData={this.props.pieData}
          barLoading={this.props.pieLoading}
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
  pieData: PropTypes.arrayOf(PropTypes.array),
  pieLoading: PropTypes.string.isRequired,
  barData: PropTypes.arrayOf(PropTypes.array),
  barLoading: PropTypes.string.isRequired,
  actionGetStartDate: PropTypes.func.isRequired,
  actionGetEndDate: PropTypes.func.isRequired,
  actionFilterDate: PropTypes.func.isRequired
};

export default Dashboard;
