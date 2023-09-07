import React from "react";
class UserClass2 extends React.Component {
  constructor(props) {
    console.log("Child 2 constructor");
    super(props);
  }

  componentDidMount() {
    console.log("Child2 component did mount");
  }

  render() {
    const { count1 } = this.props;

    console.log("Child2 render");
    return (
      <div>
        <h1>Child 2 clas component</h1>
        <h1 className="font-bold"> Count1 from Child2 {count1}</h1>
      </div>
    );
  }
}

export default UserClass2;
