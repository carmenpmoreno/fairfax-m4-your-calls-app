import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/CompanyFilter.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronDown);

class CompanyFilter extends Component {
  render() {
    const { allCompanies, getCompanySelected, companySelected } = this.props;

    return (
      <fieldset className="companyFilterContainer">
        <legend className="companyFilterLegend">Cliente</legend>
        <label className="companyFilterLabel">Filtro por cliente</label>
        <div className="selectContainer">
          <select
            className="companySelect"
            id="company"
            name="company"
            value={companySelected}
            onChange={getCompanySelected}
          >
            <option value="">Elige una compañia</option>
            {allCompanies.map((item, index) => {
              return (
                <option key={index + 1} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <FontAwesomeIcon icon="chevron-down" className="faChevronDown" />
        </div>
      </fieldset>
    );
  }
}

CompanyFilter.propTypes = {
  allCompanies: PropTypes.arrayOf(PropTypes.string),
  getCompanySelecte: PropTypes.func,
  companySelected: PropTypes.string
};

export default CompanyFilter;
