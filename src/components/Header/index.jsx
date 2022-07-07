import React from "react";
import { Link } from "react-router-dom";

import {AiFillHome} from 'react-icons/ai';

const Header = () => {
  return (
    <nav className="home__nav">
      <Link to={'/'} className="home__nav-item">
        <h4 className="home__nav-item-title">
            <AiFillHome style={{color: 'brown', fontSize: '28px', marginRight: '10px'}}/>
            Home
        </h4>
      </Link>
    </nav>
  );
};

export default Header;
