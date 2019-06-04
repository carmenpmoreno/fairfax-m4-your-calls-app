import React, { Component } from "react";
import PropTypes from "prop-types";
import Filters from "./Filters";
import Graphics from "./Graphics";

class Dashboard extends Component {
    render () {
        return (
            <div>
                <Filters 
                    actionSetFilterStartDate ={this.props.actionSetFilterStartDate}
                    actionSetFilterEndDate ={this.props.actionSetFilterEndDate}
                    dateStart={this.props.startDate}
                    dateEnd={this.props.endDate}
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
    actionSetFilterStartDate: PropTypes.func.isRequired,
    actionSetFilterEndDate: PropTypes.func.isRequired,
    dateStart: PropTypes.string.isRequired,
    dateEnd: PropTypes.string.isRequired,
};

export default Dashboard;
