import React , {Component} from "react";




class StateManage extends Component{
    State ={
    Name :"Fahad khan ",
    age : 15,
    class : 5
};
    render(){
        return(

            


            <div>
                <h2>StateMagament </h2>
            <p> Name :{this.State.Name}</p>
            <p> Age :{this.State.age}</p>

            <p> Class:{this.State.class}</p>

            </div>
        );
    }
}
export default StateManage ;