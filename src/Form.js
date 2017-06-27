import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fv_amount1: 0,
      fv_amount2: 0,
      fv_interest_rate1: 0,
      fv_interest_rate2: 0,
      fv_interest_rate3: 0,
      fv_interest_rate4: 0,
      years: 0,
      sip_amount_per_month: 0,
      sip_interest_rate: 0,

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

    var years = this.state.years;

    // Future Value Evaluation
    var future_value_data_array1 = [];
    var future_value_data_array2 = [];
    var future_value_data_array3 = [];
    var future_value_data_array4 = [];

    var principle_amnt1 = this.state.fv_amount1;
    var principle_amnt2 = this.state.fv_amount2;

    var rate1 = this.state.fv_interest_rate1;
    var rate2 = this.state.fv_interest_rate2;
    var rate3 = this.state.fv_interest_rate3;
    var rate4 = this.state.fv_interest_rate4;

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

    //SIP Evaluation
    var sip_amount = 12*(this.state.sip_amount_per_month);
    var sip_return_amount = sip_amount;
    var sip_rate = this.state.sip_interest_rate;

    var sip_returns_arr = [];

    sip_returns_arr.push(sip_amount + sip_amount*(sip_rate/100));

    for(var j=2;j<=years;j++) {
      sip_return_amount = (sip_amount + sip_return_amount) + (sip_amount + sip_return_amount)*(sip_rate/100);
      sip_returns_arr.push(sip_return_amount);
    }

    this.props.setData_chart1(future_value_data_array1, future_value_data_array2);
    this.props.setData_chart2(future_value_data_array3, future_value_data_array4);
    this.props.setData_sip_chart(sip_returns_arr);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Number of Years:
          <input type="text" name='years' onChange={this.handleInputChange} />
        </label>
        <br /><br />
        <hr />

        <label><strong>Future Value Evaluation</strong></label>
        <br /><br />

        <label>
          Amount-1(in Rs.):
          <input type='text' name='fv_amount1' onChange={this.handleInputChange} />
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <label>
          Interest Rate 1:
          <input type="text" name='fv_interest_rate1' onChange={this.handleInputChange} />
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <label>
          Interest Rate 2:
          <input type="text" name='fv_interest_rate2' onChange={this.handleInputChange} />
        </label>
        <br />
        <br />

        <label>
          Amount-2(in Rs.):
          <input type='text' name='fv_amount2' onChange={this.handleInputChange}/>
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <label>
          Interest Rate 3:
          <input type="text" name='fv_interest_rate3' onChange={this.handleInputChange} />
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <label>
          Interest Rate 4:
          <input type="text" name='fv_interest_rate4' onChange={this.handleInputChange} />
        </label>
        <br />
        <br />
        <hr />

        <label><strong>SIP Evaluation</strong></label>
        <br />
        <br />

        <label>
          Monthly Investment Amount (Rs.):
          <input type="text" name='sip_amount_per_month' onChange={this.handleInputChange} />
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <label>
          Expected Annual Returns (%)
          <input type="text" name='sip_interest_rate' onChange={this.handleInputChange} />
        </label>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
