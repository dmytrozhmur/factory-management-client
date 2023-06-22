import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPanel = () => {
  const nav = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPass, setEnteredPass] = useState('');

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function passChangeHandler(event) {
    setEnteredPass(event.target.value);
  }

  function submitHandler(event) {
    if (enteredEmail == "tanya@gmail.com") {
        nav('/admin');
    } else if (enteredEmail == "nya@gmail.com") {
        nav('/factory');
    }
  }

  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: '400px', height: '95%' }}>
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '20px',
        }}>
        <h1 style={{ color: 'black', marginBottom: '50px', paddingTop: '100px', fontSize: '36px', fontWeight: 'bold' }}>Log in</h1>
        <p style={{ color: 'black', marginBottom: '50px'}}>Please input your information in the fields below to enter your Journey platform.</p>
            <form className="loginForm" onSubmit={submitHandler}>
                <p id='lEmailField'>
                    <label htmlFor="lEmail">Account</label>
                    <input type="email" id="lEmail" className="field" placeholder="Email" required onChange={emailChangeHandler} />
                </p>
                <p id='lPassField'>
                    <input type="password" id="lPass" className="field" placeholder="Password" required onChange={passChangeHandler} />
                </p>
                    <button className="loginButton">Login</button>
            </form>
        </div>
    </div>
  );
};

export default LoginPanel;