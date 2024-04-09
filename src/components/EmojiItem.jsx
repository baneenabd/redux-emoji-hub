import React from "react";

export const EmojiItem = ({ emoji }) => {
  console.log (emoji);
  return (
    <div>
      <p>{emoji.name}</p>
      <p>{emoji.category}</p>
      <p>{emoji.htmlCode}</p>
      <p dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }}></p>
    </div>
  );
};
