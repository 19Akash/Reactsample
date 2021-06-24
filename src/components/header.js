import React from 'react';
import '../App.css'


function Header()
{
    return(
      <div className="header">
          <div>
              <button className="buttonstyle1"><span className="textstyle">Apply for ID</span></button>
              <button className="buttonstyle2"><span className="textstyle">Launch App</span></button>
          </div>
          <div className="logo"></div>
          <div>
              <div className="hamburger1"></div>
              <div className="hamburger2"></div>
              <div className="hamburger3"></div>
          </div>
      </div>
    );
}
export default Header;