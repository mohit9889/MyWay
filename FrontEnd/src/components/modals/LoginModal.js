/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../styles/LoginModal.css";

const LoginModal = () => {
  return (
    <div
      className="modal fade LoginModal"
      id="LoginModal"
      tabindex="-1"
      aria-labelledby="LoginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog fadeInRight animated">
        <div className="modal-content">
          <div className="header">
            Login
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="box">
              <p>Student</p>
              <div className="horizontal-line"></div>
              <form>
                <input type="text" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
              </form>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
              <button>Login</button>
              <a href="#" className="signup">
                New to MyWay? Sign Up here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
