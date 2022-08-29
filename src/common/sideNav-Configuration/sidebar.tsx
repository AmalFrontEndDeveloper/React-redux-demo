import React from 'react';
import { useState } from 'react';
import Logo from "../../assets/images/logo.png";
import "primereact/resources/themes/lara-dark-indigo/theme.css";  //theme
import { NavLink } from 'react-router-dom';
// if(visibleLeft){
//     import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
// } else{
//     import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
// }
// class SideBar extends React.Component<any, any> {
export default function SideBar() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
        //  document.getElementById('sidebar')?.classList.toggle('close');
        // sideBar?.classList.toggle('close');
    }
    const toggleSwitch = () => {
        // var body = document.querySelector('body');
        // body?.classList.toggle('dark');
    }

    // render() {
    return (
        <>

            <nav className={ isActive ? 'close sidebar' : 'sidebar' } id="sidebar" >
                {/* <nav className="sidebar close" id="sidebar" > */}
                <header>
                    <div className="image-text">
                        <span className="image">
                            {/* <img src={Logo} alt="" /> */}
                            AR
                        </span>

                        <div className="text logo-text">
                            <span className="name">Demo App</span>
                            <span className="profession">Tag of App</span>
                        </div>
                    </div>

                    <i className='bx bx-chevron-right toggle' id='toogleBtn' onClick={handleClick}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">

                        {/* <li className="search-box">
                            <i className='bx bx-search icon'></i>
                            <input type="text" placeholder="Search..." />
                        </li> */}

                        <ul className="menu-links">
                            <li className="nav-link">
                                <NavLink to="">
                                    <i className="pi pi-desktop"></i>
                                    <span className="text nav-text">Dashboard</span>
                                </NavLink>
                            </li>

                            <li className="nav-link">
                                <NavLink to='/userDetails'>
                                    <i className="pi pi-users"></i>
                                    <span className="text nav-text">User Details</span>
                                </NavLink>
                            </li>

                            {/* <li className="nav-link">
                                <NavLink to="/miscellaneous">
                                    <i className="pi pi-users"></i>
                                    <span className="text nav-text">Miscellaneous</span>
                                </NavLink>
                            </li>

                            <li className="nav-link">
                                <NavLink to="/proposal">
                                    <i className="pi pi-info-circle"></i>
                                    <span className="text nav-text">Proposal Info</span>
                                </NavLink>
                            </li> */}

                            {/* <li className="nav-link">
                                <NavLink to="/customer">
                                    <i className="pi pi-user"></i>
                                    <span className="text nav-text">Customer</span>
                                </NavLink>
                            </li> */}

                            {/* <li className="nav-link">
                                <NavLink to="/customer">
                                    <i className="pi pi-thumbs-up"></i>
                                    <span className="text nav-text">Likes</span>
                                </NavLink>
                            </li>

                            <li className="nav-link">
                                <NavLink to="/customer">
                                    <i className="pi pi-wallet"></i>
                                    <span className="text nav-text">Wallets</span>
                                </NavLink>
                            </li> */}

                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li className="">
                            <NavLink to="/userDetails">
                                <i className='bx bx-log-out icon' ></i>
                                <span className="text nav-text">Logout</span>
                            </NavLink>
                        </li>

                        {/* <li className="mode">
                            <div className="sun-moon">
                                <i className='bx bx-moon icon moon'></i>
                                <i className='bx bx-sun icon sun'></i>
                            </div>
                            <span className="mode-text text">Dark mode</span>

                            <div className="toggle-switch" id="toggleSwitch" onClick={toggleSwitch}>
                                <span className="switch"></span>
                            </div>
                        </li> */}

                    </div>
                </div>

            </nav>

        </>
    )
    // }
}

// export default SideBar;