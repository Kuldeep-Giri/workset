import React from 'react'
import { FaAlignRight  } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='container'>
       <div className="navBars">
        <div className="logo">
      <img src="assets/logo.png" alt="" />
        </div>
        <div className="center-item">
            <ul>
                <li>Home</li>
                <li>Templates</li>
                <li>Pricing</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        {/* <div className="right-item">
          <FaAlignRight />
        </div> */}
       </div>
    </nav>
  )
}

export default Navbar