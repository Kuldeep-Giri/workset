import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
    <div className='header'>
    <Navbar/>
    <div className="container-fluid">
    <div className="left">
        <div className="row">
            <div className="col-sm-6">
         
             <h1>
                Create your stunning portfolio
             </h1>

             <p className='pHide'>
             Discover a platform that helps you to create and manage your online presence, with creative and outstanding professional & personal portfolios just like you want
             </p>
          </div>
            </div>
            <div className="col-sm-6 ">
            <div className="right ">
              <div className="row">
                <div className="col-12">
                 <img src="assets/img1.webp" alt=""  className='img-fluid img1'/>
                </div>
              
              </div>

              <div className="row mt-3">
              <div className="col-6">
                 <img src="assets/img2.webp" alt=""  className='img-fluid img2'/>
                </div>
                <div className="col-6">
                 <img src="assets/img3.webp" alt=""  className='img-fluid img3'/>
                </div>
              </div>
            </div>
            </div>
          
        </div>
    </div>
    <p className='pshow'>
             Discover a platform that helps you to create and manage your online presence, with creative and outstanding professional & personal portfolios just like you want
    </p>

    
    </div>

    <div className="container">
   <div className="portfolio_made">
    <p>Portfolio Builder Made For Everyone
So You Keep Growing Faster</p>
   </div>
    </div>
    </>
  )
}

export default Header