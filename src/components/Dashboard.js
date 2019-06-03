import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters';
import Graphics from './Graphics';

class Dashboard extends Component {
    render () {
        return (
            <div>
                <Filters 
                    actionSetFilterStartDate ={this.props.actionSetFilterStartDate}
                    actionSetFilterEndDate ={this.props.actionSetFilterEndDate}
                    dateStart={this.props.dateStart}
                    dateEnd={this.props.dateEnd}
                />

                <Graphics />

            </div>
        )
    } 
}

// Dashboard.PropTypes = {

// };


export default Dashboard;