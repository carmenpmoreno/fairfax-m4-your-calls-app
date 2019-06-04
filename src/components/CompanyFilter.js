import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompanyFilter extends Component {
  render() {
    const { allCompanies, getCompanySelected, companySelected } = this.props;

    return (
      <fieldset>
        <legend>Filtro por cliente</legend>
        <label>Cliente</label>
        <select id="company" name="company" value={companySelected} onChange={getCompanySelected}>
          <option value="">Elige una compañia</option>
          {allCompanies.map((item, index) => {
            return (
              <option
                key={index + 1}
                value={item}
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
  getCompanySelecte: PropTypes.func,
  companySelected: PropTypes.string,
};

export default CompanyFilter;
