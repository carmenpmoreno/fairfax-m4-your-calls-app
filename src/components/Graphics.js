import React, { Component } from 'react';
import Chart from 'react-google-charts';
import '../styles/Graphics.scss';

//Fake data from Mock
const chartDataBars = [
  ['Meses', 'ikea', 'racc', 'cc', 'audi', 'tork'],
  ['Enero', 1, 5, 3, 3, 1],
  ['Febrero', 2, 15, 6, 3, 2],
  ['Marzo', 2, 8, 9, 2, 3],
  ['Abril', 2, 4, 3, 1, 2]
];

class Graphics extends Component {
  render() {
    return (
      <section className="charts-container">
        {/* {this.props.barsLoading === 'ready' ? ( */}
        <Chart
          chartType="BarChart"
          width={'800px'}
          height={'300px'}
          data={chartDataBars}
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
              }
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
              fontSize: 16,
              fontName: 'Arial',
              bold: true
            }
          }}
        />
        {/* ) : (
          <div>Fetching data from API</div>
        )} */}

        {this.props.pieLoading === 'ready' ? (
          <Chart
            chartType="PieChart"
            width={'800px'}
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
                  color: '#fff',
                  fontSize: 14
                }
              },
              backgroundColor: '#1C1C1C',
              pieSliceBorderColor: '#1C1C1C',
              pieSliceTextStyle: {
                color: '#1C1C1C'
              },
              title: 'Humor de las llamadas',
              titleTextStyle: {
                color: 'white'
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

export default Graphics;
