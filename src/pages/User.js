import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Load from "../components/Load";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import { useUserContext } from "../context/Context";

const tablehead = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];

const User = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(true);

  const { users } = useUserContext();

  useEffect(() => {
    setCount(users.length);
    if (users.length > 0) {
      setLoader(false);
    }
  }, [users]);

  const indexOfLastUser = currentPage * pageSize;
  const indexOfFirstUser = indexOfLastUser - pageSize;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const getMoreItemsByOffset = (page) => {
    setCurrentPage(page);
  };
  return (
    <Layout>
      {loader ? (
        <Load />
      ) : (
        <>
          <p className="page-title">Users</p>
          <div className="card-container">
            <Card
              image="./assets/icons/two-figures.svg"
              title="User"
              content="2,457"
            />
            <Card
              image="./assets/icons/active-users.svg"
              title="Active User"
              content="2,457"
            />
            <Card
              image="./assets/icons/users-with-loans.svg"
              title="Users With Loans"
              content="2,457"
            />
            <Card
              image="./assets/icons/users-with-savings.svg"
              title="Users with savings"
              content="2,457"
            />
          </div>
          <div className="table-container">
            <Table headers={tablehead} content={currentUsers} />
          </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={count}
            pageSize={pageSize}
            onPageChange={(page) => getMoreItemsByOffset(page)}
          />
        </>
      )}
    </Layout>
  );
};

export default User;
