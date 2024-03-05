import React from 'react'
import './style.css';

const Education = () => {
  return (
    <section className='education'>
    <div>
    <h1 className='eduTitle'>Education</h1>
    <div className='eduDetails'>
        <div className='clg'>
            <h3>Bachelor of Commerce (B.Com)</h3>
            <h4>Sadakathullah Appa College,Tirunelveli</h4>
            <span>2018 - 2021</span>
        </div>
        <div className='hsc'>
            <h3>Higher Secondary School Certificate</h3>
            <h4>Magdalene Matriculation Higher Secondary School</h4>
            <span>2018</span>
        </div>
        <div className='sslc'>
            <h3>Secondary School Leaving Certificate</h3>
            <h4>Magdalene Matriculation Higher Secondary School</h4>
            <span>2016</span>
        </div>  
    </div>  
    </div>
    </section>
  )
}

export default Education