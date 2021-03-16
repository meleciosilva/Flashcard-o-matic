import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Decks from "./../Home/Decks";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Decks />
        <NotFound />
      </div>
    </>
  );
}

export default Layout;
