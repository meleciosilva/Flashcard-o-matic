import React from "react";
import Breadcrumb from "./Breadcrumb";
import AddForm from "./AddForm";

function AddCard({deck, deckCards}) {
  return (
    <>
      <Breadcrumb deck={deck}/>
      <AddForm />
    </>
  )
}

export default AddCard;