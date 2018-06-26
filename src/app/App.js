import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from '../header/Header'
import Main from './Main'
import {BreadcrumbsProvider} from "react-breadcrumbs-dynamic";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BreadcrumbsProvider>
        <div>
          <Header/>
          <div style={{height: '56px'}}/>
          <Main/>
        </div>
        </BreadcrumbsProvider>
      </BrowserRouter>
    );
  }
}

export default App;
