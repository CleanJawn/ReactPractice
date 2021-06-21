import React from "react";
import ReactDOM from "react-dom";
import Hello from "./screens/Hello";

class App extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row bg-primary">
                    <div className="col text-center">
                        <h1>This is a Header</h1>
                    </div>
                </div>
                <Hello name="Nate"></Hello>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))