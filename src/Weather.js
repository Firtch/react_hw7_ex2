import React from "react";

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // return <h1>Зима</h1>;

    // if (this.props.value === 1) {
    //   return <h1>Зима</h1>;
    // } else if (this.props.value === 2) {
    //   return <h1>Весна</h1>;
    // } else if (this.props.value === 3) {
    //   return <h1>Лето</h1>;
    // } else {
    //   return <h1>Осень</h1>;
    // }

    // switch(this.props.value) {
    //     case 1: return <h1>Зима</h1>;
    //     case 2: return <h1>Весна</h1>;
    //     case 3: return <h1>Лето</h1>;
    //     default: return <h1>Осень</h1>;
    // }

    return (
      <h1>
        {this.props.value === 1
          ? "Зима"
          : this.props.value === 2
          ? "Весна"
          : this.props.value === 3
          ? "Зима"
          : "Лето"}
      </h1>
    );
  }
}

export default Weather;
