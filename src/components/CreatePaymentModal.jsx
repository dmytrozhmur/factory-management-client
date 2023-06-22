import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePaymentModal = () => {
  const nav = useNavigate();
  const [enteredNum, setEnteredNum] = useState('');
  const [enteredExp, setEnteredExp] = useState('');
  const [enteredCvv, setEnteredCvv] = useState('');

  function numChangeHandler(event) {
    setEnteredNum(event.target.value);
  }

  function expChangeHandler(event) {
    setEnteredExp(event.target.value);
  }

  function cvvChangeHandler(event) {
    setEnteredCvv(event.target.value);
  }

  function submitHandler(event) {
    nav('/factory/payment/success');
  }

  return (
    <div className="dashboard">
      <h1 style={{ color: 'blue', marginBottom: '50px', marginTop: 0 }}>Payment</h1>
      <form className="createForm" onSubmit={submitHandler}>
        {/* <div style={{display: 'flex', flexDirection: 'column'}}> */}
          <p id='numField'>
            <label htmlFor="num">Card Number</label>
            <input type="text" id="name" className="cardNumField" placeholder="**** **** **** ****" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" required onChange={numChangeHandler} />
          </p>
          <p id='expField'>
            <label htmlFor="exp">Expiration Date</label>
            <input type="text" id="exp" className="cardOthField" placeholder="MM/YY" pattern="[0-9]{2}/[0-9]{2}" required onChange={expChangeHandler} />
          </p>
          {/* <div style={{display: 'flex', flexDirection: 'column'}}> */}
            <p id = 'cvvField'>
              <label htmlFor="cvv">CVV</label>
              <input type="password" id="cvv" className="cardOthField" minLength={3} maxLength={3} required onChange={cvvChangeHandler} />
            </p>
              <button className="submitButton">Create</button>
          {/* </div>
        </div> */}
      </form>
    </div>
  );
};

export default CreatePaymentModal;