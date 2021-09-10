import React from "react";
import { Row, Col, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const prefix = "https://image.tmdb.org/t/p/w400/";

const ActorsList = ({ actors }) => {
  return (
    <ListGroup>
      <Row>
        {actors.map((actor, i) => (
          <Col xs={12} md={6} lg={3} key={i} className="my-2">
            <ListGroup.Item className="d-flex align-items-end">
              <Image
                width={50}
                height={50}
                roundedCircle
                src={
                  `${prefix}${actor["profile_path"]}` &&
                  `${prefix}${actor["profile_path"]}`
                }
              />

              <Link to={`/actor/${actor.id}`} className="mx-2">
                {" "}
                {actor["original_name"]}{" "}
              </Link>
            </ListGroup.Item>
          </Col>
        ))}
      </Row>
    </ListGroup>
  );
};

export default ActorsList;
