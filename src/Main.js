import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import  listCustomer from './components/listCustomer';
import  addCustomer from './components/addCustomer';


class Main extends Component {
  render() {
    return (
          <div>
        <Switch>
            <Route exact path='/' component = {listCustomer} />
            <Route exact path="/api/addCustomer" component = {addCustomer} />
        </Switch>
      </div>
   
    )
  }
}

export default Main;
