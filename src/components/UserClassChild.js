import React from "react";

class UserClassChild extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.name + " - inside Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " - inside Component Did Mount");
  }

  render() {
    console.log(this.props.name + " - inside render");
    return (
      <div>
        <h1>{this.props.name + " - inside render"}</h1>
      </div>
    );
  }
}

export default UserClassChild;
