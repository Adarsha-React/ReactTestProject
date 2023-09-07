import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count1: 1,
      count2: 2,
      count3: 3,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count1 } = this.state;

    // console.log(this.state);
    return (
      <div className="border border-gray-500 m-5 p-3">
        <h1 className="font-bold text-sm">Data from Class Component</h1>
        <h1> count1 : {count1}</h1>
        <button
          className="bg-green-700 rounded-md px-2 text-white font-semibold"
          onClick={() => {
            //this is how you need to update the state variable in class components
            this.setState({
              count1: count1 + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Increase
        </button>
        <h1> count2 : {this.state.count2}</h1>

        {/* It is updating only the portion of the state object, no update in count3 varibale */}
        <h1>Count3 : {this.state.count3} - this is not changing ***</h1>
        <h1>Name: {name}</h1>
        <h1>Location: {location}</h1>
        <h1>Adarsha-React</h1>
      </div>
    );
  }
}

export default UserClass;
