import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Profile Class Component</h1>

        <h1>name : {this.props.name}</h1>
        <h1>age : {this.props.age}</h1>
        <h1>count:{this.state.count}</h1>
      </div>
    );
  }
}

export { ProfileClass };
