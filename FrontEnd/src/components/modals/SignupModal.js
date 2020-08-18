import React from "react";
import "../../styles/SignUpModal.css";

const SignupModal = (props) => {
  const { openModalsState, setopenModalsState, setotpModalOpen } = props;

  return (
    <div
      className={`modal fade signup-modal ${openModalsState ? "show" : ""}`}
      id="SignUpModal"
      tabindex="-1"
      aria-labelledby="SignUpModalLabel"
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
              onClick={() => setopenModalsState(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h3>Sign Up</h3>
            <p>It's quick and easy</p>
            <form>
              <div className="form-row form-group">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
            </form>
            <button onClick={() => setotpModalOpen(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
