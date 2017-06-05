import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      interest_rate: 0,
      years: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleInterestChange = this.handleInterestChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  handleAmountChange(event) {
    this.setState({amount: event.target.value});
  }

  handleInterestChange(event) {
    this.setState({interest_rate: event.target.value});
  }

  handleYearChange(event) {
    this.setState({years: event.target.value});
  }

  handleSubmit(event) {
      var future_value_data_array = [];

      var principle_amnt = this.state.amount;
      var rate = this.state.interest_rate;
      var years = this.state.years;

      for(var i=1; i<=years; i++){
        var pow = Math.pow((1+rate/100), i);
        var future_value = principle_amnt * pow;
        future_value_data_array.push(future_value);
      }

      this.props.setData(future_value_data_array);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Amount:
          <input type="text" ref={this.state.amount} onChange={this.handleAmountChange} />
        </label>
        <label>
          Interest Rate:
          <input type="text" ref={this.state.interest_rate} onChange={this.handleInterestChange} />
        </label>
        <label>
          Number of Years:
          <input type="text" ref={this.state.years} onChange={this.handleYearChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
