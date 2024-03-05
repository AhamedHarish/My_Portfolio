import React from 'react';
import './style.css';
import FrontProject from '../../assets/frontProj.png';
import BackProject from '../../assets/backProj (2).png';
import Github from '../../assets/github.svg';

const Project = () => {
  return (
    <section className='proj'>
      <h1 className='projTitle'>Projects</h1>
      <div className='allProj'>
        <div className='frontProj'>
          <img src={FrontProject} alt='ProjectImg' className='frontProjImg'></img>
          <span className='frontSpan'>React Js</span>
          <h3 className='frontH3'>Portfolio:</h3>
          <p className='frontP'>I have created this Portfolio completely using React Js and used Email js for receiving e-mails.</p>
          <button className='frontBtn'><img src={Github} alt='Github' class='frontGit'></img>Link</button>
        </div>
        <div className='fullProj'>
        <img src={FrontProject} alt='ProjectImg' className='fullProjImg'></img>
          <span className='fullSpan'>React Js</span>
          <h3 className='fullH3'>Portfolio:</h3>
          <p className='fullP'>I have created this Portfolio completely using React Js.</p>
          <button className='fullBtn'><img src={Github} alt='Github' class='fullGit'></img>Link</button>
        </div>
        <div className='backProj'>
        <img src={BackProject} alt='ProjectImg' className='backProjImg'></img>
        <div className='backSpanDiv'>
          <span className='backSpan'>Java</span>
          <span className='backSpan'>MySql</span>
        </div>
          <h3 className='backH3'>Hospital Management System:</h3>
          <p className='backP'>I have created this project using Java, Mysql for database and JDBC for database connectivity. </p>
          <button className='backBtn'><img src={Github} alt='Github' class='backGit'></img>Link</button>
        </div>
      </div>
    </section>
  )
}

export default Project