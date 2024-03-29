import React from 'react'
import man from '../../image/man.png'
import skills from '../../image/skills.png';
import '../../CSS/ContactUS.css';
import laptop from '../../image/laptop.png';
import mail from '../../image/mail.png';
import specdecoder from '../../image/specdecoder.png'
import degree from '../../image/degree.png';
import awards from '../../image/awards.png';

function Work() {
  return (
    <div className='contact' >
        <div className='man' >
            <img src={man} />
        </div>
        
        <div className='skills' >
            <img src={skills} />
        </div>
        
        <div className='laptop' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" >
            <img src={laptop} />
        </div>
        <div className='degree' style={{position:'absolute'}}>
          <img src={degree} />
        </div>
        
    </div>
  )
}

export default Work