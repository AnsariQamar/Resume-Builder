import React from 'react'
import { Link } from 'react-router-dom';
import style from '../Styles/workDetails.module.css';

export default function SkillsDetails() {
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
          <p className={style.about}>Skills</p>
          <p>Add a few skills to show employers what you're good at.</p>
        </div>
        <div className={style.content}>
          <label>Job Title</label>
          <input type='text' placeholder='*Required'/>
        </div>
        <div className={style.content, style.company}>
            <label>Company</label>
            <input type='text' placeholder='*Required'/>
        </div>
        <div className={style.content}>
            <label>City/Town</label>
            <input type='text' placeholder='*Required'/>
        </div>
        <div className={style.content}>
          <label>Country</label>
          <input type='text' placeholder='*Required'/>
        </div>
        <div className={style.content}>
            <label>Start Date</label>
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
        <div className={style.content }>
          <label>End Date</label>
          <div style={{display:'flex' , justifyContent:'space-evenly'}}>
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
              <input type='checkbox'/>
              <label>Currently Work Here</label>
          </div>
        <div>
          <div className={style.content, style.btn}>
            <Link to='/education'>
              <button className={style.saveBtn}>ENTER JOB DESCRIPTION</button>
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
