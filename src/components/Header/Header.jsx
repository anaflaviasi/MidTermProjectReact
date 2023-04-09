import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import './Header.css';
import { FcAlphabeticalSortingAz } from "react-icons/fc";
import { FcSearch, FcTodoList } from "react-icons/fc";



function NavBarHeader(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar  
      className="my-2" 
      color="primary" 
       dark="true"
       expand="sm"
       container="lg" 
       fixed="top"
      {...args}>
        <NavbarBrand href="/MidTermProjectReact"> <FcAlphabeticalSortingAz /> The Urban Dictionary</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/MidTermProjectReact">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/MidTermProjectReact/dictionary"><FcSearch />Dictionary</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/mylist"><FcTodoList />My List</NavLink>
            </NavItem> */}
          </Nav>
          {/* <div className="login-info">
            <NavbarText>
              <NavLink className="login" href="#login">Log in</NavLink>
            </NavbarText>  
            <NavbarText>
              <NavLink className="signup" href="#signup">Sign up</NavLink>
            </NavbarText>
          </div> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarHeader;


