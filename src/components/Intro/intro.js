import React from 'react'
import './style.css';
import Harish from '../../assets/Harish.png'
import { Link } from 'react-scroll';
import Dowloadbtn from '../../assets/Download.svg';

const Intro = () => {
  return (
    <section className ='introSection'>
      <div class="details">
        <span className='hi'>Hi,</span>
        <span className='im'>I'm <span className='ahamed'>Ahamed </span></span><span className='webdev'>Website Developer</span>
        <p className='summary'>An enthusiastic and detail-oriented Full Stack Developer with a solid foundation in web development <br/>technologies and programming languages.</p>
        <Link><button className='btn'><img src={Dowloadbtn} alt='Hire Me' className='dwnlBtn'></img>Resume</button></Link>
      </div>
      <img src={Harish} alt='HarishProfile' className='bgImage'></img>
    </section>
  )
}

export default Intro