import React, {Component} from 'react';
import DateFilter from './DateFilter';
import PropTypes from "prop-types";

class Filters extends Component {
    render () {
        return (
            <DateFilter 
            actionSetFilterStartDate ={this.props.actionSetFilterStartDate}
            actionSetFilterEndDate ={this.props.actionSetFilterEndDate}
            dateStart={this.props.dateStart}
            dateEnd={this.props.dateEnd}
        />
        )
    }
}

Filters.propTypes = {
    actionSetFilterStartDate: PropTypes.func.isRequired,
    actionSetFilterEndDate: PropTypes.func.isRequired,
    dateStart: PropTypes.string.isRequired,
    dateEnd: PropTypes.string.isRequired,
};

export default Filters;