import React from "react";
import "../../styles/VerifiedModal.css";

import CHECK from "../../assets/check-circle.svg";

const VerifiedModal = (props) => {
  const { verifiedModalOpen } = props;
  return (
    <div
      className={`modal fade VerifiedModal ${verifiedModalOpen ? "show" : ""}`}
      id="VerifiedModal"
      tabindex="-1"
      aria-labelledby="VerifiedModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <img src={CHECK} alt="check" />
            <h6>Thanks. Successful!</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifiedModal;
