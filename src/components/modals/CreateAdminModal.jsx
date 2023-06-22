import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAdminModal = () => {
  const nav = useNavigate();
  const [enteredName, setEnteredName] = useState('');
  const [enteredLname, setEnteredLname] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPass, setEnteredPass] = useState('');
  const [enteredCpass, setEnteredCpass] = useState('');

  function onAddPost(postData) {
    fetch('http://localhost:5112/api/FactoryAdministrator', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setTimeout(() => {
      nav('/admin/accounts');
      location.reload();
    }, 2000);
    // setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  function lnameChangeHandler(event) {
    setEnteredLname(event.target.value);
  }

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function phnChangeHandler(event) {
    setEnteredPhone(event.target.value);
  }

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function passChangeHandler(event) {
    setEnteredPass(event.target.value);
  }

  function cpassChangeHandler(event) {
    setEnteredCpass(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      lastName: enteredLname,
      firstName: enteredName,
      patronymic: "_______",
      phone: enteredPhone,
      email: enteredEmail,
      password: enteredPass,
      factoryId: "testId"
    };
    if (enteredPass == enteredCpass) {
        onAddPost(postData);
    } else {
        
    }
  }

  return (
    <div className="dashboard">
      <h1 style={{ color: 'blue', marginBottom: '50px', marginTop: 0 }}>Factory admins</h1>
      <form className="createForm" onSubmit={submitHandler}>
        {/* <div style={{display: 'flex', flexDirection: 'column'}}> */}
          <p id='nameField'>
            <label htmlFor="name">First name</label>
            <input type="text" id="name" className="field" required onChange={nameChangeHandler} />
          </p>
          <p id='lnameField'>
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" className="field" required onChange={lnameChangeHandler} />
          </p>
          {/* <div style={{display: 'flex', flexDirection: 'column'}}> */}
            <p id = 'phnField'>
              <label htmlFor="phoneNbr">Phone number</label>
              <input type="tel" id="phoneNbr" className="field" required onChange={phnChangeHandler} />
            </p>
            <p id = 'emailField'>
              <label htmlFor="emailAddr">Work email</label>
              <input type="email" id="emailAddr" className="field" required onChange={emailChangeHandler} />
            </p>
            <p id = 'passField'>
              <label htmlFor="pass">Password</label>
              <input type="password" id="pass" className="field" required onChange={passChangeHandler} />
            </p>
            <p id = 'cpassField'>
              <label htmlFor="cpass">Confirm password</label>
              <input type="password" id="cpass" className="field" required onChange={cpassChangeHandler} />
            </p>
              <button className="submitButton">Create</button>
          {/* </div>
        </div> */}
      </form>
    </div>
  );
};

export default CreateAdminModal;