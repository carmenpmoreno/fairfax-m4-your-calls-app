import React, { Component } from 'react';
import { fetchChartPie } from '../services/getDataChartPie';

class CompanyFilter extends Component {
  getData() {
    fetch('https://adalab.interacso.com/api/graph/bar')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // const keys = Object.keys()
      });
  }

  render() {
    return (
      <fieldset>
        <legend>Filtro por cliente</legend>
        <label>Cliente</label>
        <select id="company" name="company">
          {this.getData()}
        </select>
      </fieldset>
    );
  }
}

export default CompanyFilter;
