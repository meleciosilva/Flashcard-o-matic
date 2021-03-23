import React, { useState, useEffect } from "react";
import CreateDeckButton from "./CreateDeckButton";
import ShowDecks from "./ShowDecks";
import {listDecks} from "./../../utils/api/index";

function Home() {
  
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function fetchDecks() {
      const response = await listDecks();
      setDecks(response);
    }
    fetchDecks();
  }, []);

  if (!decks) return null;
  return (
    <div className="container">
      <CreateDeckButton />
      <ShowDecks decks={decks} />
    </div>
  )
}

export default Home;