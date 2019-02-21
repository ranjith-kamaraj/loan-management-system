import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

import '../index.css';

var divStyle = {
    margin: '8% 10%',
};

class listCustomer extends Component {

    constructor(props){
        super(props);
        this.state = {
            customers:[]
        }
    }

    componentDidMount = () =>{
        this.getEmployeeList();
    }
       
getEmployeeList(){
        fetch('/api')
        .then(res => res.json())
        .then(customers => this.setState({customers })
        )
    
    .catch((err) =>{
        console.log(err);
    })
}


  render() {
const {customers} = this.state;
return (
      <div style={divStyle}>
                <Table striped bordered hover size="md" variant="dark" responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Amount</th>
                            <th>LoanTenure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           customers &&  customers.map((user, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{(i+1)}</td>
                                        <td>{user.name}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.amount}</td>
                                        <td>{user.loanTenure}</td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
      </div>
    )
  }
}

export default listCustomer;
