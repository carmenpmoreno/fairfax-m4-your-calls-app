import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompanyFilter extends Component {

  render() {

    const {allCompanies, getCompanySelected} = this.props;
    console.log(getCompanySelected);

    return (
      <fieldset>
        <legend>Filtro por cliente</legend>
        <label>Cliente</label>
        <select id="company" name="company">
          <option value="Elegir" >Elige una compañia</option>
          {allCompanies.map((item, index) => {
            return (
              <option 
                key={index + 1} 
                value={item}
                onChange={getCompanySelected}
                >
                {item}
              </option>
              );
          })}
        </select>
      </fieldset>
    );
  }
}

CompanyFilter.propTypes = {
  allCompanies: PropTypes.arrayOf(PropTypes.string),
};

export default CompanyFilter;
