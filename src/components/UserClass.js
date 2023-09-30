import React from "react";
import UserClassChild from "./UserClassChild";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.name + " - Constructor");

    this.state = {
      count1: 1,
    };
  }

  componentDidMount() {
    console.log(this.props.name + " - Child Component Did Mount");
  }

  render() {
    const { name } = this.props;
    console.log(name + " - Render");
    return (
      <div className="border border-gray-500 m-5 p-3">
        <h1>{this.props.name}</h1>
        <UserClassChild name={this.props.name} />
      </div>
    );
  }
}

export default UserClass;
