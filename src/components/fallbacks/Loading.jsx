import React from "react";

function Loading() {
  setTimeout(() => {
    return;
  }, 1500);
  return (
    <div className="loading-container">
      <div className="loader1">
        <span></span>
      </div>
      <div className="loader2">
        <span></span>
      </div>
    </div>
  );
}

export default Loading;