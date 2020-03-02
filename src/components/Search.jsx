import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { GlobalContext } from "../context/GlobalState";

export const Search = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const { getResult } = useContext(GlobalContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const x = await axios.get(
      `${process.env.REACT_APP_BASE_URL}&s="${movieTitle}"`
    );
    getResult(x.data.Search);
  }

  return (
    <>
      <form className="mb-5" onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          className="input-text"
          placeholder="Enter Movie Title"
          onChange={e => setMovieTitle(e.target.value)}
        />
        <Button type="submit" variant="primary">
          Search Movie
        </Button>
      </form>
    </>
  );
};
