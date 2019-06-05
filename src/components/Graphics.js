import React, { Component } from 'react';
import Chart from 'react-google-charts';
import '../styles/Graphics.scss';
import PropTypes from 'prop-types';

class Graphics extends Component {
  render() {
    return (
      <section className="charts-container">
        {this.props.barLoading === 'ready' ? (
          <Chart
            chartType="BarChart"
            width={'550px'}
            height={'300px'}
            data={this.props.barData}
            options={{
              title: 'Llamadas totales',
              chartArea: {
                width: '50%',
                stroke: '#1C1C1C'
              },
              isStacked: true,
              orientation: 'horizontal',
              hAxis: {
                title: 'Mes',
                titleTextStyle: {
                  color: '#fff'
                },
                textStyle: {
                  color: '#fff'
                },
                minValue: 0
              },
              vAxis: {
                title: 'Número de llamadas',
                titleTextStyle: {
                  color: '#fff'
                },
              },
              legend: {
                position: 'top',
                alignment: 'start',
                textStyle: {
                  color: '#fff',
                  fontSize: 14,
                  fontName: 'Arial',
                  bold: false,
                  italic: false
                }
              },

              backgroundColor: '#1C1C1C',
              titleTextStyle: {
                color: 'white',
                fontSize: 20,
                bold: true
              }
            }}
          />
        ) : (
          <div>Fetching data from API</div>
        )}

        {this.props.pieLoading === 'ready' ? (
          <Chart
            chartType="PieChart"
          width={'550px'}
            height={'300px'}
            data={this.props.pieData}
            options={{
              slices: [
                {
                  color: '#58C155'
                },
                {
                  color: '#F5C167'
                },
                {
                  color: '#EE8268'
                }
              ],
              chartArea: {
                top: '50',
                width: '50%',
                height: '80%',
                stroke: '#1C1C1C'
              },
              legend: {
                textStyle: {
                  color: '#9E9D9E',
                  fontSize: 14
                }
              },
              backgroundColor: '#1C1C1C',
              pieSliceBorderColor: '#1C1C1C',
              pieSliceTextStyle: {
                color: '#1C1C1C',
                bold: true
              },
              title: 'Humor de las llamadas',
              titleTextStyle: {
                color: 'white',
                fontSize: 20
              }
            }}
          />
        ) : (
          <div>Fetching data from API</div>
        )}
      </section>
    );
  }
}

Graphics.propTypes = {
  pieData: PropTypes.arrayOf(PropTypes.array),
  pieLoading: PropTypes.string.isRequired,
  barData: PropTypes.arrayOf(PropTypes.array),
  barLoading: PropTypes.string.isRequired
};

export default Graphics;
