import React from "react";
import "../../styles/OTPVerificationModal.css";

const OTPVerificationModal = (props) => {
  const {
    otpModalOpen,
    setotpModalOpen,
    setverifiedModalOpen,
    setopenModalsState,
  } = props;

  const verified = () => {
    setverifiedModalOpen(true);
    setTimeout(() => {
      setopenModalsState(false);
      setotpModalOpen(false);
      setverifiedModalOpen(false);
    }, 3000);
  };

  return (
    <div
      className={`modal fade VerificationModal ${otpModalOpen ? "show" : ""}`}
      id="VerificationModal"
      tabindex="-1"
      aria-labelledby="VerificationModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setotpModalOpen(false)}
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-left-short"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <h6>OTP sent!</h6>
            <div className="mail-group">
              <input type="text" className="form-control" placeholder="OTP" />
              <p>One time Passcode sent to your email ID- abc@gmail.com</p>
            </div>
            <button onClick={verified}>Enter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationModal;
