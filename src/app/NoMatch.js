import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Link} from "react-router-dom";

export default class NoMatch extends Component {
  render() {
    return(
      <div className="text-center">
        <h1 style={{fontSize: '64px', marginTop: '10vh', marginBottom: '10vh'}}>
          404 : La page n'existe pas
        </h1>
        <Link to='/'><Button size='lg' color='success'>Retour</Button></Link>
        <p style={{marginTop: '10vh', fontSize: '120px'}}>😕</p>
      </div>
    )
  }
}