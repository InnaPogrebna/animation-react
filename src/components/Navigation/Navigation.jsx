import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

export default function Navigation({ screenWidth }) {
  return (
    <>
      {(screenWidth >= 768)
        && (
        <nav className="navbar">
          <NavLink className="navbar-item  navbar-item-right" to="/what">
            WhatPage?
          </NavLink>
          <NavLink className="navbar-item navbar-item-bottom" to="/who">
            WhoPage?
          </NavLink>
          <NavLink className="navbar-item navbar-item-left" to="/where">
            WherePage?
          </NavLink>
        </nav>
      )
    }
    </>
  );
}
