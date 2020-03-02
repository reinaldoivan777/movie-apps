import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";
import { Movie } from "./Movie";

export const Results = () => {
  const { results } = useContext(GlobalContext);
  return (
    <Row>
      {results.map(result => (
        <Movie movie={result} />
      ))}
    </Row>
  );
};
