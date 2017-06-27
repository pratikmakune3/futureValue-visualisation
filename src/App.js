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
      chart_sip_data: []
    };
    this.setData_chart1 = this.setData_chart1.bind(this);
    this.setData_chart2 = this.setData_chart2.bind(this);
    this.setData_sip_chart = this.setData_sip_chart.bind(this);
  }

  setData_chart1(data1, data2) {
    this.setState({chart_data1: data1, chart_data2: data2});
  }

  setData_chart2(data3, data4) {
    this.setState({chart_data3: data3, chart_data4: data4});
  }

  setData_sip_chart(sip_data) {
    this.setState({ chart_sip_data: sip_data});
  }

  render() {
    var chart1;
    var chart2;
    var chart3;

    if(this.state.chart_data1[0] !== 0){
      chart1 = <Chart uid="chart-1" data1={this.state.chart_data1} data2={this.state.chart_data2} />;
    }

    if(this.state.chart_data3[0] !== 0){
      chart2 = <Chart uid="chart-2" data1={this.state.chart_data3} data2={this.state.chart_data4} />;
    }

    if(this.state.chart_sip_data[0] !== 0){
      chart3 = <Chart uid="chart-3" sip_data={this.state.chart_sip_data} />;
    }

    return (
      <div>
        <Form setData_chart1={this.setData_chart1} setData_chart2={this.setData_chart2}
          setData_sip_chart={this.setData_sip_chart} />
        {chart1}
        {chart2}
        {chart3}
      </div>
    );
  }
}

export default App;
