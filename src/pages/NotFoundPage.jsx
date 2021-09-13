import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Container className="text-center my-5">
      <h1>The page you are looking for could not be found! 😿 </h1>
      <Link to="/">
        <Button className="my-2 p-3" variant="danger">Go back to homepage! 🏠 </Button>
      </Link>
    </Container>
  );
};

export default NotFoundPage;
