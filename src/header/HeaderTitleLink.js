import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class HeaderTitleLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Link {...this.props} style={{color:'#fff'}}/>
    )
  }
}