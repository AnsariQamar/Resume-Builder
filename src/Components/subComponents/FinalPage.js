import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import styles from '../../Styles/final.module.css'

export default function FinalPage() {
  const {ChangeName, ChangeWork,ChangeEducation,ChangeSkills,ChangeSummary}=useSelector((state)=>state);
  const nameInitial=ChangeName.name.substring(0,1);
  const arr=ChangeName.name.split(" ");
  
  return (
    <div className={styles.container}>
        <div className={styles.leftContainer}>
          {
            (ChangeName.name=='' || ChangeName.email=='')?<div></div>
            : 
              <div className={styles.contact}>
                <div style={{display:'flex'}}>
                  {
                    (arr.length<=1)?<div className={styles.starting}>{nameInitial}</div>
                    :
                    <div className={styles.starting} >
                      <div style={{fontSize:'40px', position:'absolute',top:'1px',left:'5px'}}>
                        {arr[0].substring(0,1)}
                      </div>
                      <div className={styles.slant}>|</div>
                      <div style={{fontSize:'40px', position:'absolute',bottom:'1px',right:'5px'}}>
                        {arr[1].substring(0,1)}
                      </div>
                    </div>
                  }
                  <h1 style={{marginLeft:'20px', textTransform:'uppercase'}}>{ChangeName.name}</h1>
                </div>
                <div className={styles.details}>
                  <span>{ChangeName.address}</span>
                  {','}
                  <span>{ChangeName.city}</span>
                  {','}
                  <span>{ChangeName.country}</span>
                  {','}
                  <span>{ChangeName.phone}</span>
                  {','}
                  <span>{ChangeName.email}</span>
                </div>
              </div>
          }
          {/* summary */}
          { ChangeSummary===''?<div></div>
            :
            <div className={styles.summary}>
              <p style={{fontWeight:'800'}}>PROFESSIONAL SUMMARY</p>
              <div style={{padding:'10px 15px', border:'1px solid black'}}>{ChangeSummary}</div>
            </div>
          }
          {/* skills */}
          { ChangeSkills.length===0?<div></div>
            :
            <div className={styles.skills}>
              <p style={{fontWeight:'800'}}>SKILLS</p>
              <ul className={styles.list}>
                {
                  ChangeSkills.map(ele=> <li>{ele}</li>)
                }
              </ul>
            </div>
          }
          {/* Experience */}
          { ChangeWork.title===''?<div></div>
            :
            <div className={styles.exp}>
              <p style={{fontWeight:'800'}}>EXPERIENCE</p>
              <div style={{position:'relative', border:'1px solid black'}}>
                <span>{ChangeWork.title}</span>
                <div style={{position:'absolute',top:'0px', right:'2px', display:'flex'}}>
                  <div style={{margin:'0px 10px'}}>
                    <span>{ChangeWork.startDateMonth}</span>
                    {' '}
                    <span>{ChangeWork.startDateYear}</span>
                    {','}
                  </div>
                  <div>
                    <span>{ChangeWork.endDateMonth}</span>
                    {' '}
                    <span>{ChangeWork.endDateYear}</span>
                  </div>
                </div>
              </div>
              <div style={{margin:'10px 0px'}}>
                <span>{ChangeWork.company}</span>
                <span style={{margin:'0px 7px'}}>|</span>
                <span>{ChangeWork.city}</span>
                {' '}
                <span>{ChangeWork.country}</span>
              </div>
              <span style={{marginLeft:'10px'}}>Description</span>
            </div>
          }
          {/* Education */}
          { ChangeEducation.school===''?<div></div>
            :
            <div className={styles.education}>
              <p style={{fontWeight:'800'}}>EDUCATION</p>
              <div style={{display:'flex',position:'relative'}}>
                <span>{ChangeEducation.degree}</span>
                <div style={{position:'absolute',top:'0px', right:'2px', display:'flex'}}>
                  <span>{ChangeEducation.month}</span>
                  <span>{ChangeEducation.year}</span>
                </div>
              </div>
              <div>
                <span>School Name</span>
                {', '}
                <span>city</span>
                {' '}
                <span>Country</span>
              </div>
            </div>
          }
          <div className={styles.newSection}>
              <h1 style={{fontSize:'20px'}}>+ ADD NEW SECTION</h1>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.heading}>
            <p style={{fontWeight:'800', fontSize:'30px', marginBottom:'-2px'}}>Here’s Your Resume!</p>
            <p>What do you want to do next?</p>
          </div>
          <p style={{fontWeight:'600'}}>Export Options</p>
          <div className={styles.content}>
            <button className={styles.Btn} style={{background:'#94DD46'}}>Download</button>
          </div>
          <div className={styles.content}>
            <button className={styles.Btn}>Print</button>
          </div>
          <div className={styles.content}>
            <button className={styles.Btn}>Email</button>
          </div>
          <hr></hr>
          <p style={{fontWeight:'600'}}>Formatting Options</p>
          <div>
            <label>Layout</label>
            <div className={styles.layout}>
              <div >CONDENSED</div>
              <div>STRANDARD</div>
              <div>EXPANDED</div>
            </div>
          </div>
          <div className={styles.styl}>
            <div style={{marginRight:'10px'}}>
              <label>Font Style</label>
              <select style={{margin:'10px 0px'}}>
                <option>Raleway</option>
                <option>Ubuntu</option>
                <option>MontSerrat</option>
                <option>Source Sans Pro</option>
                <option>Hind</option>
                <option>Times New Roman</option>
              </select>
            </div>
            <div>
              <label>Font Size</label>
              <select style={{margin:'10px 0px'}}>
                Size
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
          </div>
          <div>
            <label>Colors</label>
            <div className={styles.colurs}>
              <div className={styles.clr}  style={{background:'black'}}></div>
              <div className={styles.clr} style={{background:'#AC7BAE'}}></div>
              <div className={styles.clr} style={{background:'#305FEC'}}></div>
              <div className={styles.clr} style={{background:'#6CA7BA'}}></div>
              <div className={styles.clr} style={{background:'#E5A3A1'}}></div>
              <div className={styles.clr} style={{background:'#9B9B9B'}}></div>
              <div className={styles.clr} style={{background:'#EF943A'}}></div>
              <div className={styles.clr} style={{background:'#ACB75A'}}></div>
              <div className={styles.clr} style={{background:'#2F527B'}}></div>
            </div>
          </div>
          <hr></hr>
          <div className={styles.content}>
            <button className={styles.Btn}>+ Add New Section</button>
          </div>
          <div className={styles.content}>
            <button className={styles.Btn}>Change Template</button>
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}
