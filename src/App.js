import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Joao',
            counter: 0
        };

        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.counter += 1;

        this.setState(state);
    }

    diminuir(){
        let state = this.state;

        if(state.counter === 0){
            alert("You've reached zero already!");
            return;
        }

        state.counter -=1;
        this.setState(state);
    }

    //loads the components
    render() {
        return(
            <div>
                <h3>Hello, {this.state.name}!</h3>
                <h4>
                    Contador
                    <button onClick={this.diminuir}>-</button>{this.state.counter}<button onClick={this.aumentar}>+</button>
                </h4>
            </div>
        );
    }
}


export default App;