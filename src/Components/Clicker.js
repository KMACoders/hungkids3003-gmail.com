import React from 'react';
import  './ClickerStyle.css'

class Clicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            countNumber: 0
        }
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        this.increment = this.increment.bind(this);
    }

    decrement(){
        this.setState(
           (prevState, props) => ({
                countNumber: prevState.countNumber - 1
           })
        );
    }

    reset(){
        this.setState(
            {
                countNumber: 0
            }
         );
    }

    increment(){
        this.setState(
            (prevState, props) => ({
                 countNumber: prevState.countNumber + 1
            })
         );
    }

    render(){
        return (
            <div>
                <h1>{this.state.countNumber}</h1>
                <button className="count" onClick={this.decrement}>-</button>
                <button className="reset" onClick={this.reset}>Reset</button>
                <button className="count" onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default Clicker;
