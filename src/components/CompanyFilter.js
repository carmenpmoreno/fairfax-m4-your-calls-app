import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/CompanyFilter.scss';

class CompanyFilter extends Component {
  render() {
    const { allCompanies, getCompanySelected, companySelected } = this.props;

    return (
      <fieldset className="companyFilterContainer">
        <legend className="companyFilterLegend">Cliente</legend>
        <label className="companyFilterLabel">Filtro por cliente</label>
        <select className="companySelect" id="company" name="company" value={companySelected} onChange={getCompanySelected}>
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
