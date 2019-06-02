import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DateFilter from './DateFilter';

class Dashboard extends Component {
    render () {
        return (
            <div>
                <DateFilter 
                    // actionShowList={this.props.actionShowList} 
                    // results={this.props.results} 
                    actionGetStartDate= {this.props.actionGetStartDate} 
                    actionGetEndDate= {this.props.actionGetEndDate} 
                    actionFilterDate={this.props.actionFilterDate}
                />
            </div>
        )
    } 
}

// Dashboard.PropTypes = {

// };


export default Dashboard;