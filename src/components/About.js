import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserClass2 from "./UserClass2";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        {/* <User name={"Adarsha (Function)"} /> */}
        <UserClass name={"Adarsha (Class)"} location={"Bangalore"} />
        {/* <UserClass2 /> */}
      </div>
    );
  }
}

export default About;
