import React from "react";
import { Card, Col } from "react-bootstrap";

export const Movie = ({ movie }) => {
  return (
    <Col md="4" sm="12" className="mb-3">
      <Card key={movie.imdbID} className="card-height">
        <Card.Body>
          <img src={movie.Poster} alt={movie.Poster} className="mb-3" />
          <div className="description">
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text className="text-muted">{movie.Year}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
