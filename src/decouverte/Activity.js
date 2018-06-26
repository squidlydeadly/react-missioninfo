import React, {Component} from 'react';
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import Page from "./Page";
import Home from './Home'
import {Route, Switch} from "react-router";
import {activites} from "../homepage/activity_list";

export default class Activity extends Component {
  render() {
    return(
      <div>
        <BreadcrumbsItem to={`/decouverte`}>{activites[0].name}</BreadcrumbsItem>
        <Switch>
          <Route exact path='/decouverte' component={Home}/>
          <Route path='/decouverte/page/:activity' component={Page}/>
        </Switch>
      </div>
    )
  }
}