import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess
 = () => {
  const nav = useNavigate();

  function submitHandler(event) {
    nav('/factory');
  }

  return (
    <div className="dashboard">
      <h1 style={{ color: 'blue', marginBottom: '50px', marginTop: 0 }}>Payment</h1>
      <form className="createForm" onSubmit={submitHandler}>
        <p id='thxField'>Thank You!</p>
        <p id='orderField'>Order #123RGR231567Y Confirmed</p>
        <button className="okButton">Ok</button>
      </form>
    </div>
  );
};

export default PaymentSuccess
;