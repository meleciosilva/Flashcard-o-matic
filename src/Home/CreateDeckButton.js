import React from "react";
import {Link} from "react-router-dom";

function CreateDeckButton() {
  return (
    <div className="row">
      <div className="col-sm-6 mb-1">
        <Link to={"/"} className="btn btn-outline-primary"><strong>+ Add Deck</strong></Link>
      </div>
    </div>  
  )
}

export default CreateDeckButton;