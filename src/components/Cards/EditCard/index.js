import React from "react";
import {useParams} from "react-router-dom";

function EditCard() {
  
  const {cardId} = useParams();
  
  return <h1>Card ID: {cardId}</h1>
}

export default EditCard;