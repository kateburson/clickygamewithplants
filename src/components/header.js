import React from 'react';

const HeaderExamplePage = (props) => (
  <div className="header">
    <h1>Clicky Game With Plants</h1>
    <h2>Score: {props.score}</h2>
  </div>
)

export default HeaderExamplePage