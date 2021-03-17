import React from "react";
import Decks from "./Decks";
import CreateDeckButton from "./CreateDeckButton";

function Home() {
  
  return (
    <>
      <CreateDeckButton />
      <Decks />
    </>
  )
}

export default Home;