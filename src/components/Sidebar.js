import React from "react";
import { useUserContext } from "../context/Context";
import { Link, useLocation } from "react-router-dom"


const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useUserContext();

  const isActive = useLocation().pathname;
  return (
    <>
      <div className={showSidebar ? `sidebar` : `sidebar show`}>
        <div className="sidebar-content">
          <Link to="#" className="list-item org">
            <div>
              <img src="./assets/icons/briefcase.svg" alt="briefcase-icon" />
            </div>
            <div className="flex">
              Switch Organization
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="/dashboard"
            className={
              isActive.includes("/dashboard") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/home.svg" alt="home" />
            Dashboard
          </Link>
          <br />
          <p className="subhead">Customers</p>
          <Link
            onClick={() => setShowSidebar(true)}
            to="/users"
            className={
              isActive.includes("/users") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/user-friends.svg" alt="users" />
            Users
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/users.svg" alt="users" />
            Guarantors
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/sack.svg" alt="loans" />
            Loans
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/handshake-regular.svg" alt="models" />
            Decision Models
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/piggy-bank.svg" alt="savings" />
            Savings
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/hand-holding.svg" alt="requests" />
            Loan Requests
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/user-check.svg" alt="whitelist" />
            Whitelist
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/user-times.svg" alt="karma" />
            Karma
          </Link>
          <p className="subhead mt-6">BUSINESSES</p>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/briefcase.svg" alt="briefcase-icon" />
            Organization
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/sack.svg" alt="products" />
            Loan Products
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/group.svg" alt="savings-product" />
            Savings Products
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/coins-solid.svg" alt="fees" />
            Fees and Charges
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/icon.svg" alt="transaction" />
            Transaction
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/galaxy.svg" alt="services" />
            Services
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/user-cog.svg" alt="account" />
            Service Account
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/scroll.svg" alt="settlement" />
            Settlements
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/chart-bar.svg" alt="reports" />
            Reports
          </Link>
          <p className="subhead mt-6">Settings</p>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/sliders-h.svg" alt="preference" />
            Preference
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/hi") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/badge-percent.svg" alt="pricing" />
            Fees and Pricing
          </Link>
          <Link
            onClick={() => setShowSidebar(true)}
            to="#"
            className={
              isActive.includes("/dashboard") ? "list-item active" : "list-item"
            }
          >
            <img src="./assets/icons/clipboard-list.svg" alt="alt-logs" />
            Audit Logs
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
