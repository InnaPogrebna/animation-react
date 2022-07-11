import React from 'react';
import ComeBack from '../components/ComeBack/ComeBack';
import Header from '../components/Header/Header';
import './Page.scss';
import Transition from '../Transition/Transition';

function WherePage() {
  return (
    <div className="home-page page">
      <Header />
      <p className="page__title">WherePage</p>
      <div className="page__link">
        <ComeBack />
      </div>
    </div>
  )
}

export default Transition(WherePage);
