import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import {defaultTitle} from '../../config';

export default class HelmetVisual extends Component {

  render() {
    const {title} = this.props;
    return <Helmet>
      <title>{title + ' - '+ defaultTitle}</title>
    </Helmet>;
  }
};