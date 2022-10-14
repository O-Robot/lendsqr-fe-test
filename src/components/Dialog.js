import React from 'react'

const Dialog = ({ children, open, handleClick, button }) => {
     const menuBtn = button ?? <button onClick={handleClick}>click</button>;
  return (
    <div
      onClick={(e) => {
        // do not close modal if modal content is clicked
        e.stopPropagation();
      }}
    >
      {menuBtn}
      {open && <div className="dialog">{children}</div>}
    </div>
  );
}

export default Dialog
