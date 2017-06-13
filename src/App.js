import React, { Component } from 'react';
import Chart from './Chart';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart_data: []
    };
    this.setData = this.setData.bind(this);
  }

  setData(data) {
    this.setState({chart_data: data});
  }

  render() {
    return (
      <div>
        <Form setData={this.setData} />
        <Chart uid="chart-1" data={this.state.chart_data} />
      </div>
    );
  }
}

export default App;
