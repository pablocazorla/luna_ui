import React from 'react';

export default function Icon (props) {
  const tp = props.type || '';
  return <i {...props} className={'fa fa-' + tp}/>;
};