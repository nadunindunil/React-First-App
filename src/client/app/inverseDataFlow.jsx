import React from 'react';

class InvChild extends React.Component{
    constructor(props) {
      super(props);
    }

    render (){
        return (
            <div>
                <input type="submit" onClick={this.props.onUserClick} />
                <h3>You have pressed the button {this.props.counter} times!</h3>
            </div>
        );
    }
};

class InvParent extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
      this.onUserClick = this.onUserClick.bind(this);
    }

    onUserClick (){
        var newCount = this.state.counter += 1;
        this.setState({
            counter: newCount
        });
    }

    render (){
        return (
            <div>
                <h1> Welcome to the counter app!</h1>
                <InvChild counter={this.state.counter} onUserClick={this.onUserClick} />
            </div>
        );
    }
};

export default InvParent;
