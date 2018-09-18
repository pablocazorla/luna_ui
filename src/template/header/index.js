import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import {Container} from '../../components';

export default class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}    
  // }
  // componentWillReceiveProps (nextProps) {
  // }
  // componentDidMount () {
  // }
  render() {
    return <header className="lnt-header">
      <Container>
        <img src={Logo} alt="Logo" width="50"/>
        <br/>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </Container>
    </header>;
  }
};