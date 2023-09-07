import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count1: 1,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count1 } = this.state;

    return (
      <div className="border border-gray-500 m-5 p-3">
        <h1 className="font-bold text-sm">Data from Class Component</h1>
        <h1> count1 : {count1}</h1>
        <h1> count2 : {this.state.count2}</h1>
        <h1>Name: {name}</h1>
        <h1>Location: {location}</h1>
        <h1>Adarsha-React</h1>
      </div>
    );
  }
}

export default UserClass;
