import React, {Component} from 'react';
import DateFilter from './DateFilter';
import CompanyFilter from './CompanyFilter';

class Filters extends Component {
    render () {
        return (
            <form>
                <DateFilter 
                // actionShowList={this.props.actionShowList} 
                // results={this.props.results} 
                actionGetStartDate= {this.props.actionGetStartDate} 
                actionGetEndDate= {this.props.actionGetEndDate} 
                actionFilterDate={this.props.actionFilterDate}
                />
                <CompanyFilter />
            </form>

        )
    }
}

export default Filters;