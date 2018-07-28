'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {say} from 'cowsay';
import faker from 'faker';

import './style/app.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.welcomeCow,
    };
    this.welcomeCow = this.welcomeCow.bind(this);
    this.cowsays = this.cowsays.bind(this);
  }

  welcomeCow() {
    this.setState({
      text: 'I AM A COW',
    });
  }


  cowsays() {
    this.setState({
      content: say({
        text: faker.hacker.phrase(),
      }),
    });
  }



  render() {
    return (
      <React.Fragment>
        <Header />
        <pre>{this.state.content}</pre>
        <button onClick={this.cowsays}>click me</button>
      </React.Fragment>
    );
  }

}


ReactDom.render(<App />, document.getElementById('root'));

