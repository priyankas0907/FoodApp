import React from "react";
import UserContext from "../utils/UserContext";

class UserCardClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("constructor");

    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        login: "ps",
        location: "in",
        avatar_url: "jhj"
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/priyankas0907");
    const json = await data.json();
    console.log("comp did mount");
    this.setState({
      userInfo: json,
    });
  }

  render() {
    console.log("comp render");
    const { count, count2 ,userInfo} = this.state;
    return (
      <div className="user-card">
        <h3>{userInfo.login}</h3>
        <img src={userInfo.avatar_url}/>
        <h2>User Class Componentc- Prop: {this.props.name}</h2>
        <h1>{count}</h1>
        <h2>{count2}</h2>
        <h3>{userInfo.login}</h3>
        <UserContext.Consumer>
          {({loggedInUser})=><h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          incrementCount
        </button>
      </div>
    );
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
}

export default UserCardClass;
