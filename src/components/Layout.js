import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar';

const Layout = ({children}) => {
  return (
    <>
    <Nav>
        <div className="main-page">
            <Sidebar />
            <div className='main-container'>{children}</div>
        </div>
    </Nav>
    </>
  )
}

export default Layout
