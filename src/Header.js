import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./components/Header.css";


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md" >
                    <NavbarBrand href="/">LMS</NavbarBrand>
                    <Nav className="Nav" navbar>
                        <NavItem>
                        <Link to="/">Loans</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/api/addCustomer">CreateLoan</Link>
                        </NavItem>
                    </Nav>
                </Navbar>

            </div>
        );

    }

}


export default Header;
