import React, { Component } from 'react';
import Chart from './Chart';
import Form from './Form'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chart_data: []
    }
    this.setData = this.setData.bind(this);
  }

  setData(data) {
    console.log(data);
    this.setState({chart_data: data});
  }

  render() {
    console.log('****',this.state.chart_data);
    return (
      <div>
        <Form setData={this.setData} />
        <Chart data={this.state.chart_data} />
      </div>
    );
  }
}

export default App;
