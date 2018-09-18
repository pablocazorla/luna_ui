import React from 'react';

export default function Container(props) {
  return <div className="ln-container" {...props}>{props.children}</div>;
};