import React, {Component, Fragment} from 'react';
import Chart from 'react-google-charts';

class Graphics extends Component {
    render () {
        return (
            <Fragment>
                {this.state.dataLoadingStatus === 'ready' ? (
                <Chart
                  chartType="PieChart"
                  data={this.state.chartData}
                  options={{
                    slices: [
                      {
                        color: "#58C155"
                      },
                      {
                        color: "#F5C167"
                      },
                      {
                        color: "#EE8268"
                      }
                    ],
                    chartArea: {
                      top: "50",
                      width: "50%",
                      height: "80%",
                      stroke:	"#1C1C1C",
                    },
                    legend: {
                      textStyle: {
                        color: "#fff",
                        fontSize: 14,
                      }
                    },
                    backgroundColor: "#1C1C1C",
                    pieSliceBorderColor: "#1C1C1C",
                    pieSliceTextStyle: {
                      color: "#1C1C1C",
                    },
                    title: 'Humor de las llamadas',
                    titleTextStyle: {
                      color: "white",
                    }
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
              ) : (
                <div>Fetching data from API</div>
              )}
            </Fragment>
           

        )
    }
}

export default Graphics;