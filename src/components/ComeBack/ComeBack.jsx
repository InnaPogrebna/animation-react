import React from 'react';
import { NavLink } from 'react-router-dom';
import './ComeBack.scss';

export default function ComeBack() {
  return (
    <div>
      <NavLink to="/" className="comeBack-link">
        Home page
      </NavLink>
    </div>
  )
}
