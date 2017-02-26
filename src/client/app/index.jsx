import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './awesomeComponent.jsx';
import PropsEx from './props.jsx';
import StateEx from './stateEx.jsx';
import InvParent from './inverseDataFlow.jsx';
import RefsFrom from './refs.jsx';
import Keys from './keys.jsx';

let BUTTONTEXT = "Click the damn button";

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <AwesomeComponent />
        <PropsEx text={this.props.text}/>
        <StateEx/>
        <RefsFrom/>
        <InvParent/>
        <Keys/>
      </div>
    );
  }
}

render(<App text={BUTTONTEXT}/>, document.getElementById('app'));
