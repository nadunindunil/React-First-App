import React from 'react';

class ButtonForm extends React.Component{
        render (){
            return (
                <div>
                    <h3>{this.props.text}</h3>
                    <input type="submit" />
                </div>
            );
        }
};
class PropsEx extends React.Component{
        render (){
            return (
                <div>
                    <h1> Welcome to my button app!</h1>
                    <ButtonForm text={this.props.text} />
                </div>
            );
        }
};

export default PropsEx;
