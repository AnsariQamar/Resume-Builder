import React from 'react'
import { Link } from 'react-router-dom';
import style from '../Styles/summaryDetails.module.css';

export default function WorkDetails() {
 
  return (
    <div styles={{width:"100%", height:"100%"}}>
      <div className={style.container}>
        <div className={style.heading}>
          <p className={style.about}>Summary</p>
          <p>Briefly describe the value that you bring through your skills, background and experience.</p>
        </div>
        <div className={style.content}>
          <label>Summary</label>
          <textarea type='text' placeholder=''/>
        </div>
        
       
        <div>
          <div className={style.content, style.btn}>
            <Link to='/final'>
              <button className={style.saveBtn}>SAVE & CONTINUE</button>
            </Link>
          </div>
          <div className={style.back}>
            <Link to='/'  className={style.link}>&lt; Back</Link>
          </div>
        </div>
      </div>
    </div>

  )
}
