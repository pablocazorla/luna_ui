import React from 'react';
import {px} from '../../config';

export default function Button (props) {
  const cl = props.className ?  ' ' + px + props.className : '';

  if(props.node){
    if(props.node === 'button'){
      return <button {...props} className={px + 'button' + cl}>{props.children}</button>;
    }
    if(props.node === 'input'){
      return <input {...props} type="submit" className={px + 'button' + cl}/>;
    }
  }
  return <a {...props} className={px + 'button' + cl}>{props.children}</a>;
};