import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import {Breadcrumbs} from "react-breadcrumbs-dynamic";
import HeaderTitleLink from "./HeaderTitleLink";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" color="dark" dark expand="md">
          <Breadcrumbs
            separator={<b style={{color: '#fff'}}> > </b>}
            item={HeaderTitleLink}
            finalItem={'b'}
            finalProps={{
              style: {color: '#fff'}
            }}/>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to='/diapo'>TEST Diapo</Link>
                  </DropdownItem>
                  <DropdownItem>
                    Option
                  </DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to='/credits' className='nav-link'>Crédits</Link>
              </NavItem>
              <NavItem>
                <Link to='/about' className='nav-link'>Librairies</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}