import React from "react";

const Article_Quote = ({ children }) => {
  return (
    <div className="block-quote">
      <blockquote>{children}</blockquote>
    </div>
  );
};

export default Article_Quote;
