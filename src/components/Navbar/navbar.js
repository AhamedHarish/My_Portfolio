import './styles.css';
import {Link} from "react-scroll";
import logo from '../../assets/logo.jpg';
import message from '../../assets/message.svg';
import Menu from '../../assets/menu.svg';
import { useState } from 'react';

const Navbar = () => {
  const[menu,setMenu]=useState(false);
  return (
    <nav className='navbaritems'>
      <img src={logo} className='logo' alt='logo' />
     <div className='navmenu'  >
       <Link activeClass="active" to="introSection" spy={true} smooth={true} offset={-100} duration={10} className='navmenuitems'>Home</Link>
       <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={10} className='navmenuitems'>Skills</Link>
       <Link activeClass="active" to="proj" spy={true} smooth={true} offset={-50} duration={10} className='navmenuitems'>Projects</Link>
       <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={10} className='navmenuitems'>Education</Link>
     </div>

     <Link activeClass="active" to="reachMe" spy={true} smooth={true} offset={-30} duration={10}>
     <button className='navbtn'> 
      <img src={message} alt='contact me' className='contactme'></img><span>Contact Me</span>
     </button>
     </Link>
    {/* Mobile Menu */}
    <img src={Menu} className='mobMenulogo' alt='Menu' onClick={()=>setMenu(!menu)}></img>
     <div className='mobmenu' style = {{display: menu? 'flex':'none'}}>
       <Link activeClass="active" to="introSection" spy={true} smooth={true} offset={-100} duration={10} className='mobmenuitems mobhome' onClick={()=>setMenu(false)}>Home</Link>
       <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={10} className='mobmenuitems mobskills' onClick={()=>setMenu(false)}>Skills</Link>
       <Link activeClass="active" to="proj" spy={true} smooth={true} offset={-50} duration={10} className='mobmenuitems mobprojects' onClick={()=>setMenu(false)}>Projects</Link>
       <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={10} className='mobmenuitems mobeducation' onClick={()=>setMenu(false)}>Education</Link>
       <Link activeClass="active" to="reachMe" spy={true} smooth={true} offset={-50} duration={10} className='mobmenuitems mobcontact' onClick={()=>setMenu(false)}>Contact</Link>
     </div>
    </nav>
  )
}

export default Navbar