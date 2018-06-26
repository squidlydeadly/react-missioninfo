import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Card, CardText, CardBody, CardTitle, CardFooter, Button} from 'reactstrap'
import PropTypes from "prop-types";

export default class CardWrapper extends Component {
  render() {
    return (
      <Card className="text-center" outline color={this.props.color}>
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
          <CardText>
            {this.props.desc}
          </CardText>
        </CardBody>
        <CardFooter>
          <Link to={this.props.id}><Button block color={this.props.color}>C'est parti</Button></Link>
        </CardFooter>
      </Card>
    )
  }
}

CardWrapper.defaultProps = {
  id: "/",
  title: "Titre",
  desc: "C'est une description !!!",
  color: "secondary"
};

CardWrapper.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  color: PropTypes.string,
};