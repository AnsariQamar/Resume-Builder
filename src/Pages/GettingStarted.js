import React from "react";
import style from "../Styles/gettingStarted.module.css";
import { Link } from "react-router-dom";



export default function GettingStarted() {
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
          <div className={style.steps}>3 SIMPLE STEPS </div>
          <h1>Getting Started</h1>
          <ul className={style.list}>
            <li className={style.lit}>
                <div>
                    <div className={style.span}>
                        Save time using pre-written bullets crafted by resume experts.{" "}
                    </div>
                </div>
            </li>
            <li className={style.lit}>
                <div>
                    <div className={style.span}>
                        Select a recruiter approved template that will get your resume
                        noticed.{" "}
                    </div>
                </div>
            </li>
            <li className={style.lit}>
                <div>
                    <div className={style.span}>
                        Download or print your new resume! 
                    </div>
                </div>
            </li>
          </ul>
          <Link to="/home">
              <button className={style.btn}>CONTINUE</button>
          </Link>
          <div className={style.termsCondition}>
            By clicking 
            <span style={{fontWeight:"bolder"}}>“Continue”</span>
            , you agree to our{" "}
            <a href="/terms-and-conditions" target="_blank">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" target="_blank">
              Privacy Policy
            </a>
            .
          </div>
      </div>
      <div className={style.rightContainer}>
          <div className={style.image}>
          <img class="desktop-hiw-img" src="https://cdn2.resumenerd.com/images/tips/hiws.svg" alt="Hiw"/>
          </div>
      </div>
    </div>
  );
}
