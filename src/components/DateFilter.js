import React, {Component} from 'react';
import PropTypes from "prop-types";

class DateFilter extends Component {
    render () {
        return (
            <div>
            <h2>
              Rango de fecha
            </h2>
            <th colSpan="2" className="cell table__date">
                <div className="main__subtitle--date-container">
                  <div className="dateStart">
                    <label htmlFor="dateStart"></label>
                    <input  
                        id= "dateStart"
                        value={this.props.dateStart}
                        type="date" 
                        className="input-date" 
                        onChange={this.props.actionSetFilterStartDate}  
                    />                    
                  </div>
                  <div className="dateEnd">
                    <label htmlFor="dateEnd" ></label>
                    <input 
                      id="dateEnd"
                      value={this.props.dateEnd}
                      type="date" 
                      className="input-date"
                      onChange={this.props.actionSetFilterEndDate}/>
                  </div>
                </div>
                <button className="button__filter" onClick={e=>console.log(e)}>Filtrar</button>
              </th>
            </div>
        )
    }
}


DateFilter.propTypes = {
  actionSetFilterStartDate: PropTypes.func.isRequired,
  actionSetFilterEndDate: PropTypes.func.isRequired,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
};

export default DateFilter;