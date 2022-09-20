/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

import Search from "./Search";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { logoutUser } from "../redux/actions/login";
import { useNavigate } from "react-router-dom";

const NavbarPage = () => {
  const { loginData, isSession, loader } = useSelector(
    (state) => state.loginData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      className="px-4 py-8"
      fixed="top"
    >
      <Navbar.Brand href="/homepage">Books App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-na" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto align-items-end px-3">
          <Nav.Link href="all-products">All Products</Nav.Link>
          <Nav.Link>New Arrivals</Nav.Link>
          <Nav.Link>Best Sellers</Nav.Link>
          <Nav.Link>Great Discount</Nav.Link>
          <Nav.Link>Featured Authors</Nav.Link>
        </Nav>
        <Nav className="ml-auto align-items-end px-3">
          <Search />
          {isSession ? (
            <Dropdown className="name-navbar">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Hi, {loginData.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {/* <Dropdown.Item href="#/action-1">Your orders</Dropdown.Item> */}
                <Dropdown.Item href="/wishlist">WishList</Dropdown.Item>
                <Dropdown.Item href="/cart">Cart</Dropdown.Item>
                {/* <Dropdown.Item href="#/action-3">Profile</Dropdown.Item> */}
                <Dropdown.Item
                  onClick={() => {
                    dispatch(logoutUser());
                    navigate("/homepage");
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <Nav.Link className="pl-6" href="/login">
                Login
              </Nav.Link>
              <Nav.Link className="pl-4" href="/signup">
                Signup
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarPage;
