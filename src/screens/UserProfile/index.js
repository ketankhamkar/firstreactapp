import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <p>hii amit {id}</p>
    </div>
  );
};

export default UserProfile;
