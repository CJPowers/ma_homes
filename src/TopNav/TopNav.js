import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  TopNavContainer,
  DesktopNav,
  LinkWrapper
} from './TopNavStyledComponents';

export default class TopNav extends Component {
  render() {
    return (
      <TopNavContainer>
        <LinkWrapper>
          <Link to='/'>Home</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to='/about'>About Us</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to='/custom-homes'>Custom Homes</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to='/warranty'>Warranty</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to='/contact'>Contact Us</Link>
        </LinkWrapper>
      </TopNavContainer>
    )
  }
}
