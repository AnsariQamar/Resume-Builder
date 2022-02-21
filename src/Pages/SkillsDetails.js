import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from '../Styles/skillsDetails.module.css';
import ChangeSkills from '../reducers/skillreducer';
import { useSelector } from 'react-redux';
import { setSkills } from '../actions/actions';


export default function SkillsDetails() {
  const {ChangeSkills}=useSelector((state)=>state);
  const dispatch=useDispatch();
  const [form,setform]=useState(ChangeSkills);

  function handleChange(e){
    const {value}=e.target;
    // console.log(value);
    if(value!==''){
      if(form.length===0){
        setform([value]);
      }
      else{
        setform([
          ...form,value
        ])
      }

    }
    // console.log(form)
  }
  function handleClick(){
    dispatch(setSkills(form));
  }

  return (
    <div styles={{width:"100%", height:"100%"}}>
      <div className={style.container}>
        <div className={style.heading}>
          <p className={style.about}>Skills</p>
          <p>Add a few skills to show employers what you're good at.</p>
        </div>
        <div className={style.content}>
          <div style={{padding:'10px'}}>
            <i className="fas fa-exchange-alt" style={{transform:'rotate(90deg)',color:'#54ACBB'}}></i>
          </div>
            <input type='text' onBlur={handleChange} placeholder='Skills 1'/>
            <div className={style.trash}>
              <i className="fa fa-trash"></i>
            </div>
        </div>
        <div className={style.content}>
          <div style={{padding:'10px'}}>
            <i className="fas fa-exchange-alt" style={{transform:'rotate(90deg)',color:'#54ACBB'}}></i>
          </div>
            <input type='text' onBlur={handleChange} placeholder='Skills 2'/>
            <div className={style.trash}>
              <i className="fa fa-trash"></i>
            </div>
        </div>
        <div className={style.content}>
          <div style={{padding:'10px'}}>
            <i className="fas fa-exchange-alt" style={{transform:'rotate(90deg)',color:'#54ACBB'}}></i>
          </div>
            <input type='text' onBlur={handleChange} placeholder='Skills 3'/>
            <div className={style.trash}>
              <i className="fa fa-trash"></i>
            </div>
        </div>
        <div className={style.content}>
          <div style={{padding:'10px'}}>
            <i className="fas fa-exchange-alt" style={{transform:'rotate(90deg)',color:'#54ACBB'}}></i>
          </div>
            <input type='text' onBlur={handleChange} placeholder='Skills 4'/>
            <div className={style.trash}>
              <i className="fa fa-trash"></i>
            </div>
        </div>
        <div className={style.content}>
          <div style={{padding:'10px'}}>
            <i className="fas fa-exchange-alt" style={{transform:'rotate(90deg)',color:'#54ACBB'}}></i>
          </div>
            <input type='text'onBlur={handleChange} placeholder='Skills 5'/>
            <div className={style.trash}>
              <i className="fa fa-trash"></i>
            </div>
        </div>
        <div className={style.content}>
          <div style={{padding:'10px'}}>
            <i className="fas fa-exchange-alt" style={{transform:'rotate(90deg)',color:'#54ACBB'}}></i>
          </div>
            <input type='text' onBlur={handleChange} placeholder='Skills 6'/>
            <div className={style.trash}>
              <i className="fa fa-trash"></i>
            </div>
        </div>
        <div className={style.content}>
          <div style={{padding:'10px'}}>
            <i className="fas fa-exchange-alt" onBlur={handleChange} style={{transform:'rotate(90deg)',color:'#54ACBB'}}></i>
          </div>
            <input type='text' placeholder='Skills 7'/>
            <div className={style.trash}>
              <i className="fa fa-trash"></i>
            </div>
        </div>
        <div className={style.content, style.checkBox}>
              <Link to ='/' style={{fontWeight:'normal'}}>+ Add another skill</Link>
        </div>
        <div className={style.content, style.add}>
          <button className={style.addBtn}>
            <i className="fa fa-plus-circle" style={{color:'white', background:'#03ACBB', borderRadius:'100%', fontSize:'15px', marginRight:'10px'}}></i>
            Add Pre-Written Examples
          </button>
        </div>
        <div>
          <div className={style.content, style.btn}>
            <Link to='/summary' onClick={handleClick}>
              <button className={style.saveBtn}>SAVE & CONTINUE</button>
            </Link>
          </div>
          <div className={style.back}>
            <Link to='/skills'  className={style.link}>&lt; Back</Link>
          </div>
        </div>
      </div>
    </div>

  )
}
