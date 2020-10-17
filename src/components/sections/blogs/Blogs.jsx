import React from "react";
import Title from "../globals/Title";

function Blogs() {
  return (
    <div className="section blogs">
      <div className="section-wrapper">
        <Title title="my blogs" />
        <div className="blogs-container">
          <div className="failure-message">
            <p>Pursuing the path...</p>
            <p>Hoping to succeed soon..!!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
