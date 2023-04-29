import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Container>
        <div className="text-center">
          <div className="mt-5 mb-2">
            <img src={logo} alt="" />
          </div>
          <p className="text-secondary fs-5">
            Journalism Without Fear or Favour
          </p>
          <p className="text-dark fw-semibold fs-5">
            {moment().format("dddd MMMM D, YYYY")}
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center bg-secondary">
          <Button variant="danger" className="fs-4">
            CURRENT
          </Button>
          <Marquee className="text-white fs-5">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
        <Navbar bg="light" expand="lg">
          <Container className="fs-5">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home">
                  <Link to={"/"}>Home</Link>
                </Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#career">Career</Nav.Link>
              </Nav>
              <Nav className="d-flex align-items-center">
                <Nav.Link>
                  {user && (
                    <FaUserCircle style={{ fontSize: "3rem" }}></FaUserCircle>
                  )}
                </Nav.Link>
                {user ? (
                  <Button className="fs-5" variant="dark">
                    Logout
                  </Button>
                ) : (
                  <Link to={'/login'}>
                    <Button className="fs-5" variant="dark">
                      Login
                    </Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
