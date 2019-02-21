import React, { Component } from 'react';

const customStyle = {
    width: '100px',
    margin: '0 auto',
    padding: '10px',
    align:'centre'
}
class addCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerName: '',
            customerGender: '',
            Amount:'',
            LoanTenure:''
        }
        this.onClickAdd.bind(this);
    }

    onClickAdd = (event) => {
        event.preventDefault();
        const { customerName, customerGender, Amount, LoanTenure } = this.state
        const formValues = {
            name: customerName,
            gender: customerGender,
            amount: Amount,
            loanTenure: LoanTenure
        }

        console.log(formValues)
        fetch('/api/addCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        });
    }

    handleCustomerNameChange = (e) => {
        this.setState({ customerName: e.target.value });
    }

    handleCustomerGenderChange = (e) => {
        this.setState({ customerGender: e.target.value });
    }
    handleCustomerAmountChange = (e) => {
        this.setState({ Amount: e.target.value });
    }
    handleCustomerLoanTenureChange = (e) => {
        this.setState({ LoanTenure: e.target.value });
    }

    render() {
        return (
            <div>
                <form style={customStyle} >
                    <label> Name
                    <input name="customerName" type="text"
                            value={this.state.customerName} onChange={this.handleCustomerNameChange}
                        />
                    </label>
                    <br />
                    <label> Gender <input name="customerGender" type="text"
                        value={this.state.customerGender} onChange={this.handleCustomerGenderChange}
                    />  </label>
                    <br />
                    <label> Amount <input name="customerGender" type="text"
                        value={this.state.Amount} onChange={this.handleCustomerAmountChange}
                    />  </label>
                    <br />
                    <label> LoanTenure<input name="customerGender" type="text"
                        value={this.state.LoanTenure} onChange={this.handleCustomerLoanTenureChange}
                    />  </label>
                    <br />
                    <button type="button" onClick={this.onClickAdd}>Add</button>
                </form>
            </div>
        );
    }
}

export default addCustomer;
