import React, { useState } from "react";
import "../styles/Home.css";
import LoginModal from "../components/modals/LoginModal";
import SignupModal from "../components/modals/SignupModal";
import OTPVerificationModal from "../components/modals/OTPVerificationModal";
import VerifiedModal from "../components/modals/VerifiedModal";

const Home = (props) => {
  const { openModalsState, setopenModalsState } = props;
  const [otpModalOpen, setotpModalOpen] = useState(false);
  const [verifiedModalOpen, setverifiedModalOpen] = useState(false);

  return (
    <div className="container home">
      <div className="content">
        <h1>Apply and hear back every time</h1>
        <p>
          Exploring internships or jobs? Say good-bye to the typical job portals
          and use the power of Artificial Intelligence to become successful,
          faster.
        </p>
        <button className="home-btn" type="button">
          Get Started
        </button>
      </div>
      <LoginModal />
      <SignupModal
        openModalsState={openModalsState}
        setopenModalsState={setopenModalsState}
        setotpModalOpen={setotpModalOpen}
      />
      <OTPVerificationModal
        otpModalOpen={otpModalOpen}
        setotpModalOpen={setotpModalOpen}
        setverifiedModalOpen={setverifiedModalOpen}
        setopenModalsState={setopenModalsState}
      />
      <VerifiedModal verifiedModalOpen={verifiedModalOpen} />
    </div>
  );
};

export default Home;
