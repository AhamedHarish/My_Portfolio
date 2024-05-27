import React from 'react';
import './style.css';
import FrontProject from '../../assets/frontProj.png';
import BackProject from '../../assets/backProj (2).png';
import FullProject from '../../assets/fullProj.png';
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
          <p className='frontP'>It is my Portfolio project which i have created using simple React Js and used Email Js for receiving e-mails.</p>
          <a className='frontBtn' href="" ><img src={Github} alt='Github' className='frontGit'></img>Link</a>
        </div>
        <div className='fullProj'>
        <img src={FullProject} alt='ProjectImg' className='fullProjImg'></img>
        <div className='backSpanDiv'>
        <span className='fullSpan'>React Js</span>
        <span className='fullSpan'>Java</span>
        <span className='fullSpan'>MySql</span>
        </div>
          <h3 className='fullH3'>MoBuy:</h3>
          <p className='fullP'>It is a Product Management project which can do CRUD operation.</p>
          <a className='fullBtn' href='https://github.com/AhamedHarish/MoBuy_Product-Management-System' target='_blank'><img src={Github} alt='Github' className='fullGit'></img>Link</a>
        </div>
        <div className='backProj'>
        <img src={BackProject} alt='ProjectImg' className='backProjImg'></img>
        <div className='backSpanDiv'>
          <span className='backSpan'>Java</span>
          <span className='backSpan'>MySql</span>
        </div>
          <h3 className='backH3'>Hospital Management System:</h3>
          <p className='backP'>It is a hospital management project which manages doctor,patient and appointments.</p>
          <a className='backBtn' href='https://github.com/AhamedHarish/Hospital-Management-System' target='_blank'><img src={Github} alt='Github' className='backGit'></img>Link</a>
        </div>
      </div>
    </section>
  )
}

export default Project