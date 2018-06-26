import React, {Component} from 'react';
import {CardDeck, Jumbotron} from 'reactstrap';
import CardTableLayout from '../components/card/CardTableLayout';
import CardWrapper from '../components/card/CardWrapper'
import {list2Matrix} from '../utils/ArrayUtils'
import {activites} from './activity_list'
import bgImg from '../assets/img/fond_accueil.png'

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    let data = activites.map((elem, idx) => (
        <CardWrapper key={idx} id={elem.id} title={elem.name} desc={elem.desc} color="warning"/>
      )
    );

    this.state.list = list2Matrix(data, 3)
  }

  render() {
    return (
      <div>
        <Jumbotron className="text-center" style={{backgroundImage: `url(${bgImg})`, backgroundSize: "cover"}}>
          <div style={{
            color: "white",
            textShadow: "3px 3px 6px #333, -3px -3px 6px #333, -3px 3px 6px #333, 3px -3px 6px #333"
          }}>
            <h1 style={{fontSize: '64px'}}>Bienvenue</h1>
            <p style={{fontSize: '20px'}}>Je m'appelle Robotino, je serai ton guide
              pour partir à la découverte de l'île et de tous ses secrets</p>
          </div>
        </Jumbotron>
        <CardDeck style={{margin: '10px'}}>
          <CardWrapper
            id="intro"
            title="Introduction"
            desc="Viens découvrir comment tu as atterri sur cette ile éloignée."
            color="warning"
          />
        </CardDeck>
        <CardTableLayout data={this.state.list}/>
      </div>

    )
  }
}