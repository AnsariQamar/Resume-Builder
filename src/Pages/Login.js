import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { createRef, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/login.module.css";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const emailRef = createRef(null);
  const passwordRef = createRef(null);
  const auth = getAuth();
  function handleClick() {
    setLoading(true);
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        // alert("Login Successful");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert("login Fail");
        setLoading(false);
      });
  }
  return (
    <>
      {loading ? (
        <div className={styles.load}>
          <TailSpin color="#00BFFF" height={200} width={200} />
          <p>Loading.....</p>
        </div>
      ) : (
        <div className={styles.formcard}>
          <h2 className="form-heading center">Enter Login details</h2>
          <div className="form-section">
            <div className="input-group full">
              <label>Email</label>
              <div className="effect">
                <input type="text" name="email" ref={emailRef} />
              </div>
            </div>
            <div className="input-group full">
              <label>Password</label>
              <div className="effect">
                <input type="password" name="password" ref={passwordRef} />
              </div>
            </div>
            <div className="form-buttons">
              <button
                className="btn hvr-float-shadow"
                type="button"
                onClick={handleClick}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
