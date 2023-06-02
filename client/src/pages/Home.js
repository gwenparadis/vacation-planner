import React, { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [displayButton, setDisplayButton] = useState(true);
  useEffect(
    function () {
      setTimeout(function () {
        setDisplayButton(false);
      }, 2000);
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
        <Button variant="info" size="lg">
          <Link to="/login">Log in to customize your itinerary!</Link>
        </Button>
      )}
    </div>
  );
};

export default Home;
