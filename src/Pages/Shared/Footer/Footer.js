import React from 'react';
import { NavLink } from "react-router-dom";
import footImg from '../../../image/profile/sakir.jpg';
const Footer = () => {
  return (
    <div className="py-2">
      <NavLink to="/">
        <img src={footImg} className="rounded-circle img-fluid mb-2 border-1" style={{ width: '40px' }} alt="" />
      </NavLink>
      <p> With <span className="text-danger">❤</span> By  <a href="https://facebook.com/hasanulsakir" rel="noreferrer" target="_blank" className="text-decoration-none  text-color">Hasanul Sakir</a></p>


    </div>
  );
};

export default Footer;