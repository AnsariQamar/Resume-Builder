import React from 'react'
import { Link } from 'react-router-dom';
import style from '../Styles/workDetails.module.css';

export default function EdDetails() {
    const Month=[
        "January","February",
        "March","April",
        "May","June","July","August",
        "September","November","December"
    ]
    const Year=[
        '2022','2021'
    ]
  return (
    <div styles={{width:"100%", height:"100%"}}>
      <div className={style.container}>
        <div className={style.heading}>
          <p className={style.about}>Education</p>
          <p>Start with your most recent educational institution</p>
        </div>
        <div className={style.content}>
          <label>School Name</label>
          <input type='text' placeholder='*Required'/>
        </div>
        <div className={style.content, style.company}>
            <label>City/Town</label>
            <input type='text' placeholder='*Required'/>
        </div>
        <div className={style.content}>
            <label>Country</label>
            <input type='text' placeholder='*Required'/>
        </div>
        <div className={style.content}>
          <label>Degree</label>
          <input type='text' placeholder='*Required'/>
        </div>
        <div className={style.content}>
            <label>Graduation Date</label>
            <div style={{display:'flex'}}>
            <select>
                  <option>Month</option>
                  {
                      [...Month].map(ele=> <option key={ele} value={ele}>{ele}</option>)
                  }
              </select>
              <select>
                  <option>Year</option>
                  {
                      [...Year].map(ele=> <option key={ele-1} value={ele-1}>{ele-1}</option>)
                  }
              </select>
            </div>
        </div>
        <div className={style.content, style.checkBox}>
              <Link to='/'>+ Add description or special awards</Link>
          </div>
        <div>
          <div className={style.content, style.btn}>
            <Link to='/skills'>
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
