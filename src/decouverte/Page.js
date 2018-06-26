import React, {Component} from 'react';
import Blockly from '../components/blockly/BlocklyWrapper'
import {decouverte_activities} from './decouverte_activity'
import {BreadcrumbsItem} from "react-breadcrumbs-dynamic";

export default class Page extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    if(this.props.match.params.activity && parseInt(this.props.match.params.activity) <= decouverte_activities.length) {
      this.state = {
        page: parseInt(this.props.match.params.activity),
      };
    }
    else {
      this.state = {
        page: 1,
      };
    }

    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer = () => {
    console.log("CHECK");
    if(decouverte_activities[this.state.page-1].checkAnwser()) {
      this.props.history.push(`/decouverte/page/${this.state.page + 1}`);
      this.setState((state) => ({ page: state.page + 1}))
    }
  };


  render() {
    return(
      <div>

        <Blockly beforeExec={decouverte_activities[this.state.page-1].initAnwser}
                 afterExec={this.checkAnswer}
                 customBlocks={decouverte_activities[this.state.page-1].blocks}
        />
        <BreadcrumbsItem to={`/decouverte/page/${this.state.page}`}>Activité {this.state.page}</BreadcrumbsItem>
      </div>
    )
  }
}