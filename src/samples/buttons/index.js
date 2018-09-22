import React, { Component } from 'react';
import {Button, Icon} from '../../components';

const styleDiv={
  'padding':'25px 0',
  'borderBottom':'1px dotted #DDD'
};
const styleTitle={
  'marginBottom':'30px',
};
const style={
  'marginRight':'15px'
};

export default class Buttons extends Component {  
  render() {
    
    return <div>
      <h2>Buttons</h2>

      <div style={styleDiv}>
        <h3 style={styleTitle}>        
        Tags a, button and input[type=submit]</h3>
        <Button
          style={style}
        >Button</Button>
        <Button
          node="button"
          style={style}
        >Button</Button>
        <Button
          node="input"
          value="Button"
          style={style}
        />        
      </div>
      <div style={styleDiv}>
        <h3 style={styleTitle}>
          Colors
        </h3>
        <Button
          style={style}
          href="#"
        >
          Default
        </Button>
        <Button
          className="primary"
          style={style}
          href="#"
        >
          Primary
        </Button>
        <Button
          className="secondary"
          style={style}
          href="#"
        >
          Secondary
        </Button>
        <Button
          className="danger"
          style={style}
          href="#"
        >
          Danger
        </Button>
        <Button
          className="warning"
          style={style}
          href="#"
        >
          Warning
        </Button>
        <Button
          className="success"
          style={style}
          href="#"
        >
          Success
        </Button>
        <Button
          className="info"
          style={style}
          href="#"
        >
          Info
        </Button>
      </div>

       <div style={styleDiv}>
        <h3 style={styleTitle}>
          Outlined
        </h3>
        <Button
          style={style}
          href="#"
        >
          Default
        </Button>
        <Button
          className="primary outlined"
          style={style}
          href="#"
        >
          Primary
        </Button>
        <Button
          className="secondary outlined"
          style={style}
          href="#"
        >
          Secondary
        </Button>
        <Button
          className="danger outlined"
          style={style}
          href="#"
        >
          Danger
        </Button>
        <Button
          className="warning outlined"
          style={style}
          href="#"
        >
          Warning
        </Button>
        <Button
          className="success outlined"
          style={style}
          href="#"
        >
          Success
        </Button>
        <Button
          className="info outlined"
          style={style}
          href="#"
        >
          Info
        </Button>
      </div>

       <div style={styleDiv}>
        <h3 style={styleTitle}>
          Shapes
        </h3>
        <Button
          className="primary"
          style={style}
          href="#"
        >
          Default
        </Button>
        <Button
          className="primary rounded"
          style={style}
          href="#"
        >
          Rounded
        </Button>
        <Button
          className="primary squared"
          style={style}
          href="#"
        >
          Squared
        </Button>
        <Button
          className="primary circular"
          style={style}
          href="#"
        >
          <Icon type="plus"/>
        </Button>   
      </div>

       <div style={styleDiv}>
        <h3 style={styleTitle}>
          Sizes
        </h3>
        <Button
          className="secondary small"
          style={style}
          href="#"
        >
          Small
        </Button>
        <Button
          className="secondary"
          style={style}
          href="#"
        >
          Default
        </Button>
        <Button
          className="secondary big"
          style={style}
          href="#"
        >
          Big
        </Button>
        <Button
          className="secondary huge"
          style={style}
          href="#"
        >
          Huge
        </Button>    
      </div>

    </div>
  }
};