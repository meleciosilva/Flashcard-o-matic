import React from "react";
import Breadcrumb from "./Breadcrumb";
import AddForm from "./AddForm";

function AddCard({deck}) {
  return (
    <>
      <Breadcrumb deck={deck}/>
      <h1>{`${deck.name}: Add Card`}</h1>
      <AddForm />
    </>
  )
}

export default AddCard;