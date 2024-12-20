import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mb-5">
      <Navbar />
      <button onClick={() => navigate("/contacts/1")}>
        Go to first contact
      </button>
      <br></br>
      <button onClick={() => navigate("/contacts/2")}>
        Go to second contact
      </button>
    </div>
  );
};

export default Contacts;
