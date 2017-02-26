import React from 'react';

class BForm extends React.Component{
        constructor() {
          super();
          this.focusOnField = this.focusOnField.bind(this);
        }
        focusOnField (){
            this.refs.textField.focus();
        }
        render (){
            return (
                <div>
                    <input
                        type="text"
                        ref="textField" />
                    <input
                        type="submit"
                        value="Focus on the input!"
                        onClick={this.focusOnField} />
                </div>
            );
        }
    };
class RefsFrom extends React.Component{
        render (){
            return (
                <div>
                    <h1> Welcome to the focus app!</h1>
                    <BForm />
                </div>
            );
        }
    };

export default RefsFrom;
