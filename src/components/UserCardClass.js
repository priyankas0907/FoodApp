import React from "react";

class UserCardClass extends React.Component {
  constructor(props) {
    super(props);
    
    console.log("constructor");

    this.state = {
      count: 0,
      count2:1,
    };
  }

  componentDidMount(){
    console.log("comp did mount");
  }

  render() {
    console.log("comp render");
   const {count,count2} =this.state;
    return (
      <div className="user-card">
        <h2>User Class Componentc- Prop: {this.props.name}</h2>
        <h1>{count}</h1>
        <h2>{count2}</h2>
        <button onClick={()=> this.setState( { count : this.state.count+1})}>incrementCount</button>
      </div>
    );
  }
}

export default UserCardClass;
