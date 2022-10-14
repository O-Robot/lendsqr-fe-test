import React from "react";

const Filter = () => {
  return (
    <>
      <form className="filter-container">
        <label>Organization</label>
        <select className="default" name="org" id="org">
          <option>Select</option>
        </select>
        <label>Username</label>
        <input placeholder="User" />
        <label>Email</label>
        <input placeholder="Email" />
        <label>Date</label>
        <input />
        <label>Phone Number</label>
        <input placeholder="Phone Number" />
        <label>Status</label>
        <select name="status" id="status">
          <option>Select</option>
        </select>
        <div className="filter-actions">
          <button className="btn btn-outline btn-outline-blue capitalize">
            Reset
          </button>
          <button className="btn btn-outline btn-green capitalize">
            Filter
          </button>
        </div>
      </form>
    </>
  );
};

export default Filter;
