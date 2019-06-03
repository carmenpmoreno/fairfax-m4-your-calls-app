import React, {Component} from 'react';

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
                        id={this.props.dateStart}
                        type="date" 
                        className="input-date" 
                        placeholder="Desde: 26/02/1991" 
                        onChange={this.props.actionSetFilterStartDate}  
                    />                    
                  </div>
                  <div className="dateEnd">
                    <label htmlFor="dateEnd" ></label>
                    <input 
                      id={this.props.dateEnd}
                      type="date" 
                      className="input-date" 
                      placeholder="Hasta: 26/03/2019" 
                      onChange={this.props.actionSetFilterEndDate}/>
                  </div>
                </div>
                <button className="button__filter" onClick={e=>console.log(e)}>Filtrar</button>
              </th>
            </div>
        )
    }
}

export default DateFilter;