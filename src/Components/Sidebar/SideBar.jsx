// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SideBar.css';

// function SideBar() {
//   const navigate = useNavigate();

//   return (
//     <div className="sidebar">
//       <div onClick={() => navigate('/moves')} className="menu-item">
//         <div className="empty-div"></div>
//         <i className="fas fa-truck"></i>
//         <span className="text-item">MY MOVES</span>
//       </div>
//       <div onClick={() => navigate('/profile')} className="menu-item">
//         <div className="empty-div"></div>
//         <i className="fas fa-user"></i>
//         <span className="text-item">MY PROFILE</span>
//       </div>
//       <div onClick={() => navigate('/quote')} className="menu-item">
//         <div className="empty-div"></div>
//         <i className="fas fa-file-invoice-dollar"></i>
//         <span className="text-item">GET QUOTE</span>
//       </div>
//       <div onClick={() => navigate('/logout')} className="menu-item">
//         <div className="empty-div"></div>
//         <i className="fas fa-sign-out-alt"></i>
//         <span className="text-item">LOGOUT</span>
//       </div>
//     </div>
//   );
// }

// export default SideBar;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div
        onClick={() => handleNavigation('/moves')}
        className={`menu-item ${location.pathname === '/moves' ? 'active-menu-item' : ''}`}
      >
        <div className={`empty-div ${location.pathname === '/moves' ? 'active' : ''}`}></div>
        <i className="fas fa-truck-arrow-right"></i>
        <span className="text-item">MY MOVES</span>
      </div>
      <div
        onClick={() => handleNavigation('/profile')}
        className={`menu-item ${location.pathname === '/profile' ? 'active-menu-item' : ''}`}
      >
        <div className={`empty-div ${location.pathname === '/profile' ? 'active' : ''}`}></div>
        <i className="fas fa-user"></i>
        <span className="text-item">MY PROFILE</span>
      </div>
      <div
        onClick={() => handleNavigation('/quote')}
        className={`menu-item ${location.pathname === '/quote' ? 'active-menu-item' : ''}`}
      >
        <div className={`empty-div ${location.pathname === '/quote' ? 'active' : ''}`}></div>
        <i className="fas fa-file-invoice-dollar"></i>
        <span className="text-item">GET QUOTE</span>
      </div>
      <div
        onClick={() => handleNavigation('/logout')}
        className={`menu-item ${location.pathname === '/logout' ? 'active-menu-item' : ''}`}
      >
        <div className={`empty-div ${location.pathname === '/logout' ? 'active' : ''}`}></div>
        <i className="fas fa-sign-out-alt"></i>
        <span className="text-item">LOGOUT</span>
      </div>
    </div>
  );
}

export default SideBar;

