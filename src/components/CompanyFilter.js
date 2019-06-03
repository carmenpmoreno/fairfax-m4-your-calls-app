import React, {Component} from 'react';

class CompanyFilter extends Component {
    render() {
        return(
            <fieldset>
                <legend>Filtro por cliente</legend>
                <label>Cliente</label>
                <select id="company" name="company">
                    <option value=""></option>
                </select>

            </fieldset>
        );
    }
}

export default CompanyFilter;