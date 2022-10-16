import React from "react";
import classnames from "classnames";
import { Paginate } from "../const/Paginate";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
    setPageSize,
  } = props;

  const paginationRange = Paginate({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // if (currentPage === 0 || paginationRange.length < 2) {
  //   return null;
  // }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <>
      <ul
        className={classnames("pagination-container", {
          [className]: className,
        })}
      >
        <span className="show_div">
          Showing {"  "}&nbsp;
          {/* <span className="show_number">
            {currentPage * 10}
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </span> */}
          <select className="pageSelect" onChange={(event) => setPageSize(event.target.value)}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={70}>70</option>
            <option value={totalCount}>{totalCount}</option>
          </select>
          &nbsp; out of {totalCount}{" "}
        </span>

        <div className="flex">
          {/* Left arrow */}
          <li
            className={classnames("pagination-item", {
              disabled: currentPage === 1,
            })}
            onClick={onPrevious}
          >
            <div className="arrow left" />
          </li>
          {paginationRange.map((pageNumber, key) => {
            if (pageNumber === "...") {
              return (
                <li key={key} className="pagination-item dots">
                  &#8230;
                </li>
              );
            }

            return (
              <li
                key={key}
                className={classnames("pagination-item", {
                  selected: pageNumber === currentPage,
                })}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })}
          {/*  Right arrow */}
          <li
            className={classnames("pagination-item", {
              disabled: currentPage === lastPage,
            })}
            onClick={onNext}
          >
            <div className="arrow right" />
          </li>
        </div>
      </ul>
    </>
  );
};

export default Pagination;
