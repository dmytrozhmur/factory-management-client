import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateFactoryModal = () => {
  const nav = useNavigate();
  const [enteredName, setEnteredName] = useState('');
  const [enteredAddress, setEnteredAddress] = useState('');
  const [enteredType, setEnteredType] = useState('');

  function onAddPost(postData) {
    fetch('http://localhost:5112/api/Factory', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    nav('/admin/factories');
    // setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  function addressChangeHandler(event) {
    setEnteredAddress(event.target.value);
  }

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function typeChangeHandler(event) {
    setEnteredType(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      territory: enteredAddress,
      name: enteredName,
      type: enteredType
    };
    onAddPost(postData);
  }

  return (
    <div className="dashboard">
      <h1 style={{ color: 'blue', marginBottom: '50px', marginTop: 0 }}>Factory</h1>
      <form className="createForm" onSubmit={submitHandler}>
        {/* <div style={{display: 'flex', flexDirection: 'column'}}> */}
          <p id='nameField'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="field" required onChange={nameChangeHandler} />
          </p>
          <p id='addrField'>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" className="field" required onChange={addressChangeHandler} />
          </p>
          {/* <div style={{display: 'flex', flexDirection: 'column'}}> */}
            <p id = 'typeField'>
              <label htmlFor="type">Type</label>
              <input type="text" id="type" className="field" required onChange={typeChangeHandler} />
            </p>
              <button className="submitButton">Create</button>
          {/* </div>
        </div> */}
      </form>
    </div>
  );
};

export default CreateFactoryModal;