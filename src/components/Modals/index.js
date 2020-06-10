import React from "react";
import Error from "./Error";
import Success from "./Success";
import Logout from './Logout';

const index = () => {
  return (
    <>
      <Error />
      <Success />
      <Logout />
    </>
  );
};

export default index;
