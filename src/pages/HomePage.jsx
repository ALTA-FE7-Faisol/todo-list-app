import React from "react";

import Button from "../components/Button";
import CustomInput from "../components/CustomInput";

const Homepage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="my-16 text-3xl">Todo List</h1>
      <p>Add Todo</p>
      <CustomInput />
      <Button label="Submit" />
    </div>
  );
};

export default Homepage;
