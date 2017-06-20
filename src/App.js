import React, { Component } from 'react';
import Chart from './Chart';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart_data1: [],
      chart_data2: [],
      chart_data3: [],
      chart_data4: [],
    };
    this.setData_chart1 = this.setData_chart1.bind(this);
    this.setData_chart2 = this.setData_chart2.bind(this);
  }

  setData_chart1(data1, data2) {
    this.setState({chart_data1: data1, chart_data2: data2});
  }

  setData_chart2(data3, data4) {
    this.setState({chart_data3: data3, chart_data4: data4});
  }

  render() {
    var chart1;
    var chart2;

    if(this.state.chart_data1[0] !== 0){
      chart1 = <Chart uid="chart-1" data1={this.state.chart_data1} data2={this.state.chart_data2} />
    }

    if(this.state.chart_data3[0] !== 0){
      chart2 = <Chart uid="chart-2" data1={this.state.chart_data3} data2={this.state.chart_data4} />
    }

    return (
      <div>
        <Form setData_chart1={this.setData_chart1} setData_chart2={this.setData_chart2} />
        {chart1}
        {chart2}
      </div>
    );
  }
}

export default App;
