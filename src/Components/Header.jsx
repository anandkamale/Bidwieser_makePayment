import React from "react";
import { NavItem, Nav } from "reactstrap";

const Header = () => {
  return (
    <Nav>
      <NavItem className="home">
        <a href="#">Home</a>><a href="#">Dashboard</a>
      </NavItem>
      <NavItem>
        <div className="section">
          <img
            className="avatar_logo"
            src={"/assets/images/avatar1.png"}
            alt="avatar_img"
          />
          <a href="#">
            {" "}
            <p> John Doe</p>
          </a>
        </div>
      </NavItem>
    </Nav>
  );
};

export default Header;
