import React from "react";
import { Button } from "react-bootstrap";

const Alert = () => {
  return (
    <div>
      <h1> Must LogIn for this feature! </h1>
      <Button href="/login"> Go To Login Page </Button>
    </div>
  );
};
export default Alert;
