import React, { Component } from 'react';

// stateless functional component - sfc 
// in order to use life cycle hook - only use in class component

const NavBar = ({ totalCounters}) =>{
    console.log('NavBar - Rendered');
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span> 
            </a>
        </nav>
     );

};
// cc - shortcut command
// class NavBar extends Component {
//    render() { 
//     }
// }
 
export default NavBar;
