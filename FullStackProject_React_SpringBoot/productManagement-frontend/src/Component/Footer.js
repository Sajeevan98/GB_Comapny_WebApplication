import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
        <div className='footer'>
            <br/>
            <div className='text-center' style={{fontSize:'18px', fontStyle:'italic', fontWeight:'400', color:'#ffff', opacity:'0.9' }}>It is only Product-Management Page of GB Company<br/></div>
            <div className='text-center' style={{fontSize:'14px', fontStyle:'italic', fontWeight:'400', color:'#ffff', opacity:'0.9'}}>Develop By @sajee<br/></div>
            <div className='text-center' style={{fontSize:'14px', fontStyle:'italic', fontWeight:'400', color:'#ffff', opacity:'0.9'}}>For Semester Group Project<br/></div>
            <br/>
        </div>
    )
  }
}

export default Footer;