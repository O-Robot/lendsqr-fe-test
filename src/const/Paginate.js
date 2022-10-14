import React from 'react'

export const DOTS = "...";
const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const Paginate = () => {
  return (
    <div>
      
    </div>
  )
}

export default Paginate
