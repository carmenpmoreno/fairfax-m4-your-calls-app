import React, { Component } from 'react';
// import { getCompanies } from '../services/getAllCompanies';

const ENDPOINT = 'https://adalab.interacso.com/api/call';

class CompanyFilterBis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCompanies: []
    };
  }

  getCompaniesData() {
    fetch(ENDPOINT, {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        return data;
      })
      .then(data => {
        //I have all callHistory here in a huge array. Let's iterate it to get just the companies names
        const companiesArray = data
          .map(item => {
            return item.company;
          })
          //Filter to delete duplicates, comparing the first index of that value (IndexOf) with the actual ind
          .filter((item, ind, array) => array.indexOf(item) === ind);

        this.setState({
          allCompanies: companiesArray
        });
        // console.log(companiesArray);
      });
  }

  componentDidMount() {
    this.getCompaniesData();
  }

  render() {
    return (
      <fieldset>
        <legend>Filtro por cliente</legend>
        <label>Cliente</label>
        <select id="company" name="company">
          <option value="">Elige una compañia</option>
          {this.state.allCompanies.map(item => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </fieldset>
    );
  }
}

export default CompanyFilterBis;
