import React, { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";

const Home = () => {
  const [displayButton, setDisplayButton] = useState(true);
  useEffect(
    function () {
      setTimeout(function () {
        setDisplayButton(false);
      }, 4000);
    },
    [displayButton]
  );

  return (
    <div className="splash-page d-flex justify-content-center align-items-center">
      {displayButton ? (
        <Alert key="info" variant="info" className="alert-class">
          Welcome to your dream vacation!
        </Alert>
      ) : (
        <Button variant="primary" size="lg">
          Click here to plan your stay!
        </Button>
      )}
    </div>
  );
};

export default Home;
