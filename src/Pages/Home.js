import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setForm } from '../actions/actions';
import ChangeName from '../reducers/reducer';
import style from '../Styles/home.module.css';

export default function Home() {
  const {ChangeName}=useSelector((state)=>state)
  // const [Name,setName]=useState(ChangeName.name);
  // const [Email,setEmail]=useState(ChangeName.email);
  // const [Address,setAddress]=useState(ChangeName.address);
  const [form, setform]=useState({
    name:ChangeName.name,
    email:ChangeName.email,
    address:ChangeName.address
  })
  const dispatch=useDispatch();
  
  function handleChange(e){
    let {name,value}=e.target;
    console.log(e.target.value);
    setform({
      ...form,
      [name]:value
    })
    // if(name=='name'){
    //   setName(value);
    //   console.log(Name);
    // }else if(name=='email'){
    //   setEmail(value);
    // }else if(name=='address'){
    //   setAddress(value);
    // }
  }
  const obj={};
  function handleClick(){
    obj.name=form.name;
    obj.email=form.email;
    obj.address=form.address;
    console.log(obj);
    // obj=form;
    dispatch(setForm(form));
  }

  return (
    <div styles={{width:"100%", height:"100%"}}>
      <div className={style.container}>
        <div className={style.heading}>
          <p className={style.about}>Tell us about yourself</p>
          <p>With this info, recruiters will be able to find you</p>
        </div>
        <div className={style.content}>
          <label>Name</label>
          <input type='text' placeholder='*Required' value={form.Name} onChange={handleChange} name='name'/>
        </div>
        <div className={style.content, style.emails}>
          <div >
            <label>Email</label>
            <input type='text' placeholder='*Required' value={form.Email} onChange={handleChange} name='email'/>
          </div>
          <div className={style.checkBox}>
            <input id="IsEmailHidden" type="checkbox" value={form.Address} name="IsEmailHidden"/>
            <label>Don't show on my resume</label>
          </div>
        </div>
        <div className={style.content}>
          <div>
            <label>Street Address</label>
            <input type='text' placeholder='*Required'  onChange={handleChange} name='address'/>
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
            <Link to='/final'onClick={handleClick}>
              <button className={style.saveBtn} >SAVE & CONTINUE</button>
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
