import React from 'react'
import { Link } from 'react-router-dom';
import style from '../Styles/home.module.css';

export default function Home() {
  return (
    <div styles={{width:"100%", height:"100%"}}>
      <div className={style.container}>
        <div className={style.heading}>
          <p className={style.about}>Tell us about yourself</p>
          <p>With this info, recruiters will be able to find you</p>
        </div>
        <div className={style.content}>
          <label>Name</label>
          <input type='text' placeholder='*Required'/>
        </div>
        <div className={style.content, style.emails}>
          <div >
            <label>Email</label>
            <input type='text' placeholder='*Required'/>
          </div>
          <div className={style.checkBox}>
            <input id="IsEmailHidden" type="checkbox" name="IsEmailHidden"/>
            <label>Don't show on my resume</label>
          </div>
        </div>
        <div className={style.content}>
          <div>
            <label>Street Address</label>
            <input type='text' placeholder='*Required'/>
          </div>
        </div>
        <div className={style.content}>
          <label>City</label>
          <input type='text' placeholder='*Required'/>
        </div>
        <div className={style.content}>
          <label>Country</label>
          <input type='text' placeholder='*Required'/>
        </div>
        <div className={style.phone }>
          <div>
            <label>Phone Number</label>
            <input type='text' placeholder='*Required'/>
          </div>
          <div>
            <Link to="/" className={style.link}>
              + Add another number
            </Link>
          </div>
        </div>
        <div>
          <div className={style.content, style.btn}>
            <Link to='/work'>
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
