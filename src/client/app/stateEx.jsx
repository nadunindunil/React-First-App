import React from 'react';

class StateEx extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        active: true,
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick (){
        this.setState({
            active: !this.state.active
        });
    }

    render (){
        let buttonSwitch = this.state.active ? "On" : "Off";
        return (
            <div>
                <p>Click the button!</p>
                <input type="submit" onClick={this.handleClick} />
                <p>{buttonSwitch}</p>
            </div>
        );
    }
};

export default StateEx;
