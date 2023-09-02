import React from 'react';

const Navbar = (props) => {
  return (
    <>
      <nav>
        <div><h1>{props.logoName}</h1></div>
        <ul>
            <li><button id='user' onClick={props.toggle} >Get Users</button></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
