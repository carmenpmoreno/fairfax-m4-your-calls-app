import React, {Component} from 'react';
import DateFilter from './DateFilter';

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

export default Filters;