import React from 'react';
import {px} from '../../config';

export default function Container(props) {
  return <div className={px + 'container'} {...props}>{props.children}</div>;
};