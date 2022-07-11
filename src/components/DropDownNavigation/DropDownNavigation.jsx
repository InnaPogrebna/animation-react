import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './DropDownNavigation.scss'

export default function DropDownNavigation() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
    console.log(show)
  }

  const handleClick = () => {
    setShow(!show)
  }
  
  return (
    <div className="dropdown">
      <div className="dropdown-content" onClick={toggleShow}>
        {show && (
          <div className="dropdown-poppover">
            <div className="dropdown-cover" onClick={toggleShow}>
              <div className="dropdown-wrapper">
                <div className="dropdown-menu">
                  <div className="dropdown-menu-item" onClick={handleClick}>
                    <NavLink to="/animation-react" className="dropdown-menu-item-link">
                      Home
                    </NavLink>
                  </div>
                  <div className="dropdown-menu-item" onClick={handleClick}>
                    <NavLink to="/animation-react/what" className="dropdown-menu-item-link">
                      What
                    </NavLink>
                  </div>
                  <div className="dropdown-menu-item" onClick={handleClick}>
                    <NavLink to="/animation-react/what" className="dropdown-menu-item-link">
                      Who
                    </NavLink>
                  </div>
                  <div className="dropdown-menu-item" onClick={handleClick}>
                    <NavLink to="/animation-react/what" className="dropdown-menu-item-link">
                      Where
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
