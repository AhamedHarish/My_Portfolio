import React from 'react'
import './style.css';
import Reactlogo from '../../assets/react.svg';
import Html from '../../assets/Html.svg';
import Css from '../../assets/Css.svg';
import Javascript from '../../assets/Js.svg';
import Java from '../../assets/java.svg';
import Mysql from '../../assets/mysql.svg';
import Bootstrap from '../../assets/bootstrap.svg';
import Tailwind from '../../assets/tailwind.svg';


const skills = () => {
  return (
    <section className='skills'>
      <h1 className='skillsTitle'>Skills</h1>
      <div className='fullStack'>
      <div className='frontEnd'>
        <h2 className='frontTitle'>Frontend</h2>
        <ul className='frontList'>
          <li><img src={Html}></img><span>HTML</span></li>
          <li><img src={Css}></img><span>CSS</span></li>
          <li><img src={Javascript}></img><span>JAVASCRIPT</span></li>
          <li><img src={Reactlogo}></img><span>REACT</span></li>
          <li><img src={Bootstrap}></img><span>BOOTSTRAP</span></li>
          <li><img src={Tailwind}></img><span>TAILWIND</span></li>
        </ul>
      </div>
      <div className='backEnd'>
        <h2 className='backTitle'>Backend</h2>
        <ul className='backList'>
          <li><img src={Java}></img><span>JAVA</span></li>
          <li><img src={Mysql}></img><span>MYSQL</span></li>
        </ul>
      </div>
      </div>
    </section>
  )
}

export default skills