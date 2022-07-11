import React from 'react';
import Header from '../components/Header/Header';
import ComeBack from '../components/ComeBack/ComeBack';
import '../pages/HomePage/HomePage.scss';
import TransitionRight from '../Transition/TransitionRight';

function WhatPage() {
  return (
    <div className="home-page page">
      <Header />
      <p className="page__title">WhatPage</p>
      <div className="page__link">
        <ComeBack />
      </div>
    </div>
  )
}

export default TransitionRight(WhatPage);