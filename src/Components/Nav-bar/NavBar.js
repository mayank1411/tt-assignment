import React from 'react'
import logo from './logo.jpeg'
import './NavBar.css'
function NavBar() {
  return (
    <div className='nav-bar'>
            <div style={{color:"white",display:'flex',justifyContent:'space-around',marginRight:"30px",padding:"30px",alignItems:"center"}}>
                  <img src={logo} alt='logo' style={{heigh:'120px',width:"120px"}}/>
            </div>
            <button style={{background:"#db973d",height:"45px",borderRadius:"10px",textAlign:'start',marginLeft:'100px',fontWeight:'600'}}>Courses</button>
    </div>
  )
}

export default NavBar;