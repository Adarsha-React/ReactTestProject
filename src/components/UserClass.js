import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }
  render() {
    const { name, location } = this.props;

    return (
      <div className="border border-gray-500 m-5 p-3">
        <h1 className="font-bold text-sm">Data from Class Component</h1>
        <h1>Name: {name}</h1>
        <h1>Location: {location}</h1>
        <h1>Adarsha-React</h1>
      </div>
    );
  }
}

export default UserClass;
