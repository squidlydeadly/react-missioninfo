import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import Homepage from '../homepage';
import NoMatch from './NoMatch';
import Decouverte from '../decouverte/'
import TestDiapo from "../homepage/TestDiapo";

export default class Main extends Component {
  render() {
    return (
      <div>
        <BreadcrumbsItem to='/'>Mission Info</BreadcrumbsItem>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/decouverte' component={Decouverte}/>
          <Route path='/diapo' component={TestDiapo}/>
          <Route path='*' component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}