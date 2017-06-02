import React, { Component } from 'react';
import * as d3 from 'd3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    this.setState (
      {
        data: [1000, 1100, 1200, 1300, 1500, 2000, 2000, 1500, 1500, 1600]
      }
    )
  }

  componentDidMount() {
    this.renderChart(this.state.data);
  }

  renderChart(data) {
      var dataArray = data;
      var minDataElem = Math.min(...dataArray);
      var maxDataElem = Math.max(...dataArray);

      var width = 400;
      var height = maxDataElem;

      var scaleHeight = d3.scaleLinear()
                          .domain([minDataElem, maxDataElem])
                          .range([1, 200]);

      var scaleWidth = d3.scaleBand()
                          .domain(dataArray.map(function (d, i) { return i; }))
                          .rangeRound([0, width])
                          .paddingInner(0.1)
                          .paddingOuter(0.5);

      var yAxisScale = d3.scaleLinear()
                         .domain([minDataElem, maxDataElem])
                         .range([200, 0]);

      var xAxisScale = d3.scaleLinear()
                         .domain([0, dataArray.length])
                         .range([0, width])

      var yAxis = d3.axisLeft(yAxisScale);
      var xAxis = d3.axisBottom(xAxisScale).ticks(dataArray.length);

      var barCanvas = d3.select(".chart")
                        .append("svg")
                        .attr("width", width + 40)
                        .attr("height", height)
                        .append("g")
                          .attr("transform", "translate(50, 50)");

      barCanvas.call(yAxis);

      barCanvas.append("g")
                  .attr("transform", "translate(0, 200)")
                .call(xAxis);

      barCanvas.selectAll("rect")
               .data(dataArray, function(d, i) { console.log('' + i + '-' + d); return '' + i + '-' + d; })
               .enter()
                  .append("rect")
                  .attr("height", function(d) { return scaleHeight(d); })
                  .attr("width", function () { console.log(scaleWidth.bandwidth()); return scaleWidth.bandwidth(); })
                  .attr("fill", "steelblue")
                  .attr("x", function(d, i) { return scaleWidth(i); })
                  .attr("y", function(d) { return (200-scaleHeight(d)) });
  }

  render() {
    return <div className="chart" id="chart"></div>;
  }
}

export default App;
