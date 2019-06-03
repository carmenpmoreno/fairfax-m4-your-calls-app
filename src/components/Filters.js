import React, {Component} from 'react';
import DateFilter from './DateFilter';

class Filters extends Component {
    render () {
        return (
            <DateFilter 
            // actionShowList={this.props.actionShowList} 
            // results={this.props.results} 
            actionGetStartDate= {this.props.actionGetStartDate} 
            actionGetEndDate= {this.props.actionGetEndDate} 
            actionFilterDate={this.props.actionFilterDate}
        />
        )
    }
}

export default Filters;