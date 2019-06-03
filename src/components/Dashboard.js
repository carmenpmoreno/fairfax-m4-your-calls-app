import React, { Component } from "react";
import PropTypes from "prop-types";
import Filters from "./Filters";
import Graphics from "./Graphics";

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
        />
      </div>
    );
  }
}

// Dashboard.PropTypes = {

// };

export default Dashboard;
