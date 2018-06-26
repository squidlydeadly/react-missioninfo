import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {CardDeck} from 'reactstrap'

export default class CardTableLayout extends Component {
  render() {
    return (
      <div>
        {
          this.props.data.map((row, idx) => {
            return (
              <CardDeck key={idx} style={{margin: '10px'}}>
                {row}
              </CardDeck>
            )
          })
        }
      </div>
    )
  }
}

CardTableLayout.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node))
};