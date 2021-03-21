import React from "react";
import {Link, useRouteMatch} from "react-router-dom";

function Breadcrumb({deck}) {
  const {url} = useRouteMatch()
  
  return (
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
      <li className="breadcrumb-item"><Link to={`${url}`}>{deck.name}</Link></li>
      <li className="breadcrumb-item active" aria-current="page">Edit</li>
    </ol>
  </nav>
  )
}

export default Breadcrumb;