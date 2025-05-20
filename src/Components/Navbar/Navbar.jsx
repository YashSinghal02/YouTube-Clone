import React from 'react'
import './Navbar.css'
import Youtube_logo from '../../assets/Youtube-logos.png'

import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import searchicon from '../../assets/search.png'
import uploadicon from '../../assets/upload.png'
import moreicon from '../../assets/more.png'
import notoficatioicon from '../../assets/notification.png'
import profileicon from '../../assets/jack.png'
import { Link } from 'react-router-dom'


const Navbar = ({setSidebar}) => {
  return (
    <div>

<nav className='flex-div'>
<div className='nav-left flex-div'>
    <img className='menu-icon' onClick={()=> setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
    {/* <img className='menu-icon' onClick={() => setSidebar(prev => !prev)} src={menu_icon} alt="" /> */}
<Link to='/'><img className='logo' src={Youtube_logo} alt="" width="20px" height={"70px"} /></Link>
    
</div>

<div className="nav-middle flex-div">
    <div className="search-box flex-div">
    <input type="text" name="" id="" placeholder='Search' />
    <img src={searchicon} alt="" />
    </div>
  
</div>

<div className="nav-right flex-div">
    <img src={uploadicon} alt="" />
    <img src={moreicon} alt="" />
    <img src={notoficatioicon} alt="" />
    <img src={profileicon} className='user-icon' alt="" />
</div>


</nav>


    </div>
  )
}

export default Navbar