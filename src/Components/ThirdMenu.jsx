import React from "react";
import { NavItem } from "reactstrap";
import { MdLiveHelp, MdNotificationsActive } from "react-icons/md";

const ThirdMenu = () => {
  return (
    <>
      <div className="thirdMenu_wrapper">
        <NavItem>
          <img
            className="logo_topp"
            src={"/assets/images/logo_top.svg"}
            alt="logo_top"
          />
        </NavItem>
        <div className="thirdMenu_links">
          <div>
            <a href="#">Dashboard</a>
          </div>
          <div>
            <a href="#">Preferences</a>
          </div>
          <div>
            <a href="#">Watch-list</a>
          </div>
          <div>
            <a href="#">Auction-won</a>
          </div>
        </div>
        <div></div>
        <div className="menu_links d-flex">
          <span className="align-self-center">
            <MdLiveHelp />
          </span>
          <span className="align-self-center">
            <a href="#">Help</a>
          </span>
        </div>

        <div className="menu_links d-flex">
          <span className="align-self-center">
            <a href="#">
              {" "}
              <MdNotificationsActive />
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default ThirdMenu;
