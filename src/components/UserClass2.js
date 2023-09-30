import React from "react";

class UserClass2 extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child-2 - Constructor");
  }

  componentDidMount() {
    console.log("Child-2 - componentDidMount");
  }

  render() {
    console.log("Child-2 - render");
    return (
      <div>
        <h1>User class2</h1>
      </div>
    );
  }
}

export default UserClass2;
