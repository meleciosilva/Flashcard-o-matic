import React from "react";
import Breadcrumb from "./Breadcrumb";
import EditForm from "./EditForm";

function EditCard({deck, deckCards}) {
    
  return (
    <>
      <Breadcrumb deck={deck} />
      <EditForm deck={deck} deckCards={deckCards} />
    </>
  )
}

export default EditCard;