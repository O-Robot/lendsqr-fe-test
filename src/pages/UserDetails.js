import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Load from "../components/Load";
import { numberWithCommas } from "../const/utils";
import { useUserContext } from "../context/Context";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);
  const { getUser } = useUserContext();
  let { id } = useParams();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const navigate = useNavigate();

  const tabHeaders = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  useEffect(() => {
    async function fetchData(id) {
      let data = await getUser(id);
      setUser(data);
      setLoader(false);
    }
    fetchData(id);
  }, [id, getUser]);

  return (
    <Layout>
      {loader ? (
        <Load />
      ) : (
        <>
          <p className="back-btn" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">
              <img src={`${process.env.PUBLIC_URL}/assets/icons/back-btn.svg`} alt="back-btn" />
            </span>
            Back to Users
          </p>
          <p className="page-title">User Details</p>
          <div className="user-action-btns">
            <button className="btn btn-outline btn-outline-red">
              Blacklist User
            </button>
            <button className="btn btn-outline btn-outline-green">
              Activate User
            </button>
          </div>

          <div className="user-details">
            <div className="shadow-box">
              <div className="basic-info">
                <div className="flex gap-6 info align-items-center">
                  <img
                    src={user.profile.avatar ?? `${process.env.PUBLIC_URL}/assets/icons/avatar.svg`}
                    alt="avatar"
                  />
                  <div>
                    <p className="user-name">{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</p>
                    <p>lsdjgekh</p>
                  </div>
                </div>
                <hr />
                <div className="info tier">
                  {/* <p className="title">User's Tier</p> */}
                  <img src={`${process.env.PUBLIC_URL}/assets/icons/tier.svg`} alt="tier" />
                </div>
                <hr />
                <div className="info account">
                  <p className="title">
                    ₦{numberWithCommas(user.accountBalance)}
                  </p>
                  <p>{user.accountNumber}/Providus Bank</p>
                </div>
              </div>
              <div className="tab-controls">
                <ul className="tab-list">
                  {tabHeaders.map((header, key) => {
                    return (
                      <li
                        className={`${key === activeTabIndex ? "active" : ""}`}
                        key={key}
                        onClick={() => setActiveTabIndex(key)}
                      >
                        {header}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {activeTabIndex === 0 ? <GeneralInfo user={user} /> : <BlankPage />}
          </div>
        </>
      )}
    </Layout>
  );
};

export default UserDetails;

export const BlankPage = () => {
  return <div className="shadow-box"></div>;
};

const GeneralInfo = ({ user }) => {
  const { profile, education, guarantor, socials } = user;
  return (
    <>
      {user && (
        <div className="tabs shadow-box" id="general">
          <div className="tab-content">
            <p className="section-title">Personal Information</p>
            <div className="section">
              <div className="section-content">
                <p className="label">Full Name</p>
                <p className="value">
                  {`${profile?.firstName} ${profile?.lastName}`}
                </p>
              </div>

              <div className="section-content">
                <p className="label">Phone Number</p>
                <p className="value">{profile.phoneNumber}</p>
              </div>

              <div className="section-content">
                <p className="label">Email Address</p>
                <p className="value">{user.email.toLowerCase()}</p>
              </div>
              <div className="section-content">
                <p className="label">Bvn</p>
                <p className="value">{profile.bvn}</p>
              </div>
              <div className="section-content">
                <p className="label">Gender</p>
                <p className="value">{profile.gender}</p>
              </div>
              <div className="section-content">
                <p className="label">Marital Status</p>
                <p className="value">N/A</p>
              </div>
              <div className="section-content">
                <p className="label">Children</p>
                <p className="value">N/A</p>
              </div>
              <div className="section-content">
                <p className="label">Type of Residence</p>
                <p className="value">N/A</p>
              </div>
            </div>
            <hr />
            <p className="section-title">Education and Employment</p>
            <div className="section">
              <div className="section-content">
                <p className="label">Level of Eductaion</p>
                <p className="value">{education.level}</p>
              </div>

              <div className="section-content">
                <p className="label">Employment Status</p>
                <p className="value">{education.employmentStatus}</p>
              </div>

              <div className="section-content">
                <p className="label">Sector of Employment</p>
                <p className="value">{education.sector}</p>
              </div>
              <div className="section-content">
                <p className="label">Duration of Employment</p>
                <p className="value">{education.duration}</p>
              </div>
              <div className="section-content">
                <p className="label">Official Email</p>
                <p className="value">{education.officeEmail}</p>
              </div>
              <div className="section-content">
                <p className="label">Monthly Income</p>
                <p className="value">{education.monthlyIncome[0]}</p>
              </div>
              <div className="section-content">
                <p className="label">Loan Repayment</p>
                <p className="value">{education.loanRepayment}</p>
              </div>
            </div>
            <hr />
            <p className="section-title">Socials</p>
            <div className="section">
              <div className="section-content">
                <p className="label">Twitter</p>
                <p className="value">{socials.twitter}</p>
              </div>

              <div className="section-content">
                <p className="label">Facebook</p>
                <p className="value">{socials.facebook}</p>
              </div>

              <div className="section-content">
                <p className="label">Instagram</p>
                <p className="value">{socials.instagram}</p>
              </div>
            </div>
            <hr />
            <p className="section-title">Guarantor</p>
            <div className="section">
              <div className="section-content">
                <p className="label">Full Name</p>
                <p className="value">{`${guarantor.firstName} ${guarantor.lastName}`}</p>
              </div>

              <div className="section-content">
                <p className="label">Phone Number</p>
                <p className="value">{guarantor.phoneNumber}</p>
              </div>

              <div className="section-content">
                <p className="label">Email Address</p>
                <p className="value">N/A</p>
              </div>
              <div className="section-content">
                <p className="label">Relationship</p>
                <p className="value">N/A</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
