import React from "react";
import { Row, Col, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { prefix } from "../services/TMDBAPI";

const ActorsList = ({ actors }) => {
  return (
    <ListGroup>
      <Row className='mb-5'>
        {actors.slice(0, 9).map((actor, i) => (
          <Col xs={12} md={6} lg={4} key={i} className="my-2">
            <ListGroup.Item className="d-flex align-items-center">
              <Image
                width={50}
                height={50}
                roundedCircle
                src={`${prefix}${actor["profile_path"]}`}
              />

              <Link to={`/actor/${actor.id}`} className="mx-2">
                {actor["original_name"]}
              </Link>
            </ListGroup.Item>
          </Col>
        ))}
      </Row>
    </ListGroup>
  );
};

export default ActorsList;
