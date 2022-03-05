import React, { Component } from 'react'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <br/>
        <div className='text-center' style={{fontSize:'48px', fontWeight:'600',color:'#ffff', opacity:'0.9'}}>Gadget Badgat(GB) Online Sales Platform<br/></div>
        <br/>
      </div>
      
    )
  }
}

export default Header;