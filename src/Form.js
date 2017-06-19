import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount1: 0,
      amount2: 0,
      interest_rate1: 0,
      interest_rate2: 0,
      interest_rate3: 0,
      interest_rate4: 0,
      years: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var future_value_data_array1 = [];
    var future_value_data_array2 = [];
    var future_value_data_array3 = [];
    var future_value_data_array4 = [];

    var principle_amnt1 = this.state.amount1;
    var principle_amnt2 = this.state.amount2;

    var rate1 = this.state.interest_rate1;
    var rate2 = this.state.interest_rate2;
    var rate3 = this.state.interest_rate3;
    var rate4 = this.state.interest_rate4;
    var years = this.state.years;

    for(var i=1; i<=years; i++){
      var pow1 = Math.pow((1+rate1/100), i);
      var pow2 = Math.pow((1+rate2/100), i);
      var pow3 = Math.pow((1+rate3/100), i);
      var pow4 = Math.pow((1+rate4/100), i);

      var future_value1 = principle_amnt1 * pow1;
      var future_value2 = principle_amnt1 * pow2;

      var future_value3 = principle_amnt2 * pow3;
      var future_value4 = principle_amnt2 * pow4;

      future_value_data_array1.push(future_value1);
      future_value_data_array2.push(future_value2);
      future_value_data_array3.push(future_value3);
      future_value_data_array4.push(future_value4);

    }

    this.props.setData_chart1(future_value_data_array1, future_value_data_array2);
    this.props.setData_chart2(future_value_data_array3, future_value_data_array4);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Number of Years:
        <input type="text" name='years' onChange={this.handleInputChange} />
      </label>
      <br /><br />
        <label>
          Amount-1(in Rs.):
          <input type='text' name='amount1' onChange={this.handleInputChange} />
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <label>
          Interest Rate 1:
          <input type="text" name='interest_rate1' onChange={this.handleInputChange} />
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <label>
          Interest Rate 2:
          <input type="text" name='interest_rate2' onChange={this.handleInputChange} />
        </label>
        <br />
        <br />

        <label>
          Amount-2(in Rs.):
          <input type='text' name='amount2' onChange={this.handleInputChange}/>
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <label>
          Interest Rate 3:
          <input type="text" name='interest_rate3' onChange={this.handleInputChange} />
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <label>
          Interest Rate 4:
          <input type="text" name='interest_rate4' onChange={this.handleInputChange} />
        </label>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
