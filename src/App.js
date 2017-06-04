import React, { Component } from 'react';
import Chart from './Chart';

class App extends Component {

  render() {
    return (
      <div>
        <Chart data={[1000, 1100, 1200, 1300, 1500, 2000, 2000, 1500, 1500, 1600]} />
        <Chart data={[1000, 1000, 1200, 1200, 2000, 2000, 1300, 1500, 1500, 1600]} />
      </div>
    );
  }
}

export default App;
