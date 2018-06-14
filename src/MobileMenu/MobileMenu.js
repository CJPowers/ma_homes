import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import './MobileMenu.css';

export default class MobileMenu extends Component {
  state = {
    mobileMenuOpen: false
  }

  openMobileMenu = () => {
    this.setState({ mobileMenuOpen: true });
  }

  openMobileMenu = () => {
    this.setState({ mobileMenuOpen: false });
  }

  render() {
    const { mobileMenuOpen } = this.state;

    return (
        <Menu
          noOverlay
          width={ 280 }
          isOpen={mobileMenuOpen}
        >
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/custom-homes'>Custom Homes</Link>
          <Link to='/warranty'>Warranty</Link>
          <Link to='/contact'>Contact Us</Link>
        </Menu>
    )
  }
}
