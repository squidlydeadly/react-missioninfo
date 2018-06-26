import React, {Component} from 'react';
import Blockly from 'node-blockly/browser';
import Fr from 'node-blockly/lib/i18n/fr';
import BlocklyDrawer from 'react-blockly-drawer';
import {Button, Container, Row, Col} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import PropTypes from "prop-types";

Blockly.setLocale(Fr);

export default class BlocklyWrapper extends Component {
  constructor(props) {
    super(props);

    this.runCode = this.runCode.bind(this);
    this.onWorkspaceChange = this.onWorkspaceChange.bind(this);
  }

  runCode() {
    this.props.beforeExec();
    eval(window.codeAnswer);
    this.props.afterExec();
  }

  onWorkspaceChange(code, workspace) {
    //this.setState({codeAnswer: code});
    window.codeAnswer = code;
    window.workspaceAnswer = workspace;
    console.log(code, workspace);
  }

  render() {
    return (
      <div>
        <Container style={{margin: '5px auto'}}>
          <Row>
            <Col><Button block color='success' onClick={this.runCode}>
              <FontAwesome name='rocket'/> Lancer le programme
            </Button></Col>
            <Col><Button block color='info'>
              <FontAwesome name='save'/> Sauvegarder
            </Button></Col>
            <Col><Button block color='danger'>
              <FontAwesome name='eraser'/> Effacer
            </Button></Col>
          </Row>
        </Container>

        <BlocklyDrawer
          className='blockly'
          style={{
            minHeight: 'calc(100vh - 56px - 48px)',
            position: 'relative',
          }}
          tools={this.props.customBlocks}
          onChange={this.onWorkspaceChange}
          injectOptions={{
            zoom: {
              controls: true,
              startScale: 1.0,
              maxScale: 1.0 * (1.0 + (1 / 3)),
              minScale: 1.0 / (1.0 + (1 / 3)),
              scaleSpeed: 1.0 + (1 / 3)
            },
            trashcan: true,
            scrollbars: true
          }}
          workspaceXML={this.props.workspace}
        >
          {this.props.blocks}
        </BlocklyDrawer>
      </div>
    )
  }
}

BlocklyWrapper.defaultProps = {
  blocks: null,
  customBlocks: [],
  beforeExec: () => {
  },
  afterExec: () => {
  },
  workspace: ""
};

BlocklyWrapper.propTypes = {
  blocks: PropTypes.node,
  customBlocks: PropTypes.array,
  beforeExec: PropTypes.func,
  afterExec: PropTypes.func,
  workspace: PropTypes.string
};