import React from "react";
import UserClass from "./UserClass";
import UserClass2 from "./UserClass2";
import LanguageList from "./LanguageList";

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
        <UserClass name={"Child-1"} location={"Bangalore"} />
        <UserClass2 />
        <LanguageList />
      </div>
    );
  }
}

export default About;
