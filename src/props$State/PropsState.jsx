import React,{Component} from "react";
class student extends Component{
    state ={
        name :"Azmat",
        age : 16,
        city :this.props.city,

    
    };
    render(){
        return(
            <h1>Props and State Different {this.state.name}, My age is {this.state.age},
            {this.state.city}
            </h1>
        )
    }
}
export default student;