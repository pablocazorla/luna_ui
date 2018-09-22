import React from 'react';
import {px} from '../../config';

export default function AAA (props) {
  return <div className={px + 'aaaa'} {...props}>{props.children}</div>;
};