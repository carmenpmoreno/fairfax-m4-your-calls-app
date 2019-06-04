import React, { Component } from 'react';
import { fetchChartPie } from '../services/getDataChartPie';

class CompanyFilter extends Component {

  render() {
    const {allCompanies} = this.props;

    return (
      <fieldset>
        <legend>Filtro por cliente</legend>
        <label>Cliente</label>
        <select id="company" name="company">
          <option value="">Elige una compañia</option>
          {allCompanies.map(item => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </fieldset>
    );
  }
}

export default CompanyFilter;
