import React, { useContext, useState } from "react";
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  // for nvmenu toggle
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light color="info" expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white fw-bold text-decoration-none">
          Github fireb App
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white"> 
      {/* conditional randering */}
        {context?.user?.email ? context?.user?.email : ""} 
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav
          className="ml-auto text-white"
          navbar
          style={{ marginLeft: "auto" }}
        >
            {
                context?.user ? ( 
                     <NavItem>
                    <NavLink
                     onClick={
                      ()=>{
                        context.setUser(null)
                      }
                     }
                      className="text-white text-decoration-none fw-bold mx-2"
                    >
                      Logout
                    </NavLink>
                  </NavItem>

                  ) : (

                    <>
          <NavItem>
            <NavLink
              tag={Link}
              to="/signup"
              className="text-white text-decoration-none fw-bold mx-2"
            >
              signup
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/signin"
              className="text-white text-decoration-none fw-bold mx-2"
            >
              signin
            </NavLink>
          </NavItem>
          </>
    )
            }
        
        </Nav>
      </Collapse>
    </Navbar>
   
  );
};

export default Header;
