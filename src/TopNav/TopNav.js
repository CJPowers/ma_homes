import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as MobileMenu } from 'react-burger-menu'
import {
  TopNavContainer
} from './TopNavStyledComponents';

export default class TopNav extends Component {
  render() {
    return (
      <TopNavContainer>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>

        <MobileMenu
          noOverlay
          disableOverlayClick
          width={ 280 }
          isOpen
        >
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
        </MobileMenu>
      </TopNavContainer>
    )
  }
}
