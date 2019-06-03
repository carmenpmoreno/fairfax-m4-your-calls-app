import React, {Component} from 'react';

class CompanyFilter extends Component {


    render() {
        return(
            <fieldset>
                <legend>Filtro por cliente</legend>
                <label>Cliente</label>
                <select id="company" name="company">
                {fetch('https://adalab.interacso.com/api/graph/bar')
                    .then(response => response.json())
                    .then(data => {
                        const keys = Object.keys(data[0]);
                        
                    return (
                        {keys.map (item => {
                            <option value={ImageBitmapRenderingContext}></option>
                        })}
                    );
                    })
                }
                </select>
            </fieldset>
        );
    }
}

export default CompanyFilter;