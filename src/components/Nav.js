import React from "react";
import { useUserContext } from "../context/Context";

const Nav = () => {
   const { showSidebar, setShowSidebar } = useUserContext();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  
  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/assets/logo/Group.svg`}
            alt="lendsqr-logo"
          />
          <div className="search-bar">
            <input type="text" placeholder="Search for anything" />
            <span className="material-symbols-outlined search-icon">
              search
            </span>
          </div>
          <div className="navbar-actions">
            <a href="/#">Docs</a>
            <div className="logged-in-user">
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons/bell.svg`}
                alt="notifications"
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/image.png`}
                className="user-image"
                alt="user-img"
              />
              <p>Adedeji</p>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
          </div>
        </div>
        <div className="navbar-mobile">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}assets/images/image.png`}
            alt="lendsqr-logo"
          />
          <span
            className="material-symbols-outlined"
            onClick={() => toggleSidebar()}
          >
            menu
          </span>
        </div>
      </div>
    </>
  );
};

export default Nav;
