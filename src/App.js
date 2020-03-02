import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Results } from "./components/Results";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header title="Movie Apps" />
        <div className="container">
          <Search />
          <Results />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
