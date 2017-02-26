import React from 'react';

class Keys extends React.Component{

    constructor(props){
      super(props);
      this.state = {todos: ["get food","drive home","eat food", "sleep"] };
    }

    render(){
        let todos = this.state.todos.map(function(todo,index){
            return <li key={index}>{todo}</li>
        });
        return (
            <div>
                <h1> Welcome to the ToDo list!</h1>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
};

export default Keys; 
