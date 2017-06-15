import React, { Component } from 'react';
import * as d3 from 'd3';

class Chart extends Component {

  componentDidMount() {
    d3.select(this.node).append('svg').attr('height', 400).attr('width', 440);
    var svg = d3.select(this.node).select('svg');

    svg.append('g')
      .attr('class', 'y-axis')
      .attr('transform', 'translate(50, 50)');
    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(50, 250)');
  }

  componentDidUpdate() {
    this.renderChart(this.props.data1, this.props.data2);
  }

  renderChart(data1, data2) {

      var dataArray1 = data1;
      var dataArray2 = data2;
      var concatDataArray = dataArray1.concat(dataArray2);

      var concatDataArray_min = d3.min(concatDataArray);
      var concatDataArray_max = d3.max(concatDataArray);

      var width = 400;

      var scaleHeight = d3.scaleLinear()
        .domain([concatDataArray_min, concatDataArray_max])
        .range([1, 200]);

      var scaleWidth1 = d3.scaleBand()
        .domain(dataArray1.map(function (d, i) { return i; }))
        .rangeRound([0, width])
        .paddingInner(0.1)
        .paddingOuter(0.5);

      var scaleWidth2 = d3.scaleBand()
        .domain(dataArray2.map(function (d, i) { return i; }))
        .rangeRound([0, width])
        .paddingInner(0.1)
        .paddingOuter(0.5);

      var yAxisScale = d3.scaleLinear()
        .domain([concatDataArray_min, concatDataArray_max])
        .range([200, 0]);

      var xAxisScale = d3.scaleLinear()
        .domain([0, dataArray1.length])
        .range([0, width]);

      var yAxis = d3.axisLeft(yAxisScale);
      var xAxis = d3.axisBottom(xAxisScale).ticks(dataArray1.length);

      const svg = d3.select(this.node).select('svg');

      svg.select('.y-axis').call(yAxis);
      svg.select('.x-axis').call(xAxis);

      const rects1 = svg.selectAll('rect')
        .data(dataArray1, function(d, i) { console.log(`rect1-${i}-${d}`); return `rects1-${i}`; })

      rects1.exit().remove();

      const rects2 = svg.selectAll('rect')
        .data(dataArray2, function(d, i) { console.log(`rect2-${i}-${d}`); return `rects2-${i}`; })

      rects2.exit().remove();

      rects1.enter()
        .append('rect')
          .attr('fill', 'steelblue')
        .merge(rects1)
          .attr('x', function(d, i) { return scaleWidth1(i)+50; })
          .attr('y', function(d) { return (200-scaleHeight(d)+50) })
          .attr('height', function(d) { return scaleHeight(d); })
          .attr('width', function () { return scaleWidth1.bandwidth()/2; });

      rects2.enter()
        .append('rect')
          .attr('fill', 'midnightblue')
        .merge(rects2)
          .attr('x', function(d, i) { return (scaleWidth2(i)+scaleWidth1.bandwidth()/2)+50; })
          .attr('y', function(d) { return (200-scaleHeight(d)+50) })
          .attr('height', function(d) { return scaleHeight(d); })
          .attr('width', function () { return scaleWidth2.bandwidth()/2; });

      console.log('------------------------');

  }

  render() {
    return <div ref={node => this.node = node} className={this.props.uid} ></div>;
  }
}

export default Chart;
