import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../public/otis_logo.svg';
import { nav } from '../data/data';
import './header.css';

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className="container flexContainer">
          <div className="logo">
            <img src={logoImage} alt="logo" />
          </div>
          <div className="nav flex">
            <ul className={navList ? 'small' : 'flex'}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <h4>
              <span className="lng">EN</span>
            </h4>
            <button className="btn1">Želim da postanem volonter</button>
          </div>
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
