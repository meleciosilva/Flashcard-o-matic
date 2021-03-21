import React from "react";
import Breadcrumb from "./Breadcrumb";
import EditForm from "./EditForm";

function EditDeck({deck}) {
  return (
    <>
    <Breadcrumb deck={deck}/>
    <EditForm deck={deck}/>
    </>
  )
}

export default EditDeck;