import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSummary } from '../actions/actions';
import style from '../Styles/summaryDetails.module.css';

export default function WorkDetails() {
 const dispatch=useDispatch();
 const {ChangeSummary }=useSelector((state)=>state);
 const [form,setForm]=useState(ChangeSummary);
 function handleChange(e){
   setForm(e.target.value);
 }
 function handleClick(){
   dispatch(setSummary(form));
 }
  return (
    <div styles={{width:"100%", height:"100%"}}>
      <div className={style.container}>
        <div className={style.heading}>
          <p className={style.about}>Summary</p>
          <p>Briefly describe the value that you bring through your skills, background and experience.</p>
        </div>
        <div className={style.content}>
          <label>Summary</label>
          <textarea type='text' onChange={handleChange} placeholder=''/>
        </div>
        
       
        <div>
          <div className={style.content, style.btn}>
            <Link to='/final' onClick={handleClick}>
              <button className={style.saveBtn}>SAVE & CONTINUE</button>
            </Link>
          </div>
          <div className={style.back}>
            <Link to='/summary'  className={style.link}>&lt; Back</Link>
          </div>
        </div>
      </div>
    </div>

  )
}
