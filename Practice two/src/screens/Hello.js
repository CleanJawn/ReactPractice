import React from 'react';

class Hello extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: "Nate",
            newName: ""
        }
    }
    typeName(event) {
        this.setState({newName: event.target.value})
    }
    changeName(){
        this.setState({name: this.state.newName})
    }
    render(){
        const myStyle = {
               fontSize: 30,
               color: "white"
        }
        return(
            <div className="row">
                <div className="col text-center">
                    <p style={myStyle}>Hello {this.state.name}</p>
                    <input type="text" onChange={this.typeName.bind(this)}></input>
                    <button type="button" onClick={this.changeName.bind(this)} className="btn bg-secondary">Change Name</button>
                </div>
            </div>
        )
    }
}

export default Hello;