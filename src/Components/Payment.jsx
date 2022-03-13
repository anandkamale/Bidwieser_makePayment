import { Button } from "reactstrap";
// import React, { useState } from "react";
import { Input } from "reactstrap";

const Payment = () => {
  //   const initialValues = {
  //     acc_holder_name: "",
  //     routing_number: "",
  //     acc_type: "",
  //     acc_number: "",
  //   };
  //   const [paymentValues, setPaymentValues] = useState(initialValues);
  //   const [paymentErrors, setPaymentErrors] = useState();

  //   const handleChange = (e) => {
  //     console.log(e.target);
  //     const { name, value } = e.target;
  //     setPaymentValues({ ...paymentValues, [name]: value });
  //     console.log(paymentValues);
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setPaymentErrors(validate(paymentValues));
  //   };

  // const validate = (paymentValues) =>{
  //     // const errors = {}
  //     // const regex = ^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$;

  //     if(!initialValues.acc_holder_name){
  //       errors.acc_holder_name = "Account Holder Name is required";
  //     }
  //     if(!initialValues.routing_number){
  //       errors.acc_holder_name = "Account Holder Name is required";
  //     }
  //     if(!initialValues.acc_type){
  //       errors.acc_holder_name = "Account Holder Name is required";
  //     }
  //     if(!initialValues.acc_number){
  //       errors.acc_holder_name = "Account Holder Name is required";
  //     }
  // }

  return (
    <div className="mainpage">
      <div className="globalOptions">
        <div>
          <a href="#">Summary</a>
        </div>
        <div>
          <a href="#">Watch List</a>
        </div>
        <div>
          <a href="#">Saved Searches</a>
        </div>
        <div>
          <a href="#">Selling</a>
        </div>
        <div>
          <a href="#">Select Inventory</a>
        </div>
        <div>
          <a href="#">Purchase History</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
      </div>

      <div className="payment">
        MAKE PAYMENT
        {/* <form onSubmit={handleSubmit}> */}
        <div className="payment_div">
          <div className="column1">
            <lebel className="required">Account Holder Name </lebel>
            <Input
              name="acc_holder_name"
              id="acc_holder_name"
              type="text"
              label="Account Holder Name"
              className="input-form-control"
              // value={paymentValues.acc_holder_name}
              // onChange={handleChange}
            />

            <lebel className="required">Routing Number</lebel>
            <Input
              name="routing_number"
              id="routing_number"
              type="text"
              label="Routing Number"
              className="input-form-control"
              // value={paymentValues.routing_number}
              // onChange={handleChange}
            />
            <div className="authorise">
              <lebel>Authorized by</lebel>
              <Input
                type="text"
                className="form-control2"
                placeholder="Enter Your Signatue here"
              />
              <Input type="checkbox" className="checkbox" />
              <p className="p2">
                I acknowledge and agree to the Terms and Conditions of
                participation in the Bidwiser vehicle auction.
              </p>
            </div>
            <div>
              <a href="#">
                {" "}
                <Button className="btn-custom">Make Payment</Button>
              </a>
            </div>
          </div>

          <div className="column2">
            <lebel className="required">Account Type</lebel>
            <Input
              name="acc_type"
              id="account_type"
              type="text"
              label="account_type"
              className="input-form-control"
              // value={paymentValues.acc_type}
              // onChange={handleChange}
            />
            <lebel className="required">Account Number</lebel>
            <Input
              name="acc_number"
              id="account_number"
              type="text"
              label="account_number"
              className="input-form-control"
              // value={paymentValues.acc_number}
              // onChange={handleChange}
            />
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Payment;
