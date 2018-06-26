import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Link} from "react-router-dom";
import {activites} from '../homepage/activity_list'

export default class Home extends Component {
  render() {
    return(
      <div className="text-center">
        <h1 style={{fontSize: '64px', marginTop: '15vh', marginBottom: '10vh'}}>
          Activité : {activites[0].name}
        </h1>
        <Link to='/decouverte/page/1'><Button size='lg' color='success'>C'est parti</Button></Link>
        <p style={{marginTop: '10vh', fontSize: '24px'}}>{activites[0].desc}</p>
      </div>
    )
  }
}