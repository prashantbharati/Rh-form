import React, { useState } from "react";
import RooftopArea from "./RooftopArea";
import Explore from "./Explore";
import City from "./City";
import Success from "./Succes";

const User = () => {
  const [user, setuser] = useState({
    step: 0,
    area: 0,
    city: "",
  });

  const step = user.step;

  // Proceed to next step
  const nextStep = (e) => {
    setuser({ ...user, step: step + 1 });
  };

  // Go back to prev step
  const prevStep = () => {
    setuser({ ...user, step: step - 1 });
  };

  // Handle fields change
  const handleChange = (input) => (e) => {
    setuser({ ...user, [input]: e.target.value });
  };

  switch (step) {
    case 0:
      return (
        <Explore
          user={user}
          setuser={setuser}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 1:
      return (
        <RooftopArea
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          user={user}
          setuser={setuser}
        />
      );
    case 2:
      return (
        <City
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          user={user}
          setuser={setuser}
        />
      );
    case 3:
      return <Success user={user} setuser={setuser} />;

    default:
      console.log("This is a multi-step form built with React.");
  }
};

export default User;
